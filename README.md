# 🔮 Tarot Mystique Web

**Unveil the Secrets of Your Destiny Through Ancient Wisdom**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

## ✨ 프로젝트 소개

타로 미스틱은 고대의 신비로운 타로카드 지혜를 현대적인 웹 기술로 구현한 몰입감 있는 타로카드 리딩 애플리케이션입니다. 다크하고 신비로운 UI/UX를 통해 진정한 타로 체험을 선사합니다.

### 🌙 주요 특징

- **22장의 메이저 아르카나** - 완전한 메이저 아르카나 카드 세트
- **다양한 스프레드** - 원카드, 쓰리카드, 켈틱크로스 스프레드
- **깊이 있는 해석** - 각 카드의 정방향/역방향 의미와 상황별 해석
- **마법 같은 애니메이션** - Framer Motion을 활용한 몰입감 있는 카드 애니메이션
- **반응형 디자인** - 모든 기기에서 완벽한 사용자 경험
- **다크 테마** - 신비롭고 매혹적인 고딕 스타일 디자인

## 🎨 디자인 철학

> *"진정한 마법은 어둠 속에서 빛을 발한다"*

- **중이병 감성** - 과장되고 드라마틱한 표현으로 몰입감 극대화
- **다크 매직** - 깊은 보라색과 금색의 조화로 신비로운 분위기 연출
- **유동적 애니메이션** - 카드가 살아있는 듯한 자연스러운 움직임
- **마법진과 별자리** - 신비학적 상징들을 UI 요소에 적극 활용

## 🔥 기술 스택

### Frontend
- **React 18** - 최신 React with Hooks
- **TypeScript 5** - 타입 안전성과 개발 생산성
- **Vite** - 번개같이 빠른 개발 환경
- **Styled Components** - CSS-in-JS로 동적 스타일링
- **Framer Motion** - 부드럽고 매력적인 애니메이션
- **React Spring** - 물리 기반 자연스러운 트랜지션
- **React Router Dom** - SPA 라우팅
- **Axios** - HTTP 클라이언트
- **React Hot Toast** - 우아한 알림 시스템

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **TypeScript Strict Mode** - 엄격한 타입 검사

## 🚀 시작하기

### 사전 요구사항
- Node.js 18+ 
- npm or yarn

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/mcp-space/tarot_mystique_web.git
cd tarot_mystique_web

# 의존성 설치
npm install

# 개발 서버 시작 (포트 3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 파일 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Navigation.tsx   # 네비게이션 바
│   ├── TarotCard.tsx   # 타로카드 컴포넌트
│   └── CardSpread.tsx  # 카드 스프레드 레이아웃
├── pages/              # 페이지 컴포넌트
│   ├── HomePage.tsx    # 메인 페이지
│   ├── ReadingPage.tsx # 카드 리딩 페이지
│   └── CardDetailPage.tsx # 카드 상세 페이지
├── styles/             # 스타일 관련
│   ├── theme.ts        # 테마 정의
│   ├── GlobalStyles.ts # 글로벌 스타일
│   └── components.ts   # 공통 스타일 컴포넌트
├── types/              # TypeScript 타입 정의
│   └── tarot.ts        # 타로카드 관련 타입
├── data/               # 데이터
│   └── majorArcana.ts  # 메이저 아르카나 카드 데이터
└── utils/              # 유틸리티 함수
```

## 🎯 주요 기능

### 1. 카드 리딩
- **원카드 스프레드**: 오늘의 메시지
- **쓰리카드 스프레드**: 과거-현재-미래
- **켈틱크로스**: 10장 카드로 하는 완전한 인생 리딩

### 2. 카드 상호작용
- 카드 뒤집기 애니메이션
- 정방향/역방향 표시
- 카드 호버 이펙트
- 매끄러운 카드 셔플링

### 3. 해석 시스템
- 상황별 맞춤 해석 (일반, 연애, 직업, 건강)
- 정방향/역방향 구분 해석
- 카드 조합 해석 (추후 추가)

## 🌟 개발 스크립트

```bash
# 개발 서버 실행
npm run dev

# 타입 체크
npm run type-check

# 린팅
npm run lint

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🎨 커밋 컨벤션

- `✨ feat:` 새로운 기능 추가
- `🎨 style:` 스타일링 관련 변경
- `🔮 magic:` 마법적인 기능 추가 (애니메이션, 이펙트)
- `🐛 fix:` 버그 수정
- `📚 docs:` 문서 업데이트
- `⚡ setup:` 설정 변경
- `🌟 enhance:` 기존 기능 개선

## 🔗 관련 링크

- [Backend API Repository](https://github.com/mcp-space/tarot_mystique_api)
- [Live Demo](https://tarot-mystique.vercel.app) *(배포 후 업데이트)*

## 📜 라이선스

MIT License - 자유롭게 사용하고 수정하세요.

---

*"카드는 이미 당신이 알고 있는 것을 보여줄 뿐입니다..."* ✨

**Made with 🔮 by mcp-space**
