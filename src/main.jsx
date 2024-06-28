import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from './contexts/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </ThemeProvider>
)
