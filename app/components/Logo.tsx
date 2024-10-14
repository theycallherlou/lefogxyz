'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext'; // Import the context
import Image from 'next/image';

export default function Logo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="logo-container">
      {/* Display the appropriate logo based on the theme */}
      {theme === 'dark' ? (
        <Image
          src="/images/logo_dark.png"
          alt="Logo Dark"
          width={300}
          height={300}
        />
      ) : (
        <Image
          src="/images/logo_light.png"
          alt="Logo Light"
          width={300}
          height={300}
        />
      )}
    </div>
  );
}
