import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { mysticalTheme } from './styles/theme.ts'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={mysticalTheme}>
      <GlobalStyles />
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(26, 11, 46, 0.95)',
            color: '#d4af37',
            border: '1px solid #d4af37',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'Crimson Text, serif',
          },
        }}
      />
    </ThemeProvider>
  </React.StrictMode>,
)
