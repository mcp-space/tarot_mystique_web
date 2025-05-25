import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Home, BookOpen, Sparkles } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <Sparkles size={24} />
          <LogoText>Tarot Mystique</LogoText>
        </Logo>

        <NavLinks>
          <NavLink 
            to="/" 
            $isActive={isActive('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={18} />
            <span>홈</span>
          </NavLink>

          <NavLink 
            to="/reading" 
            $isActive={isActive('/reading')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={18} />
            <span>타로 리딩</span>
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #daa520;
  font-weight: bold;
  font-size: 1.2rem;
  
  &:hover {
    color: #ffd700;
  }
`;

const LogoText = styled.span`
  background: linear-gradient(45deg, #daa520, #ffd700);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(motion(Link))<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  color: ${props => props.$isActive ? '#daa520' : '#e0e0e0'};
  background: ${props => props.$isActive ? 'rgba(218, 165, 32, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.$isActive ? 'rgba(218, 165, 32, 0.3)' : 'transparent'};
  transition: all 0.3s ease;
  font-weight: ${props => props.$isActive ? '600' : '400'};

  &:hover {
    color: #daa520;
    background: rgba(218, 165, 32, 0.1);
    border-color: rgba(218, 165, 32, 0.3);
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export default Navigation;