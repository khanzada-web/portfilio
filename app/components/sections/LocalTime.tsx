'use client';

import { useSyncExternalStore } from 'react';

const FORMAT = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Karachi',
});

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
};

/** Live local time in Pakistan. Server HTML shows a placeholder, so nothing mismatches on hydration. */
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => FORMAT.format(Date.now()),
    () => '--:--',
  );
  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time}
    </time>
  );
}
