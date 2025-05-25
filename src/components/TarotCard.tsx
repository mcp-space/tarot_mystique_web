import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TarotCardData } from '../types/tarot';

interface TarotCardProps {
  card: TarotCardData;
  isRevealed?: boolean;
  size?: 'small' | 'medium' | 'large';
  isReversed?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TarotCard: React.FC<TarotCardProps> = ({
  card,
  isRevealed = false,
  size = 'medium',
  isReversed = false,
  onClick,
  className
}) => {
  return (
    <CardContainer
      $size={size}
      className={className}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      <CardInner $isRevealed={isRevealed}>
        <CardBack>
          <BackPattern>
            <BackSymbol>🔮</BackSymbol>
            <BackText>TAROT</BackText>
            <BackDecoration>✨ ⭐ ✨</BackDecoration>
          </BackPattern>
        </CardBack>
        
        {/* 이미지만 표시하는 면 (기본 상태) */}
        <CardImageOnly $isReversed={isReversed}>
          {card.imageUrl ? (
            <ActualCardImage 
              src={card.imageUrl} 
              alt={`${card.nameKr} (${card.name})`}
              $isReversed={isReversed}
              onError={(e) => {
                console.error('Image failed to load:', card.imageUrl);
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
          ) : (
            <CardSymbol $isReversed={isReversed}>🔮</CardSymbol>
          )}
        </CardImageOnly>
        
        {/* 기존 카드 정보 UI (호버시 표시) */}
        <CardFront $isReversed={isReversed}>
          {isReversed && <ReversedBadge>역방향</ReversedBadge>}
          
          <CardHeader>
            <CardNumber>{card.numerology}</CardNumber>
            <CardName>{card.name}</CardName>
            <CardNameKr>{card.nameKr}</CardNameKr>
          </CardHeader>
          
          <CardImageContainer>
            <CardImage>
              <CardSymbol $isReversed={false}>
                {card.element || 'MAJOR'}
              </CardSymbol>
            </CardImage>
            
            <ElementBadge>
              {card.element || 'Major'}
            </ElementBadge>
          </CardImageContainer>
          
          <CardFooter>
            <KeywordDisplay>
              {card.keywordsKr.slice(0, 2).join(' • ')}
            </KeywordDisplay>
          </CardFooter>
        </CardFront>
      </CardInner>
    </CardContainer>
  );
};

const getCardSize = (size: string) => {
  switch (size) {
    case 'small':
      return { 
        width: '120px', 
        height: '200px',
        mobileWidth: '280px',  // 훨씬 더 크게
        mobileHeight: '420px'
      };
    case 'large':
      return { 
        width: '280px', 
        height: '450px',
        mobileWidth: '240px',
        mobileHeight: '380px'
      };
    default:
      return { 
        width: '180px', 
        height: '300px',
        mobileWidth: '200px',
        mobileHeight: '320px'
      };
  }
};

const CardContainer = styled(motion.div)<{ $size: string }>`
  ${({ $size }) => {
    const { width, height, mobileWidth, mobileHeight } = getCardSize($size);
    return `
      width: ${width};
      height: ${height};
      
      @media (max-width: 768px) {
        width: ${mobileWidth};
        height: ${mobileHeight};
      }
    `;
  }}
  
  perspective: 1000px;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  user-select: none;
`;

const CardInner = styled.div<{ $isRevealed: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: ${props => props.$isRevealed ? 'rotateY(0deg)' : 'rotateY(0deg)'};
  
  /* 호버시 카드 뒤집기 효과 */
  ${CardContainer}:hover & {
    transform: ${props => props.$isRevealed ? 'rotateY(-180deg)' : 'rotateY(-180deg)'};
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

const CardBack = styled(CardSide)`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackPattern = styled.div`
  text-align: center;
  color: #daa520;
`;

const BackSymbol = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
  
  @media (max-width: 768px) {
    font-size: 4rem;  // 더 크게
    margin-bottom: 1rem;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const BackText = styled.div`
  font-family: serif;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;  // 더 크게
    letter-spacing: 4px;
    margin-bottom: 0.8rem;
  }
`;

const BackDecoration = styled.div`
  font-size: 0.8rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    font-size: 1rem;  // 더 크게
  }
`;

const CardFront = styled(CardSide)<{ $isReversed: boolean }>`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #000000;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  color: #1a1a2e;
`;

// 이미지만 표시하는 면 (기본 상태)
const CardImageOnly = styled(CardSide)<{ $isReversed: boolean }>`
  background: transparent;
  border: 2px solid #000000;
  transform: rotateY(0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
`;

// 실제 카드 이미지
const ActualCardImage = styled.img<{ $isReversed: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transform: ${props => props.$isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const CardHeader = styled.div`
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(218, 165, 32, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem;  // 더 큰 패딩
  }
`;

const CardNumber = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #8a2be2;
  margin-bottom: 0.3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;  // 더 크게
    margin-bottom: 0.5rem;
  }
`;

const CardName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #4b0082;
  margin-bottom: 0.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;  // 더 크게
    margin-bottom: 0.3rem;
  }
`;

const CardNameKr = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #1a1a2e;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;  // 더 크게
  }
`;

const CardImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
`;

const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CardSymbol = styled.div<{ $isReversed: boolean }>`
  font-size: 4rem;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transform: ${props => props.$isReversed ? 'rotate(180deg)' : 'rotate(0deg)'};
  
  @media (max-width: 768px) {
    font-size: 6rem;  // 훨씬 더 크게
  }
`;

const ReversedBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: linear-gradient(45deg, #dc3545, #c82333);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);
  
  @media (max-width: 768px) {
    top: 0.8rem;
    left: 0.8rem;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 10px;
  }
`;

const ElementBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: linear-gradient(45deg, #8a2be2, #4b0082);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    top: 0.3rem;
    right: 0.3rem;
    padding: 0.1rem 0.3rem;
    font-size: 0.5rem;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.4rem;
    padding: 0.1rem 0.2rem;
    border-radius: 4px;
  }
`;

const CardFooter = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid rgba(218, 165, 32, 0.3);
  
  @media (max-width: 768px) {
    padding: 1.5rem;  // 더 큰 패딩
  }
`;

const KeywordDisplay = styled.div`
  font-size: 0.7rem;
  color: #6c757d;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1rem;  // 더 크게
  }
`;

export default TarotCard;