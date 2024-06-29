// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import App from './App';


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
