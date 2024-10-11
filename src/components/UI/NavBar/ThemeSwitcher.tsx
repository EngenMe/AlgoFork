import { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return theme === 'light' ? (
    <MdDarkMode onClick={toggleTheme} className="size-8 lg:ml-5 xl:ml-10" />
  ) : (
    <MdLightMode onClick={toggleTheme} className="size-8 lg:ml-5 xl:ml-10" />
  );
};

export default ThemSwitcher;
