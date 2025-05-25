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
          max-width: 900px;
          margin: 3rem auto;
          gap: 1.5rem;
          min-height: 600px;
          
          @media (max-width: 1024px) {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(5, 1fr);
            gap: 1.2rem;
            max-width: 640px;
            min-height: 700px;
          }
          
          @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(10, auto);
            gap: 2.5rem;
            max-width: 320px;  // 더 큰 컨테이너
            width: 100%;
            min-height: auto;
            margin: 2rem auto;
            padding: 0 1rem;
            justify-items: center;
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
      // 데스크톱 레이아웃 (5x4 그리드)
      const desktopPositions = {
        0: 'grid-column: 3; grid-row: 2;', // 현재 상황 (중앙)
        1: 'grid-column: 3; grid-row: 1;', // 도전 (위)
        2: 'grid-column: 2; grid-row: 2;', // 과거 (왼쪽)
        3: 'grid-column: 3; grid-row: 3;', // 잠재의식 (아래)
        4: 'grid-column: 4; grid-row: 2;', // 가능한 미래 (오른쪽)
        5: 'grid-column: 3; grid-row: 4;', // 가까운 미래 (맨 아래)
        6: 'grid-column: 5; grid-row: 1;', // 나의 접근
        7: 'grid-column: 5; grid-row: 2;', // 주변 환경
        8: 'grid-column: 5; grid-row: 3;', // 내면의 소리
        9: 'grid-column: 5; grid-row: 4;', // 최종 조언
      };

      // 태블릿 레이아웃 (4x5 그리드)
      const tabletPositions = {
        0: 'grid-column: 2; grid-row: 2;', // 현재 상황
        1: 'grid-column: 2; grid-row: 1;', // 도전
        2: 'grid-column: 1; grid-row: 2;', // 과거
        3: 'grid-column: 2; grid-row: 3;', // 잠재의식
        4: 'grid-column: 3; grid-row: 2;', // 가능한 미래
        5: 'grid-column: 2; grid-row: 4;', // 가까운 미래
        6: 'grid-column: 4; grid-row: 1;', // 나의 접근
        7: 'grid-column: 4; grid-row: 2;', // 주변 환경
        8: 'grid-column: 4; grid-row: 3;', // 내면의 소리
        9: 'grid-column: 4; grid-row: 4;', // 최종 조언
      };

      // 모바일 레이아웃 (1x10 그리드) - 768px 이하에서 적용
      const mobilePositions = {
        0: 'grid-column: 1; grid-row: 1;', // 현재 상황
        1: 'grid-column: 1; grid-row: 2;', // 도전
        2: 'grid-column: 1; grid-row: 3;', // 과거
        3: 'grid-column: 1; grid-row: 4;', // 잠재의식
        4: 'grid-column: 1; grid-row: 5;', // 가능한 미래
        5: 'grid-column: 1; grid-row: 6;', // 가까운 미래
        6: 'grid-column: 1; grid-row: 7;', // 나의 접근
        7: 'grid-column: 1; grid-row: 8;', // 주변 환경
        8: 'grid-column: 1; grid-row: 9;', // 내면의 소리
        9: 'grid-column: 1; grid-row: 10;', // 최종 조언
      };

      // 초소형 모바일 레이아웃은 제거 (768px 이하에서 바로 1열 적용)

      return `
        ${desktopPositions[$position]}
        
        @media (max-width: 1024px) {
          ${tabletPositions[$position]}
        }
        
        @media (max-width: 768px) {
          ${mobilePositions[$position]}
        }
      `;
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
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    margin-top: 0.3rem;
  }
`;

export default CardSpread;