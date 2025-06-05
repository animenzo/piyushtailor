import React, { useEffect, useState } from 'react';

export function DarkModelToggler() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="absolute right-4 xl:top-3 top-12  rounded-full cursor-pointer bg-gray-200 dark:bg-gray-700 transition-colors h-8 w-8"
    >
      {theme === 'dark' ? (
        <i className="ri-contrast-2-line h-5 w-5 text-blue-400 text-2xl"></i>
      ) : (
        <i className="ri-sun-line h-5 w-5 text-yellow-400 text-2xl"></i>
      )}
    </button>
  );
}
