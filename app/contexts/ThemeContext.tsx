'use client';
import React, { createContext, useEffect, useState, ReactNode } from 'react';

type TTheme = 'light' | 'dark';

type ThemeContextType = {
  theme: TTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<TTheme>(() => {
    if (typeof window !== 'undefined') {
      // check for a forced theme
      const forcedTheme = localStorage.getItem('theme');
      if (forcedTheme) {
        return forcedTheme as TTheme;
      }
      // check for a forced color scheme
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      return systemTheme as TTheme;
    }
    return 'light'; // default theme if window is undefined
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme;
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//     // check for a theme
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       return savedTheme as 'light' | 'dark';
//     }
//     const systemPrefersDark = window.matchMedia(
//       '(prefers-color-scheme: dark)'
//     ).matches;
//     return systemPrefersDark ? 'dark' : 'light';
//   });

//   useEffect(() => {
//     document.body.classList.toggle('dark', theme === 'dark');
//     document.body.classList.toggle('light', theme === 'light');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme: 'light' | 'dark') =>
//       prevTheme === 'dark' ? 'light' : 'dark'
//     );
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a provider');
  }
  return context;
}
