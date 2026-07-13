import React, { createContext, useContext, useEffect, useState } from 'react';

export interface PmTheme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const STORAGE_KEY = 'pm-portfolio-dark-mode';

const ThemeContext = createContext<PmTheme | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    () => typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY) === '1'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('pm-dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function usePmTheme(): PmTheme {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('usePmTheme must be used within a ThemeProvider');
  return ctx;
}

/** oklch-based accent/border/background triad for a given hue, tuned per color scheme. */
export function hueColors(hue: number, darkMode: boolean) {
  return {
    bar: darkMode ? `oklch(70% 0.13 ${hue})` : `oklch(55% 0.13 ${hue})`,
    border: darkMode ? `oklch(70% 0.1 ${hue} / 0.35)` : `oklch(55% 0.1 ${hue} / 0.25)`,
    card: darkMode ? `oklch(70% 0.1 ${hue} / 0.06)` : `oklch(55% 0.1 ${hue} / 0.05)`,
  };
}
