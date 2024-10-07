'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Logo() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const q = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(q.matches ? 'dark' : 'light');
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    q.addEventListener('change', handleChange);

    return () => {
      q.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div>
      {colorScheme === 'dark' ? (
        <Image
          src="/images/logo_dark.png"
          alt="Dark mode logo"
          width={400}
          height={400}
          priority
          aria-label="Dark mode logo"
        />
      ) : (
        <Image
          src="/images/logo_light.png"
          alt="Light mode logo"
          width={400}
          height={400}
          priority
          aria-label="Light mode logo"
        />
      )}
    </div>
  );
}
