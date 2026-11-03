import { NextRequest, NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json().catch(() => null);
    const email = typeof rawBody?.email === 'string' ? rawBody.email.trim().toLowerCase() : '';

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
    }

    const apiUrl = process.env.CRM_NEWSLETTER_API_URL;
    const apiKey = process.env.CRM_NEWSLETTER_API_KEY;
    if (!apiUrl || !apiKey) {
      console.error('Newsletter subscribe is not configured (CRM_NEWSLETTER_API_URL / CRM_NEWSLETTER_API_KEY)');
      return NextResponse.json({ error: 'Subscriptions are temporarily unavailable' }, { status: 503 });
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'portfolio-website',
        page: request.headers.get('referer') || undefined,
      }),
    });

    if (!response.ok) {
      console.error('Newsletter subscribe failed:', response.status, await response.text());
      return NextResponse.json({ error: 'Subscription failed, please try again' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Subscription failed, please try again' }, { status: 500 });
  }
}
