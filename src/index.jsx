import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider , createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
    typography: {
      fontFamily: "'Merriweather', sans-serif",
      // You can add more typography styles here if needed
    },
    overrides: {
      MuiTypography: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiListItem: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiButton: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiInput: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiSelect: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiAppBar: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiCard: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      MuiTable: {
        root: {
          fontFamily: "'Merriweather', sans-serif",
        },
      },
      // Add more overrides for other components if needed
    },
    // Add more configuration options as needed
  });
  

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  );
