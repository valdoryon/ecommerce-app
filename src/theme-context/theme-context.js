import { createContext } from 'react';

export const ThemeContext = createContext(
  window.localStorage.getItem('theme')
    ? window.localStorage.getItem('theme')
    : 'light'
);
