import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Logo() {
  const [mode, setMode] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    setMode(query.matches);
    const handler = (e: MediaQueryListEvent) => setMode(e.matches);
    query.addEventListener('change', handler);
    return () => {
      query.removeEventListener('change', handler);
    };
  }, []);

  return (
    <div>
      <Image
        src={mode ? '/images/logo_dark.png' : '/images/logo_light.png'}
        alt="logo for le fog"
        width={500}
        height={500}
        className="logo"
        title="logo for le fog"
        aria-label="logo for le fog"
        priority
      />
    </div>
  );
}
