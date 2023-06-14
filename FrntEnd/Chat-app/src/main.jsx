import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './assets/Styles/themes.jsx'
import { ThemeProvider } from '@mui/material'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
)
