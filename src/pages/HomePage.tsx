import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Sparkles, Star, Moon, Sun } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartReading = () => {
    navigate('/reading');
  };

  return (
    <HomeContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection>
        <IconContainer>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={40} />
          </motion.div>
        </IconContainer>
        
        <Title>🔮 Tarot Mystique</Title>
        <Subtitle>운명의 카드가 당신을 기다립니다</Subtitle>
        
        <Description>
          신비로운 타로 카드의 세계로 들어가 당신의 미래를 엿보세요.
          <br />
          카드들이 전하는 메시지를 통해 새로운 통찰을 얻으실 수 있습니다.
        </Description>

        <StartButton
          whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(138, 43, 226, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartReading}
        >
          <Star size={20} />
          타로 리딩 시작하기
        </StartButton>
      </HeroSection>

      <FeatureSection>
        <FeatureCard
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={24} />
          <FeatureTitle>신비로운 예언</FeatureTitle>
          <FeatureText>고대의 지혜가 담긴 타로 카드로 미래를 예측합니다</FeatureText>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={24} />
          <FeatureTitle>개인화된 해석</FeatureTitle>
          <FeatureText>당신만을 위한 특별한 카드 해석을 제공합니다</FeatureText>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Sparkles size={24} />
          <FeatureTitle>직관적 가이드</FeatureTitle>
          <FeatureText>명확하고 이해하기 쉬운 가이드를 제공합니다</FeatureText>
        </FeatureCard>
      </FeatureSection>
    </HomeContainer>
  );
};

const HomeContainer = styled(motion.div)`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(75, 0, 130, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    min-height: calc(100vh - 70px);
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem;
    min-height: calc(100vh - 60px);
  }
`;

const HeroSection = styled.div`
  text-align: center;
  max-width: 600px;
  z-index: 1;
  
  @media (max-width: 768px) {
    max-width: 500px;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 2rem;
  color: #daa520;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #daa520, #ffd700, #daa520);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  text-shadow: 0 0 30px rgba(218, 165, 32, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #b19cd9;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: #e0e0e0;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    br {
      display: none;
    }
  }
`;

const StartButton = styled(motion.button)`
  background: linear-gradient(45deg, #8a2be2, #4b0082);
  border: none;
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto 4rem;
  box-shadow: 0 4px 20px rgba(138, 43, 226, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #9932cc, #6a0dad);
  }
  
  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    margin-bottom: 2rem;
    border-radius: 40px;
  }
`;

const FeatureSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  z-index: 1;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 400px;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
    max-width: 100%;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  svg {
    color: #daa520;
    margin-bottom: 1rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(218, 165, 32, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 12px;
    
    svg {
      margin-bottom: 0.8rem;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #daa520;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const FeatureText = styled.p`
  color: #e0e0e0;
  line-height: 1.5;
  opacity: 0.9;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export default HomePage;