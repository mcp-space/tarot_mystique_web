import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Shuffle, Eye, Star, Moon } from 'lucide-react'
import {
  MysticalContainer,
  Section,
  MysticalTitle,
  MysticalSubtitle,
  MysticalButton
} from '../styles/components'
import { CardSpread } from '../components/CardSpread'
import { getRandomCards } from '../data/majorArcana'
import { DrawnCard, SpreadType, ReadingResult } from '../types/tarot'
import toast from 'react-hot-toast'

const ReadingSection = styled(Section)`
  min-height: 100vh;
  padding-top: 120px;
`

const SpreadSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const SpreadButton = styled(MysticalButton)<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background: ${({ theme, $isActive }) =>
    $isActive
      ? `linear-gradient(45deg, ${theme.colors.primary}, ${theme.colors.secondary})`
      : 'transparent'
  };
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.background.dark : theme.colors.primary
  };
  border-color: ${({ theme }) => theme.colors.primary};
  
  svg {
    flex-shrink: 0;
  }
  
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
  }
`

const QuestionInput = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`

const QuestionTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.gold};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  font-style: normal;
  resize: vertical;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
    font-style: normal;
    opacity: 0.8;
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  }
`

const ReadingControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const StyledReadingButton = styled(MysticalButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    flex-shrink: 0;
  }
`

const ResultSection = styled(motion.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.gold};
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const ResultTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`

const ResultText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`

const ReadingPage: React.FC = () => {
  const [selectedSpread, setSelectedSpread] = useState<SpreadType>('single')
  const [question, setQuestion] = useState('')
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([])
  const [isReading, setIsReading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  
  const spreadOptions = [
    { type: 'single' as SpreadType, name: '오늘의 운세', icon: <Star />, description: '하루를 위한 한 장의 카드' },
    { type: 'three-card' as SpreadType, name: '과거현재미래', icon: <Eye />, description: '시간의 흐름으로 보는 운세' },
    { type: 'celtic-cross' as SpreadType, name: '종합운세', icon: <Moon />, description: '인생 전반에 대한 깊은 통찰' }
  ]
  
  const getCardCount = (spread: SpreadType): number => {
    switch (spread) {
      case 'single': return 1
      case 'three-card': return 3
      case 'celtic-cross': return 10
      default: return 1
    }
  }
  
  const drawCards = async () => {
    if (!question.trim()) {
      toast.error('💭 궁금한 것을 먼저 적어주세요!')
      return
    }
    
    setIsReading(true)
    setShowResult(false)
    
    // 카드 셔플링 애니메이션을 위한 딜레이
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const cardCount = getCardCount(selectedSpread)
    const cards = getRandomCards(cardCount)
    
    const newDrawnCards: DrawnCard[] = cards.map((card, index) => ({
      card,
      position: index,
      reversed: Math.random() < 0.3, // 30% 확률로 역방향
      interpretation: getCardInterpretation(card, Math.random() < 0.3, selectedSpread, index)
    }))
    
    setDrawnCards(newDrawnCards)
    setIsReading(false)
    setShowResult(true)
    
    toast.success('✨ 카드가 답을 알려드릴게요!')
  }
  
  const getCardInterpretation = (card: any, reversed: boolean, spread: SpreadType, position: number): string => {
    const meaning = reversed ? card.meanings.reversed.general : card.meanings.upright.general
    
    // 스프레드 타입과 위치에 따른 쉬운 해석
    let positionContext = ''
    if (spread === 'three-card') {
      const positions = ['과거의 영향', '현재 상황', '미래의 가능성']
      positionContext = positions[position]
    } else if (spread === 'celtic-cross') {
      const positions = [
        '현재 상황', '당면한 도전', '과거의 영향', '잠재의식의 메시지',
        '가능한 미래', '가까운 미래', '당신의 접근법', '주변 환경',
        '내면의 희망과 두려움', '최종 결과와 조언'
      ]
      positionContext = positions[position]
    }
    
    return `${positionContext ? `[${positionContext}] ` : ''}${meaning}`
  }
  
  const resetReading = () => {
    setDrawnCards([])
    setQuestion('')
    setShowResult(false)
  }
  
  return (
    <ReadingSection>
      <MysticalContainer>
        <MysticalTitle className="mystical-text">
          운명의 카드를 뽑아보세요
        </MysticalTitle>
        
        <MysticalSubtitle>
          마음 속 깊은 질문을 떠올리며 당신만의 스프레드를 선택하세요
        </MysticalSubtitle>
        
        {/* 스프레드 선택 */}
        <SpreadSelector>
          {spreadOptions.map((option) => (
            <SpreadButton
              key={option.type}
              $isActive={selectedSpread === option.type}
              onClick={() => setSelectedSpread(option.type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {option.icon}
              <div>
                <div>{option.name}</div>
                <small style={{ opacity: 0.8 }}>{option.description}</small>
              </div>
            </SpreadButton>
          ))}
        </SpreadSelector>
        
        {/* 질문 입력 */}
        <QuestionInput>
          <QuestionTextarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="어떤 것이 궁금하신가요? 💫

예: 오늘 하루 어떻게 보낼까요?
예: 좋아하는 사람과 잘 될까요?"
            maxLength={500}
          />
        </QuestionInput>
        
        {/* 리딩 버튼 */}
        <ReadingControls>
          <StyledReadingButton
            onClick={drawCards}
            disabled={isReading}
            whileHover={{ scale: isReading ? 1 : 1.05 }}
            whileTap={{ scale: isReading ? 1 : 0.95 }}
          >
            {isReading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Star />
                </motion.div>
                카드를 섞는 중...
              </>
            ) : (
              <>
                <Shuffle />
                카드 뽑기
              </>
            )}
          </StyledReadingButton>
          
          {showResult && (
            <StyledReadingButton
              onClick={resetReading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              다시 뽑기
            </StyledReadingButton>
          )}
        </ReadingControls>
        
        {/* 카드 스프레드 */}
        <AnimatePresence mode="wait">
          {drawnCards.length > 0 && (
            <motion.div
              key="spread"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <CardSpread
                cards={drawnCards}
                spreadType={selectedSpread}
                isRevealed={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* 해석 결과 */}
        <AnimatePresence>
          {showResult && (
            <ResultSection
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <ResultTitle>🔮 카드의 메시지</ResultTitle>
              {drawnCards.map((drawnCard, index) => (
                <div key={index} style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    color: '#d4af37', 
                    marginBottom: '0.5rem',
                    fontFamily: 'Cinzel, serif'
                  }}>
                    {drawnCard.card.nameKr} ({drawnCard.card.name})
                    {drawnCard.reversed && ' (역방향)'}
                  </h4>
                  <ResultText>{drawnCard.interpretation}</ResultText>
                </div>
              ))}
              
              <ResultTitle style={{ marginTop: '2rem' }}>✨ 전체적인 조언</ResultTitle>
              <ResultText style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
                카드들이 보여주는 메시지를 마음 깊이 받아들이고, 
                당신의 직감을 믿으며 앞으로 나아가세요. 
                우주는 항상 당신을 올바른 길로 인도할 것입니다.
              </ResultText>
            </ResultSection>
          )}
        </AnimatePresence>
      </MysticalContainer>
    </ReadingSection>
  )
}

export default ReadingPage
