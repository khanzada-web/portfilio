import { ImageResponse } from 'next/og';
import { PERSON } from './site';

export const SHARE_CARD_SIZE = { width: 1200, height: 630 };
export const SHARE_CARD_ALT = `${PERSON.name} — ${PERSON.role}`;

const NEON = '#39ff14';
const INK = '#030712';

/** 1200×630 link-preview card: name, role and proof points, readable at thumbnail size. */
export function renderShareCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: INK,
          backgroundImage: `radial-gradient(circle at 85% 15%, rgba(57,255,20,0.18), transparent 45%)`,
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 16,
              background: NEON,
              color: INK,
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            MH
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.7)', letterSpacing: 2 }}>
            MUSSAWARHAYAT.SITE
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            {PERSON.name}
          </div>
          <div style={{ display: 'flex', marginTop: 24, fontSize: 44, fontWeight: 700, color: NEON }}>
            {PERSON.role}
          </div>
          <div style={{ display: 'flex', marginTop: 20, fontSize: 30, color: 'rgba(255,255,255,0.75)' }}>
            Production SaaS, dashboards and smart-contract apps for remote teams.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, fontSize: 24 }}>
          {['Next.js', 'TypeScript', 'PostgreSQL', 'Solidity', PERSON.coverage].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '10px 20px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    SHARE_CARD_SIZE,
  );
}
