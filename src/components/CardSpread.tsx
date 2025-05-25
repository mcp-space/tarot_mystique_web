import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TarotCard } from './TarotCard';
import { DrawnCard, SpreadType } from '../types/tarot';

interface CardSpreadProps {
  cards: DrawnCard[];
  spreadType: SpreadType;
  isRevealed?: boolean;
  onCardClick?: (card: DrawnCard, index: number) => void;
}

export const CardSpread: React.FC<CardSpreadProps> = ({
  cards,
  spreadType,
  isRevealed = false,
  onCardClick
}) => {
  const getSpreadLayout = () => {
    switch (spreadType) {
      case 'single':
        return 'single';
      case 'three-card':
        return 'three-card';
      case 'celtic-cross':
        return 'celtic-cross';
      default:
        return 'single';
    }
  };

  const getCardDelay = (index: number) => index * 0.2;

  return (
    <SpreadContainer $layout={getSpreadLayout()}>
      {cards.map((drawnCard, index) => (
        <CardPosition
          key={index}
          $position={index}
          $layout={getSpreadLayout()}
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 0.8,
            delay: getCardDelay(index),
            ease: "easeOut"
          }}
        >
          <TarotCard
            card={drawnCard.card}
            isRevealed={isRevealed}
            isReversed={drawnCard.reversed}
            onClick={onCardClick ? () => onCardClick(drawnCard, index) : undefined}
            size={spreadType === 'celtic-cross' ? 'small' : 'medium'}
          />
          
          {spreadType !== 'single' && (
            <PositionLabel>
              {getPositionLabel(spreadType, index)}
            </PositionLabel>
          )}
        </CardPosition>
      ))}
    </SpreadContainer>
  );
};

const getPositionLabel = (spreadType: SpreadType, position: number): string => {
  switch (spreadType) {
    case 'three-card':
      return ['과거', '현재', '미래'][position] || '';
    case 'celtic-cross':
      return [
        '현재',
        '도전',
        '과거',
        '잠재의식',
        '가능한 미래',
        '가까운 미래',
        '나의 접근',
        '주변 환경',
        '내면의 소리',
        '최종 조언'
      ][position] || '';
    default:
      return '';
  }
};

const SpreadContainer = styled.div<{ $layout: string }>`
  display: grid;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  margin: 3rem 0;
  
  ${({ $layout }) => {
    switch ($layout) {
      case 'single':
        return `
          grid-template-columns: 1fr;
          max-width: 200px;
          margin: 3rem auto;
        `;
      case 'three-card':
        return `
          grid-template-columns: repeat(3, 1fr);
          max-width: 720px;
          margin: 3rem auto;
          gap: 3rem;
          
          @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 200px;
          }
        `;
      case 'celtic-cross':
        return `
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(4, 1fr);
          max-width: 800px;
          margin: 3rem auto;
          gap: 1.5rem;
          
          @media (max-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 1rem;
            max-width: 480px;
          }
        `;
      default:
        return '';
    }
  }}
`;

const CardPosition = styled(motion.div)<{ $position: number; $layout: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  
  ${({ $layout, $position }) => {
    if ($layout === 'celtic-cross') {
      // 켈틱크로스 개선된 포지션 (더 직관적)
      switch ($position) {
        case 0: return 'grid-column: 3; grid-row: 2;'; // 현재 상황 (중앙)
        case 1: return 'grid-column: 3; grid-row: 1;'; // 가능한 결과 (위)
        case 2: return 'grid-column: 2; grid-row: 2;'; // 과거의 영향 (왼쪽)
        case 3: return 'grid-column: 3; grid-row: 3;'; // 잠재의식 (아래)
        case 4: return 'grid-column: 4; grid-row: 2;'; // 가능한 미래 (오른쪽)
        case 5: return 'grid-column: 3; grid-row: 4;'; // 당신의 접근법 (맨 아래)
        case 6: return 'grid-column: 5; grid-row: 1;'; // 외부 영향
        case 7: return 'grid-column: 5; grid-row: 2;'; // 희망과 두려움
        case 8: return 'grid-column: 5; grid-row: 3;'; // 최종 결과
        case 9: return 'grid-column: 5; grid-row: 4;'; // 조언
        default: return '';
      }
    }
    return '';
  }}
`;

const PositionLabel = styled.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #daa520;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(218, 165, 32, 0.5);
  background: rgba(26, 26, 46, 0.8);
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  border: 1px solid rgba(218, 165, 32, 0.3);
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`;

export default CardSpread;