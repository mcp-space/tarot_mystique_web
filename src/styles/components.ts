import styled from 'styled-components'
import { motion } from 'framer-motion'

// Container Components
export const MysticalContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`

export const Section = styled.section`
  padding: 80px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 60px 0;
  }
`

// Typography Components
export const MysticalTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  
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
  
  text-shadow: 0 0 30px ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

export const MysticalSubtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`

export const MysticalText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

// Button Components
export const MysticalButton = styled(motion.button)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.125rem;
  font-weight: 600;
  padding: 16px 32px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: linear-gradient(
    45deg,
    rgba(212, 175, 55, 0.1),
    rgba(139, 74, 156, 0.1)
  );
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(
      45deg,
      rgba(212, 175, 55, 0.2),
      rgba(139, 74, 156, 0.2)
    );
    box-shadow: ${({ theme }) => theme.colors.shadow.gold};
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
`

// Card Components
export const MysticalCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.gold};
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.colors.shadow.dark};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.colors.shadow.gold};
    transform: translateY(-5px);
  }
`

// Loading Components
export const MysticalSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(212, 175, 55, 0.3);
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 2rem auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
