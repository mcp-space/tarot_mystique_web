export const mysticalTheme = {
  colors: {
    // Dark mystical palette
    primary: '#d4af37', // Mystical gold
    secondary: '#8b4a9c', // Deep purple
    accent: '#e74c3c', // Blood red
    background: {
      dark: '#0a0a0a',
      darker: '#1a0b2e',
      purple: '#16213e',
      card: 'rgba(26, 11, 46, 0.8)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d4af37',
      muted: '#a0a0a0',
      dark: '#2c2c2c',
    },
    border: {
      gold: '#d4af37',
      purple: '#8b4a9c',
      dark: 'rgba(255, 255, 255, 0.1)',
    },
    shadow: {
      gold: '0 0 20px rgba(212, 175, 55, 0.3)',
      purple: '0 0 30px rgba(139, 74, 156, 0.4)',
      dark: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },
  },
  fonts: {
    heading: "'Cinzel', serif",
    body: "'Crimson Text', serif",
    accent: "'Julius Sans One', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
  },
  animations: {
    mysticalFloat: `
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-10px) rotate(1deg); }
      66% { transform: translateY(5px) rotate(-1deg); }
    `,
    cardFlip: `
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(180deg); }
    `,
    shimmer: `
      0% { background-position: -200px 0; }
      100% { background-position: calc(200px + 100%) 0; }
    `,
    pulse: `
      0%, 100% { opacity: 0.8; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    `,
  },
} as const

export type MysticalTheme = typeof mysticalTheme
