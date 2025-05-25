import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Moon, Sun } from 'lucide-react'
import {
  MysticalContainer,
  Section,
  MysticalTitle,
  MysticalSubtitle,
  MysticalText,
  MysticalButton
} from '../styles/components'
import { TarotCard } from '../components/TarotCard'
import { getCardById } from '../data/majorArcana'
import { useTarotAnalytics } from '../hooks/useAnalytics'

const DetailSection = styled(Section)`
  min-height: 100vh;
  padding-top: 120px;
`

const CardDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`

const CardDisplay = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 140px;
`

const CardInfo = styled.div`
  /* 카드 정보 스타일 */
`

const InfoSection = styled(motion.div)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.gold};
  border-radius: 12px;
  backdrop-filter: blur(10px);
`

const InfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary};
`

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Keyword = styled.span`
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: ${({ theme }) => theme.colors.background.dark};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`

const MeaningGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const MeaningCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border.purple};
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
`

const MeaningTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const MeaningText = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.6;
  margin-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const BackButton = styled(MysticalButton)`
  margin-bottom: 2rem;
`

const CardDetailPage: React.FC = () => {
  const { cardId } = useParams<{ cardId: string }>()
  const navigate = useNavigate()
  const { logCardView } = useTarotAnalytics()
  
  const card = cardId ? getCardById(parseInt(cardId)) : null
  
  // 📊 카드 상세 조회 활동 로깅
  useEffect(() => {
    if (card) {
      logCardView(card.name, card.nameKr)
    }
  }, [card, logCardView])
  
  if (!card) {
    return (
      <DetailSection>
        <MysticalContainer>
          <MysticalTitle>카드를 찾을 수 없습니다</MysticalTitle>
          <MysticalButton onClick={() => navigate('/')}>
            <ArrowLeft />
            홈으로 돌아가기
          </MysticalButton>
        </MysticalContainer>
      </DetailSection>
    )
  }
  
  const meaningCategories = [
    { key: 'general', title: '전반적 의미', icon: <Star /> },
    { key: 'love', title: '연애/관계', icon: <Moon /> },
    { key: 'career', title: '직업/사업', icon: <Sun /> },
    { key: 'health', title: '건강', icon: <Star /> }
  ]
  
  return (
    <DetailSection>
      <MysticalContainer>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeft />
          뒤로 가기
        </BackButton>
        
        <MysticalTitle className="mystical-text">
          {card.nameKr}
        </MysticalTitle>
        
        <MysticalSubtitle>
          {card.name} - {card.numerology}번째 카드
        </MysticalSubtitle>
        
        <CardDetailContainer>
          <CardDisplay>
            <TarotCard
              card={card}
              isRevealed={true}
              size="large"
            />
          </CardDisplay>
          
          <CardInfo>
            <InfoSection
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfoTitle>
                <Star />
                카드 설명
              </InfoTitle>
              <InfoText>{card.descriptionKr}</InfoText>
              
              <InfoTitle style={{ marginTop: '2rem' }}>
                <Moon />
                핵심 키워드
              </InfoTitle>
              <KeywordList>
                {card.keywordsKr.map((keyword, index) => (
                  <Keyword key={index}>{keyword}</Keyword>
                ))}
              </KeywordList>
            </InfoSection>
            
            <InfoSection
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InfoTitle>
                <Sun />
                정방향 의미
              </InfoTitle>
              
              <MeaningGrid>
                {meaningCategories.map((category) => (
                  <MeaningCard
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <MeaningTitle>
                      {category.icon}
                      {category.title}
                    </MeaningTitle>
                    <MeaningText>
                      {card.meanings.upright[category.key as keyof typeof card.meanings.upright]}
                    </MeaningText>
                  </MeaningCard>
                ))}
              </MeaningGrid>
            </InfoSection>
            
            <InfoSection
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <InfoTitle>
                <Moon />
                역방향 의미
              </InfoTitle>
              
              <MeaningGrid>
                {meaningCategories.map((category) => (
                  <MeaningCard
                    key={category.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <MeaningTitle>
                      {category.icon}
                      {category.title}
                    </MeaningTitle>
                    <MeaningText>
                      {card.meanings.reversed[category.key as keyof typeof card.meanings.reversed]}
                    </MeaningText>
                  </MeaningCard>
                ))}
              </MeaningGrid>
            </InfoSection>
            
            {card.element && (
              <InfoSection
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <InfoTitle>
                  <Star />
                  상징과 의미
                </InfoTitle>
                <InfoText><strong>원소:</strong> {card.element}</InfoText>
                {card.planet && <InfoText><strong>행성:</strong> {card.planet}</InfoText>}
                <InfoText><strong>수비학:</strong> {card.numerology}</InfoText>
                
                {card.symbolism.length > 0 && (
                  <>
                    <InfoTitle style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
                      주요 상징
                    </InfoTitle>
                    {card.symbolism.map((symbol, index) => (
                      <InfoText key={index}>• {symbol}</InfoText>
                    ))}
                  </>
                )}
              </InfoSection>
            )}
          </CardInfo>
        </CardDetailContainer>
      </MysticalContainer>
    </DetailSection>
  )
}

export default CardDetailPage
