import styled, { createGlobalStyle } from 'styled-components'
import { MysticalTheme } from './theme'

export const GlobalStyles = createGlobalStyle<{ theme: MysticalTheme }>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.colors.background.dark};
    min-height: 100%;
    /* 오버스크롤 시 배경색 설정 */
    overscroll-behavior: none;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: radial-gradient(
      ellipse at center,
      ${({ theme }) => theme.colors.background.darker} 0%,
      ${({ theme }) => theme.colors.background.purple} 50%,
      ${({ theme }) => theme.colors.background.dark} 100%
    );
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: ${({ theme }) => theme.colors.text.primary};
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    /* 오버스크롤 바운스 방지 */
    overscroll-behavior-y: none;
    /* iOS Safari 오버스크롤 배경색 */
    background-color: ${({ theme }) => theme.colors.background.dark};
    
    /* Mystical scrollbar */
    &::-webkit-scrollbar {
      width: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.background.dark};
    }
    
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        45deg,
        ${({ theme }) => theme.colors.primary},
        ${({ theme }) => theme.colors.secondary}
      );
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  /* Mystical selection */
  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background.dark};
  }

  /* Custom animations */
  @keyframes mysticalFloat {
    ${({ theme }) => theme.animations.mysticalFloat}
  }
  
  @keyframes cardFlip {
    ${({ theme }) => theme.animations.cardFlip}
  }
  
  @keyframes shimmer {
    ${({ theme }) => theme.animations.shimmer}
  }
  
  @keyframes pulse {
    ${({ theme }) => theme.animations.pulse}
  }

  /* Mystical text effects */
  .mystical-text {
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary},
      ${({ theme }) => theme.colors.primary}
    );
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s ease-in-out infinite;
  }
  
  .glow-text {
    text-shadow: 
      0 0 10px ${({ theme }) => theme.colors.primary},
      0 0 20px ${({ theme }) => theme.colors.primary},
      0 0 30px ${({ theme }) => theme.colors.primary};
  }
  
  .floating {
    animation: mysticalFloat 6s ease-in-out infinite;
  }
  
  .pulsing {
    animation: pulse 2s ease-in-out infinite;
  }

  /* 반응형 유틸리티 클래스 */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 0.8rem;
    }
  }
  
  .hide-mobile {
    @media (max-width: 768px) {
      display: none !important;
    }
  }
  
  .hide-desktop {
    @media (min-width: 769px) {
      display: none !important;
    }
  }
  
  .text-center-mobile {
    @media (max-width: 768px) {
      text-align: center;
    }
  }

  /* Button reset */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  /* Link reset */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Input reset */
  input, textarea {
    border: none;
    outline: none;
    font-family: inherit;
  }

  /* Disable highlight on touch devices */
  * {
    -webkit-tap-highlight-color: transparent;
  }
`
