import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, Sparkles, HelpCircle, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [showGuide, setShowGuide] = useState(false);

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

          <GuideButton
            onClick={() => setShowGuide(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle size={18} />
            <span>가이드</span>
          </GuideButton>
        </NavLinks>
      </NavContent>

      {/* 가이드 모달 */}
      <AnimatePresence>
        {showGuide && (
          <>
            <GuideOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGuide(false)}
            />
            <GuideModal
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <GuideHeader>
                <h3>🔮 타로 가이드</h3>
                <CloseButton onClick={() => setShowGuide(false)}>
                  <X size={20} />
                </CloseButton>
              </GuideHeader>
              
              <GuideContent>
                <GuideCard>
                  <h4>🌟 오늘의 운세</h4>
                  <p>하나의 카드로 오늘 하루의 에너지와 조언을 받아보세요.</p>
                  <p className="example">예: "오늘 하루 어떻게 보내면 좋을까요?"</p>
                </GuideCard>
                
                <GuideCard>
                  <h4>⏳ 과거현재미래</h4>
                  <p>세 장의 카드로 과거의 영향, 현재 상황, 미래의 가능성을 살펴봅니다.</p>
                  <p className="example">예: "내 연애는 어떻게 흘러갈까요?"</p>
                </GuideCard>
                
                <GuideCard>
                  <h4>🔮 종합운세</h4>
                  <p>10장의 카드로 인생의 모든 영역을 깊이 있게 분석합니다.</p>
                  <p>현재 상황, 장애물, 숨겨진 영향, 조언 등을 포괄적으로 봅니다.</p>
                  <p className="example">예: "내 인생에서 중요한 결정을 앞두고 있어요"</p>
                </GuideCard>
              </GuideContent>
            </GuideModal>
          </>
        )}
      </AnimatePresence>
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

const GuideButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: transparent;
  border: 1px solid transparent;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 400;

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

const GuideOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1999;
`;

const GuideModal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid #daa520;
  border-radius: 16px;
  padding: 0;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 2000;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const GuideHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid rgba(218, 165, 32, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    color: #daa520;
    margin: 0;
    font-size: 1.3rem;
  }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #e0e0e0;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(218, 165, 32, 0.1);
    color: #daa520;
  }
`;

const GuideContent = styled.div`
  padding: 1.5rem;
`;

const GuideCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  h4 {
    color: #daa520;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  p {
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .example {
    color: #b0b0b0;
    font-style: italic;
    font-size: 0.9rem;
  }
`;

export default Navigation;