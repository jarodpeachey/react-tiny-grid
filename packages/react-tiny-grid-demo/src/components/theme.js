/* eslint-disable import/prefer-default-export */
import React from 'react';

export const theme = {
  radius: '9px',
  fontSize: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 23,
    h5: 18,
    h6: 16,
    p: 16,
    small: 14,
  },
  color: {
    success: '#54dd7e',
    error: '#dd5454',
    paragraph: '#4b4f61',
    heading: '#2c2f3b',
    primary: '#546cde',
    secondary: '#548bdd',
    gray: {
      one: '#f5f5f5',
      two: '#eeeeee',
      three: '#e0e0e0',
      four: '#bdbdbd',
      five: '#9e9e9e',
      six: '#757575',
      seven: '#616161',
      eight: '#424242',
      nine: '#212121',
    },
  },
};

export const ThemeContext = React.createContext();

export const CustomThemeProvider = (props) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
