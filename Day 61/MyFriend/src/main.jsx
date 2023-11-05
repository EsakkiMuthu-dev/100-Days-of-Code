import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const defaultTheme=createTheme({
  palette: {
    primary: {
      main: '#5C8374',
    },
    secondary: {
      main: '#93B1A6',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
<ThemeProvider  theme={defaultTheme}>
<CssBaseline />
  <React.StrictMode>  
    <App />  
  </React.StrictMode>
  </ThemeProvider>,
)
