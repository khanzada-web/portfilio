import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Events are retried up to five times; keep ids for ten minutes so a retry
// after a lost 200 does not process the same event twice.
const SEEN_TTL_MS = 10 * 60 * 1000;
const seenEvents = new Map<string, number>();

function isDuplicate(eventId: string): boolean {
  const now = Date.now();
  for (const [id, seenAt] of seenEvents) {
    if (now - seenAt > SEEN_TTL_MS) seenEvents.delete(id);
  }
  if (seenEvents.has(eventId)) return true;
  seenEvents.set(eventId, now);
  return false;
}

export async function POST(request: NextRequest) {
  const secret = process.env.CRM_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'not configured' }, { status: 503 });
  }

  const timestamp = request.headers.get('x-crm-timestamp');
  const signature = (request.headers.get('x-crm-signature') ?? '').replace(/^v1=/, '');
  // Raw body: the signature is over the exact bytes sent, so never re-serialise.
  const body = await request.text();

  if (!timestamp || Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) {
    return NextResponse.json({ error: 'stale' }, { status: 400 });
  }

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}.${body}`)
    .digest('hex');

  const ok =
    signature.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!ok) {
    return NextResponse.json({ error: 'bad signature' }, { status: 401 });
  }

  const event = JSON.parse(body);
  const eventId = request.headers.get('x-crm-event-id') ?? event.id;
  if (eventId && isDuplicate(eventId)) {
    return NextResponse.json({ ok: true, deduplicated: true });
  }

  console.log('CRM event:', request.headers.get('x-crm-event') ?? event.type, eventId);

  return NextResponse.json({ ok: true });
}
