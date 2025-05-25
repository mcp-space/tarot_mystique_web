import { TarotCard } from '../types/tarot'

export const majorArcanaCards: TarotCard[] = [
  {
    id: 0,
    name: 'The Fool',
    nameKr: '광대',
    arcana: 'major',
    imageUrl: '/images/tarot/00-fool.jpg',
    keywords: ['new beginnings', 'innocence', 'spontaneity', 'free spirit'],
    keywordsKr: ['새로운 시작', '순수함', '자발성', '자유로운 영혼'],
    meanings: {
      upright: {
        general: '새로운 여행의 시작, 순수한 마음으로 모험을 떠날 때입니다. 두려움 없이 앞으로 나아가세요.',
        love: '새로운 만남이나 관계의 시작을 의미합니다. 열린 마음으로 사랑을 받아들이세요.',
        career: '새로운 직업이나 프로젝트의 시작. 창의적이고 혁신적인 접근이 필요합니다.',
        health: '새로운 건강 관리 방법을 시도해보세요. 활력과 에너지가 넘치는 시기입니다.'
      },
      reversed: {
        general: '무모함과 경솔함을 조심하세요. 신중한 계획이 필요한 때입니다.',
        love: '성급한 결정을 피하고, 관계에서 더 신중하게 행동하세요.',
        career: '준비 부족으로 인한 실패 가능성. 더 많은 계획과 준비가 필요합니다.',
        health: '건강을 소홀히 하지 마세요. 무리한 활동은 피하는 것이 좋습니다.'
      }
    },
    description: 'The Fool represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe.',
    descriptionKr: '광대는 새로운 시작, 미래에 대한 믿음, 경험 부족, 예상치 못한 상황, 초보자의 행운, 즉흥성, 그리고 우주에 대한 믿음을 나타냅니다.',
    element: 'Air',
    planet: 'Uranus',
    numerology: 0,
    symbolism: ['white rose (purity)', 'cliff (leap of faith)', 'small bag (memories)', 'mountains (challenges ahead)']
  },
  {
    id: 1,
    name: 'The Magician',
    nameKr: '마법사',
    arcana: 'major',
    imageUrl: '/images/tarot/01-magician.jpg',
    keywords: ['manifestation', 'resourcefulness', 'power', 'inspired action'],
    keywordsKr: ['현실화', '수완', '힘', '영감받은 행동'],
    meanings: {
      upright: {
        general: '당신은 목표를 달성할 모든 도구와 능력을 가지고 있습니다. 의지력으로 현실을 창조하세요.',
        love: '적극적인 행동으로 원하는 관계를 만들어갈 수 있습니다. 진정성 있는 의사소통이 중요합니다.',
        career: '리더십과 창의성을 발휘할 때입니다. 새로운 프로젝트나 사업에 적극 나서세요.',
        health: '자기 치유력이 강한 시기입니다. 의지력으로 건강을 회복할 수 있습니다.'
      },
      reversed: {
        general: '능력을 잘못 사용하거나 조작적인 행동을 조심하세요. 진정성이 필요합니다.',
        love: '관계에서 조작이나 속임수를 사용하지 마세요. 솔직함이 최선입니다.',
        career: '능력 부족이나 자신감 결여로 인한 어려움. 더 많은 준비와 연습이 필요합니다.',
        health: '건강 관리에 더 많은 관심과 노력이 필요합니다. 전문가의 도움을 받으세요.'
      }
    },
    description: 'The Magician represents taking action, having the power to manifest your desires, being resourceful, and having the ability to make things happen.',
    descriptionKr: '마법사는 행동을 취하는 것, 욕망을 현실화할 힘을 가진 것, 수완이 뛰어난 것, 그리고 일을 성사시킬 능력을 나타냅니다.',
    element: 'Air',
    planet: 'Mercury',
    numerology: 1,
    symbolism: ['infinity symbol (unlimited potential)', 'four suit symbols (mastery of elements)', 'white robe (purity)', 'red cloak (worldly experience)']
  },
  {
    id: 2,
    name: 'The High Priestess',
    nameKr: '여교황',
    arcana: 'major',
    imageUrl: '/images/tarot/02-high-priestess.jpg',
    keywords: ['intuition', 'sacred knowledge', 'divine feminine', 'subconscious mind'],
    keywordsKr: ['직감', '신성한 지식', '신성한 여성성', '잠재의식'],
    meanings: {
      upright: {
        general: '내면의 목소리에 귀 기울이세요. 직감과 영감이 당신을 올바른 길로 인도할 것입니다.',
        love: '감정의 깊이를 탐구하고, 상대방의 진심을 느껴보세요. 비언어적 소통이 중요합니다.',
        career: '창의성과 직관을 활용한 업무가 성공할 것입니다. 급하게 결정하지 말고 때를 기다리세요.',
        health: '몸의 신호에 주의를 기울이세요. 스트레스 관리와 정신적 균형이 중요합니다.'
      },
      reversed: {
        general: '내면의 목소리를 무시하고 있지는 않나요? 직감을 회복하고 내적 지혜에 귀 기울이세요.',
        love: '감정을 억압하거나 진실을 외면하고 있습니다. 솔직한 대화가 필요합니다.',
        career: '정보 부족이나 소통 문제로 인한 어려움. 더 많은 조사와 연구가 필요합니다.',
        health: '몸의 신호를 놓치고 있을 수 있습니다. 정기 검진과 예방 관리가 중요합니다.'
      }
    },
    description: 'The High Priestess represents intuition, higher powers, mystery, and the subconscious mind. She sits between the conscious and unconscious realms.',
    descriptionKr: '여교황은 직관, 고차원적 힘, 신비, 그리고 잠재의식을 나타냅니다. 그녀는 의식과 무의식 영역 사이에 앉아 있습니다.',
    element: 'Water',
    planet: 'Moon',
    numerology: 2,
    symbolism: ['pomegranates (feminine fertility)', 'moon at feet (intuition)', 'cross (balance)', 'blue robe (knowledge)']
  },
  {
    id: 3,
    name: 'The Empress',
    nameKr: '여황제',
    arcana: 'major',
    imageUrl: '/images/tarot/03-empress.jpg',
    keywords: ['femininity', 'beauty', 'nature', 'nurturing', 'abundance'],
    keywordsKr: ['여성성', '아름다움', '자연', '양육', '풍요'],
    meanings: {
      upright: {
        general: '창조력과 풍요로움이 당신의 삶에 가득할 것입니다. 자연과 조화를 이루며 성장하세요.',
        love: '사랑이 꽃피는 시기입니다. 임신이나 결혼 등 기쁜 소식이 있을 수 있습니다.',
        career: '창의적인 프로젝트나 예술 분야에서 성공할 것입니다. 협력과 조화가 중요합니다.',
        health: '전반적으로 건강하고 활력이 넘치는 시기입니다. 자연 치유법이 도움이 될 것입니다.'
      },
      reversed: {
        general: '창조력이 막히거나 자신을 소홀히 하고 있습니다. 자기 관리와 균형이 필요합니다.',
        love: '관계에서 의존적이거나 질투심이 문제가 될 수 있습니다. 독립성을 유지하세요.',
        career: '창의성 부족이나 협력 문제로 어려움을 겪을 수 있습니다. 새로운 관점이 필요합니다.',
        health: '여성 건강 문제나 호르몬 불균형에 주의하세요. 스트레스 관리가 중요합니다.'
      }
    },
    description: 'The Empress represents fertility, femininity, beauty, nature, and abundance. She is the mother figure of the tarot.',
    descriptionKr: '여황제는 다산, 여성성, 아름다움, 자연, 그리고 풍요를 나타냅니다. 그녀는 타로의 어머니 상징입니다.',
    element: 'Earth',
    planet: 'Venus',
    numerology: 3,
    symbolism: ['crown of stars (divine connection)', 'wheat (abundance)', 'flowing water (emotion)', 'heart-shaped shield (love)']
  },
  {
    id: 4,
    name: 'The Emperor',
    nameKr: '황제',
    arcana: 'major',
    imageUrl: '/images/tarot/04-emperor.jpg',
    keywords: ['authority', 'structure', 'control', 'stability', 'leadership'],
    keywordsKr: ['권위', '구조', '통제', '안정', '리더십'],
    meanings: {
      upright: {
        general: '강력한 리더십과 체계적인 접근으로 목표를 달성할 것입니다. 규칙과 질서를 중시하세요.',
        love: '안정적이고 장기적인 관계를 원합니다. 책임감 있는 파트너를 만날 가능성이 높습니다.',
        career: '관리직이나 리더십 역할에서 성공할 것입니다. 체계적인 계획과 실행이 중요합니다.',
        health: '규칙적인 생활 패턴과 운동이 건강을 유지하는 열쇠입니다. 균형 잡힌 식단도 중요합니다.'
      },
      reversed: {
        general: '권위주의적이거나 융통성이 부족할 수 있습니다. 더 열린 마음으로 접근하세요.',
        love: '관계에서 지나치게 통제하려 하거나 경직되어 있습니다. 상대방의 의견도 존중하세요.',
        career: '권력 남용이나 독선적인 행동으로 문제가 생길 수 있습니다. 협력적인 자세가 필요합니다.',
        health: '스트레스로 인한 고혈압이나 심장 질환에 주의하세요. 긴장을 풀고 휴식을 취하세요.'
      }
    },
    description: 'The Emperor represents authority, structure, control, and fatherly guidance. He is the father figure of the tarot.',
    descriptionKr: '황제는 권위, 구조, 통제, 그리고 아버지의 지도력을 나타냅니다. 그는 타로의 아버지 상징입니다.',
    element: 'Fire',
    planet: 'Aries',
    numerology: 4,
    symbolism: ['throne (authority)', 'ram heads (Aries)', 'scepter (power)', 'armor (protection)']
  },
  {
    id: 5,
    name: 'The Hierophant',
    nameKr: '교황',
    arcana: 'major',
    imageUrl: '/images/tarot/05-hierophant.jpg',
    keywords: ['tradition', 'conformity', 'morality', 'ethics', 'knowledge'],
    keywordsKr: ['전통', '순응', '도덕', '윤리', '지식'],
    meanings: {
      upright: {
        general: '전통적인 가치와 사회적 규범을 따르는 것이 도움이 될 것입니다. 멘토나 스승의 조언을 구하세요.',
        love: '전통적인 방식의 만남이나 결혼을 통해 안정을 찾을 것입니다. 가족의 지지가 중요합니다.',
        career: '기존의 방법과 체계를 따르는 것이 성공의 열쇠입니다. 교육이나 상담 분야가 유리합니다.',
        health: '전통적인 치료법이나 검증된 의료진의 도움을 받으세요. 규칙적인 생활이 중요합니다.'
      },
      reversed: {
        general: '기존의 규칙이나 전통에 얽매이지 말고 새로운 길을 찾아보세요. 독립적인 사고가 필요합니다.',
        love: '관습에 얽매이지 말고 자신만의 관계 방식을 찾으세요. 자유로운 사랑이 필요합니다.',
        career: '혁신과 창의성이 필요한 시기입니다. 기존 방식을 벗어나 새로운 접근을 시도하세요.',
        health: '대체 의학이나 새로운 건강법을 시도해볼 때입니다. 획일적인 방법보다는 개인맞춤형 접근이 좋습니다.'
      }
    },
    description: 'The Hierophant represents tradition, conformity, morality, and ethics. He is the bridge between heaven and earth.',
    descriptionKr: '교황은 전통, 순응, 도덕, 그리고 윤리를 나타냅니다. 그는 하늘과 땅을 잇는 다리입니다.',
    element: 'Earth',
    planet: 'Taurus',
    numerology: 5,
    symbolism: ['papal crown (spiritual authority)', 'keys (knowledge)', 'pillars (stability)', 'crossed keys (balance)']
  },
  {
    id: 6,
    name: 'The Lovers',
    nameKr: '연인',
    arcana: 'major',
    imageUrl: '/images/tarot/06-lovers.jpg',
    keywords: ['love', 'harmony', 'relationships', 'choices', 'values'],
    keywordsKr: ['사랑', '조화', '관계', '선택', '가치관'],
    meanings: {
      upright: {
        general: '중요한 선택의 기로에 서 있습니다. 마음의 소리에 따라 진정한 가치를 추구하세요.',
        love: '진정한 사랑을 만나거나 기존 관계가 더욱 깊어질 것입니다. 완벽한 조화를 이룰 수 있습니다.',
        career: '파트너십이나 협력 관계에서 큰 성과를 얻을 것입니다. 가치관이 맞는 동료와 일하세요.',
        health: '몸과 마음의 균형이 중요합니다. 스트레스를 줄이고 사랑하는 사람들과 시간을 보내세요.'
      },
      reversed: {
        general: '가치관의 충돌이나 어려운 선택으로 고민이 많습니다. 신중하게 결정하세요.',
        love: '관계에서 불화나 선택의 어려움이 있습니다. 솔직한 대화로 문제를 해결하세요.',
        career: '동료나 파트너와의 갈등이 있을 수 있습니다. 타협점을 찾으려 노력하세요.',
        health: '정신적 스트레스로 인한 건강 문제에 주의하세요. 마음의 평화를 찾는 것이 중요합니다.'
      }
    },
    description: 'The Lovers represents love, harmony, relationships, and the choices we make based on our values.',
    descriptionKr: '연인은 사랑, 조화, 관계, 그리고 우리 가치관에 기반한 선택을 나타냅니다.',
    element: 'Air',
    planet: 'Gemini',
    numerology: 6,
    symbolism: ['angel (divine blessing)', 'tree of knowledge (choice)', 'naked figures (vulnerability)', 'mountain (challenges)']
  },
  {
    id: 7,
    name: 'The Chariot',
    nameKr: '전차',
    arcana: 'major',
    imageUrl: '/images/tarot/07-chariot.jpg',
    keywords: ['control', 'willpower', 'success', 'determination', 'direction'],
    keywordsKr: ['통제', '의지력', '성공', '결단력', '방향'],
    meanings: {
      upright: {
        general: '강한 의지력과 결단력으로 모든 장애물을 극복할 것입니다. 목표를 향해 당당히 나아가세요.',
        love: '적극적인 행동으로 원하는 관계를 얻을 수 있습니다. 주도권을 잡고 이끌어 나가세요.',
        career: '경쟁에서 승리하고 큰 성취를 이룰 것입니다. 리더십을 발휘하여 팀을 이끄세요.',
        health: '강한 의지력으로 건강 문제를 극복할 수 있습니다. 규칙적인 운동과 절제가 도움이 됩니다.'
      },
      reversed: {
        general: '방향성을 잃거나 통제력을 상실한 상태입니다. 목표를 재정립하고 계획을 세우세요.',
        love: '관계에서 균형을 잃거나 방향성이 불분명합니다. 차분히 상황을 정리해보세요.',
        career: '경쟁에서 뒤처지거나 목표 달성에 어려움이 있습니다. 전략을 재검토하세요.',
        health: '자기 관리 부족으로 건강이 악화될 수 있습니다. 생활 습관을 개선하세요.'
      }
    },
    description: 'The Chariot represents control, willpower, success, and determination to overcome obstacles.',
    descriptionKr: '전차는 통제력, 의지력, 성공, 그리고 장애물을 극복하려는 결단력을 나타냅니다.',
    element: 'Water',
    planet: 'Cancer',
    numerology: 7,
    symbolism: ['sphinxes (opposing forces)', 'star crown (divine guidance)', 'city walls (civilization)', 'armor (protection)']
  },
  {
    id: 8,
    name: 'Strength',
    nameKr: '힘',
    arcana: 'major',
    imageUrl: '/images/tarot/08-strength.jpg',
    keywords: ['inner strength', 'bravery', 'compassion', 'focus', 'influence'],
    keywordsKr: ['내적 힘', '용기', '자비', '집중', '영향력'],
    meanings: {
      upright: {
        general: '부드러움과 인내심으로 어려운 상황을 극복할 수 있습니다. 내면의 힘을 믿으세요.',
        love: '사랑과 이해심으로 관계의 문제를 해결할 수 있습니다. 인내심이 보상받을 것입니다.',
        career: '끈기와 인내심으로 성과를 이룰 것입니다. 동료들과의 조화로운 관계가 중요합니다.',
        health: '정신력과 의지력으로 건강을 회복할 수 있습니다. 스트레스 관리와 마음의 평화가 중요합니다.'
      },
      reversed: {
        general: '자신감 부족이나 내적 갈등으로 어려움을 겪고 있습니다. 자신을 믿고 용기를 내세요.',
        love: '관계에서 자신감이 부족하거나 질투심이 문제가 됩니다. 자존감을 회복하세요.',
        career: '자신의 능력을 의심하거나 스트레스로 인한 번아웃 상태입니다. 휴식이 필요합니다.',
        health: '정신적 스트레스나 우울감으로 건강이 악화될 수 있습니다. 전문가의 도움을 받으세요.'
      }
    },
    description: 'Strength represents inner strength, bravery, compassion, and the ability to influence through gentleness.',
    descriptionKr: '힘은 내적 힘, 용기, 자비, 그리고 부드러움을 통한 영향력을 나타냅니다.',
    element: 'Fire',
    planet: 'Leo',
    numerology: 8,
    symbolism: ['woman with lion (taming inner beast)', 'infinity symbol (unlimited potential)', 'flower crown (gentleness)', 'mountain (obstacles overcome)']
  },
  {
    id: 9,
    name: 'The Hermit',
    nameKr: '은둔자',
    arcana: 'major',
    imageUrl: '/images/tarot/09-hermit.jpg',
    keywords: ['introspection', 'seeking', 'guidance', 'solitude', 'wisdom'],
    keywordsKr: ['내성', '탐구', '인도', '고독', '지혜'],
    meanings: {
      upright: {
        general: '혼자만의 시간을 통해 내면의 지혜를 찾을 때입니다. 명상과 성찰이 필요합니다.',
        love: '혼자 있는 시간이 필요하거나, 깊이 있는 관계를 추구합니다. 진정한 연결을 찾으세요.',
        career: '독립적인 일이나 전문성을 기르는 것이 좋습니다. 멘토의 조언을 구하세요.',
        health: '조용한 환경에서 휴식을 취하고 스트레스를 해소하세요. 명상이나 요가가 도움이 됩니다.'
      },
      reversed: {
        general: '고립되거나 길을 잃은 느낌입니다. 다른 사람들과의 연결을 찾고 도움을 요청하세요.',
        love: '외로움이나 소외감으로 어려움을 겪고 있습니다. 사회적 관계를 회복하려 노력하세요.',
        career: '혼자서 모든 것을 해결하려 하지 마세요. 팀워크와 협력이 필요합니다.',
        health: '사회적 고립으로 인한 우울감이나 무기력감에 주의하세요. 활동적인 생활을 유지하세요.'
      }
    },
    description: 'The Hermit represents introspection, seeking inner guidance, and the wisdom that comes from solitude.',
    descriptionKr: '은둔자는 내성, 내면의 인도를 찾는 것, 그리고 고독에서 오는 지혜를 나타냅니다.',
    element: 'Earth',
    planet: 'Virgo',
    numerology: 9,
    symbolism: ['lantern (inner light)', 'staff (support)', 'mountain (spiritual heights)', 'gray robe (neutrality)']
  },
  {
    id: 10,
    name: 'Wheel of Fortune',
    nameKr: '운명의 바퀴',
    arcana: 'major',
    imageUrl: '/images/tarot/10-wheel-of-fortune.jpg',
    keywords: ['cycles', 'fate', 'turning points', 'luck', 'destiny'],
    keywordsKr: ['순환', '운명', '전환점', '행운', '숙명'],
    meanings: {
      upright: {
        general: '좋은 변화와 행운이 찾아올 것입니다. 우주의 흐름에 맡기고 긍정적으로 받아들이세요.',
        love: '운명적인 만남이나 관계의 긍정적 변화가 있을 것입니다. 새로운 기회를 놓치지 마세요.',
        career: '예상치 못한 기회나 승진의 가능성이 높습니다. 준비된 자에게 행운이 찾아옵니다.',
        health: '건강이 호전되거나 회복의 기회가 찾아올 것입니다. 긍정적인 마음가짐이 중요합니다.'
      },
      reversed: {
        general: '불운이나 예상치 못한 변화로 어려움을 겪을 수 있습니다. 인내심을 갖고 이겨내세요.',
        love: '관계에서 예상치 못한 문제나 이별의 위기가 있을 수 있습니다. 신중하게 대처하세요.',
        career: '좌절이나 계획의 차질이 있을 수 있습니다. 유연한 대응과 적응력이 필요합니다.',
        health: '건강 악화나 예상치 못한 질병에 주의하세요. 정기 검진과 예방이 중요합니다.'
      }
    },
    description: 'Wheel of Fortune represents cycles, fate, turning points, and the ever-changing nature of life.',
    descriptionKr: '운명의 바퀴는 순환, 운명, 전환점, 그리고 끊임없이 변화하는 삶의 본성을 나타냅니다.',
    element: 'Fire',
    planet: 'Jupiter',
    numerology: 10,
    symbolism: ['wheel (cycles)', 'sphinx (wisdom)', 'snake (descent)', 'anubis (rising)']
  },
  {
    id: 11,
    name: 'Justice',
    nameKr: '정의',
    arcana: 'major',
    imageUrl: '/images/tarot/11-justice.jpg',
    keywords: ['fairness', 'truth', 'cause and effect', 'law', 'balance'],
    keywordsKr: ['공정함', '진실', '인과응보', '법', '균형'],
    meanings: {
      upright: {
        general: '공정하고 균형 잡힌 판단이 필요한 시기입니다. 진실과 정의가 승리할 것입니다.',
        love: '관계에서 공평함과 상호 존중이 중요합니다. 균형 잡힌 관계를 추구하세요.',
        career: '공정한 평가나 법적 문제에서 유리한 결과를 얻을 것입니다. 원칙을 지키세요.',
        health: '균형 잡힌 생활과 절제가 건강의 열쇠입니다. 과하지도 부족하지도 않게 하세요.'
      },
      reversed: {
        general: '불공정함이나 편견으로 인한 문제가 있습니다. 객관적인 시각을 유지하세요.',
        love: '관계에서 불평등이나 부당한 대우가 있을 수 있습니다. 솔직한 대화가 필요합니다.',
        career: '불공정한 평가나 법적 문제로 어려움을 겪을 수 있습니다. 전문가의 도움을 받으세요.',
        health: '불균형한 생활 패턴으로 건강 문제가 생길 수 있습니다. 생활 습관을 개선하세요.'
      }
    },
    description: 'Justice represents fairness, truth, cause and effect, and the importance of making balanced decisions.',
    descriptionKr: '정의는 공정함, 진실, 인과응보, 그리고 균형 잡힌 결정의 중요성을 나타냅니다.',
    element: 'Air',
    planet: 'Libra',
    numerology: 11,
    symbolism: ['scales (balance)', 'sword (truth)', 'purple robe (royalty)', 'crown (authority)']
  },
  {
    id: 12,
    name: 'The Hanged Man',
    nameKr: '매달린 사람',
    arcana: 'major',
    imageUrl: '/images/tarot/12-hanged-man.jpg',
    keywords: ['suspension', 'restriction', 'letting go', 'sacrifice', 'new perspective'],
    keywordsKr: ['정지', '제한', '놓아줌', '희생', '새로운 관점'],
    meanings: {
      upright: {
        general: '잠시 멈춰서 새로운 관점으로 상황을 바라보세요. 기다림과 인내가 필요한 시기입니다.',
        love: '관계에서 양보와 희생이 필요할 수 있습니다. 상대방의 입장에서 생각해보세요.',
        career: '진전이 더딜 수 있지만 인내심을 갖고 기다리세요. 새로운 아이디어나 접근법을 고려하세요.',
        health: '급하게 서두르지 말고 충분한 휴식을 취하세요. 스트레스를 줄이고 마음의 평화를 찾으세요.'
      },
      reversed: {
        general: '지연되거나 막힌 상황에서 벗어날 때입니다. 적극적인 행동과 변화가 필요합니다.',
        love: '관계에서 소극적이거나 희생만 하고 있다면 균형을 찾으세요. 자신의 의견을 표현하세요.',
        career: '정체된 상황을 타파하고 새로운 기회를 찾으세요. 수동적인 태도를 버리고 주도적으로 행동하세요.',
        health: '건강 회복을 위해 적극적인 치료나 생활 개선이 필요합니다. 방치하지 마세요.'
      }
    },
    description: 'The Hanged Man represents suspension, letting go, sacrifice, and gaining new perspective through surrender.',
    descriptionKr: '매달린 사람은 정지, 놓아줌, 희생, 그리고 항복을 통해 새로운 관점을 얻는 것을 나타냅니다.',
    element: 'Water',
    planet: 'Neptune',
    numerology: 12,
    symbolism: ['inverted figure (new perspective)', 'halo (enlightenment)', 'tree (growth)', 'calm expression (acceptance)']
  },
  {
    id: 13,
    name: 'Death',
    nameKr: '죽음',
    arcana: 'major',
    imageUrl: '/images/tarot/13-death.jpg',
    keywords: ['endings', 'beginnings', 'change', 'transformation', 'transition'],
    keywordsKr: ['끝', '시작', '변화', '변환', '전환'],
    meanings: {
      upright: {
        general: '한 단계가 끝나고 새로운 시작이 찾아옵니다. 변화를 두려워하지 말고 받아들이세요.',
        love: '관계의 중요한 변화나 전환점이 있을 것입니다. 새로운 형태의 사랑이 시작될 수 있습니다.',
        career: '직업이나 경력에서 큰 변화가 있을 것입니다. 새로운 기회와 도전을 받아들이세요.',
        health: '생활 습관의 완전한 변화가 필요합니다. 건강한 새 출발을 위해 과거를 정리하세요.'
      },
      reversed: {
        general: '변화에 저항하거나 과거에 집착하고 있습니다. 변화를 받아들이고 앞으로 나아가세요.',
        love: '끝난 관계에 미련을 갖거나 변화를 거부하고 있습니다. 새로운 사랑을 위해 마음을 열어보세요.',
        career: '변화를 두려워하여 기회를 놓치고 있습니다. 용기를 내어 새로운 도전을 시작하세요.',
        health: '건강 개선을 위한 변화를 미루고 있습니다. 더 이상 미루지 말고 행동으로 옮기세요.'
      }
    },
    description: 'Death represents endings, beginnings, change, and transformation. It rarely means literal death.',
    descriptionKr: '죽음은 끝, 시작, 변화, 그리고 변환을 나타냅니다. 실제 죽음을 의미하는 경우는 드뭅니다.',
    element: 'Water',
    planet: 'Scorpio',
    numerology: 13,
    symbolism: ['skeleton (permanence)', 'black armor (invincibility)', 'white rose (purity)', 'rising sun (rebirth)']
  },
  {
    id: 14,
    name: 'Temperance',
    nameKr: '절제',
    arcana: 'major',
    imageUrl: '/images/tarot/14-temperance.jpg',
    keywords: ['balance', 'moderation', 'patience', 'purpose', 'meaning'],
    keywordsKr: ['균형', '절제', '인내', '목적', '의미'],
    meanings: {
      upright: {
        general: '균형과 조화를 통해 안정을 찾을 수 있습니다. 극단을 피하고 중용의 길을 걸으세요.',
        love: '관계에서 인내심과 이해심이 필요합니다. 서로 다른 점을 조화롭게 융합하세요.',
        career: '팀워크와 협력을 통해 목표를 달성할 수 있습니다. 급하게 서두르지 말고 차근차근 진행하세요.',
        health: '몸과 마음의 균형이 중요합니다. 규칙적인 생활과 적당한 운동, 균형 잡힌 식단을 유지하세요.'
      },
      reversed: {
        general: '불균형이나 극단적인 행동으로 문제가 생길 수 있습니다. 자제력과 절제가 필요합니다.',
        love: '관계에서 조화를 잃거나 극단적인 행동을 하고 있습니다. 균형점을 찾으려 노력하세요.',
        career: '조급함이나 과도한 욕심으로 실수할 수 있습니다. 차분하게 접근하고 인내심을 기르세요.',
        health: '과도한 스트레스나 불규칙한 생활로 건강이 악화될 수 있습니다. 생활 패턴을 개선하세요.'
      }
    },
    description: 'Temperance represents balance, moderation, patience, and the blending of opposites into harmony.',
    descriptionKr: '절제는 균형, 절제, 인내, 그리고 상반된 것들을 조화롭게 융합하는 것을 나타냅니다.',
    element: 'Fire',
    planet: 'Sagittarius',
    numerology: 14,
    symbolism: ['angel (divine guidance)', 'water mixing (blending)', 'one foot on land (material)', 'one foot in water (spiritual)']
  },
  {
    id: 15,
    name: 'The Devil',
    nameKr: '악마',
    arcana: 'major',
    imageUrl: '/images/tarot/15-devil.jpg',
    keywords: ['bondage', 'addiction', 'sexuality', 'materialism', 'ignorance'],
    keywordsKr: ['속박', '중독', '성적 욕망', '물질주의', '무지'],
    meanings: {
      upright: {
        general: '유혹이나 중독적인 행동에 빠져있을 수 있습니다. 자신을 속박하는 것들을 인식하고 벗어나세요.',
        love: '관계에서 의존성이나 불건전한 패턴이 있을 수 있습니다. 건강한 관계로 발전시키세요.',
        career: '물질적 욕망이나 권력에 대한 집착이 문제가 될 수 있습니다. 진정한 가치를 찾아보세요.',
        health: '나쁜 습관이나 중독적 행동이 건강을 해치고 있습니다. 전문가의 도움을 받아 개선하세요.'
      },
      reversed: {
        general: '속박에서 벗어나 자유를 찾을 때입니다. 부정적인 패턴을 인식하고 변화를 시작하세요.',
        love: '불건전한 관계에서 벗어나거나 새로운 시작을 할 수 있습니다. 진정한 사랑을 추구하세요.',
        career: '직장이나 업무에서의 스트레스와 압박에서 해방될 수 있습니다. 새로운 길을 찾아보세요.',
        health: '건강에 해로운 습관을 끊고 새로운 생활을 시작할 수 있습니다. 의지력을 발휘하세요.'
      }
    },
    description: 'The Devil represents bondage, addiction, sexuality, materialism, and the chains we create for ourselves.',
    descriptionKr: '악마는 속박, 중독, 성적 욕망, 물질주의, 그리고 우리가 스스로에게 씌우는 사슬을 나타냅니다.',
    element: 'Earth',
    planet: 'Capricorn',
    numerology: 15,
    symbolism: ['chains (bondage)', 'inverted pentagram (material over spiritual)', 'bat wings (ignorance)', 'torch (false light)']
  },
  {
    id: 16,
    name: 'The Tower',
    nameKr: '탑',
    arcana: 'major',
    imageUrl: '/images/tarot/16-tower.jpg',
    keywords: ['sudden change', 'upheaval', 'chaos', 'revelation', 'awakening'],
    keywordsKr: ['급변', '격변', '혼돈', '폭로', '각성'],
    meanings: {
      upright: {
        general: '예상치 못한 큰 변화나 충격적인 사건이 일어날 수 있습니다. 위기를 기회로 바꾸세요.',
        love: '관계에서 갑작스러운 변화나 진실의 폭로가 있을 수 있습니다. 정직함이 최선의 해결책입니다.',
        career: '직장이나 사업에서 예상치 못한 변화가 있을 수 있습니다. 유연성을 갖고 적응하세요.',
        health: '갑작스러운 건강 문제나 사고에 주의하세요. 평소 건강 관리를 소홀히 하지 마세요.'
      },
      reversed: {
        general: '점진적인 변화나 위기 상황의 회복이 시작됩니다. 서서히 안정을 찾을 수 있습니다.',
        love: '관계의 위기를 극복하고 새로운 이해에 도달할 수 있습니다. 소통을 통해 문제를 해결하세요.',
        career: '직장에서의 위기나 변화가 서서히 안정화됩니다. 새로운 기회를 모색해보세요.',
        health: '건강 문제의 회복기에 접어듭니다. 꾸준한 관리와 치료를 계속하세요.'
      }
    },
    description: 'The Tower represents sudden change, upheaval, chaos, and the breaking down of old structures.',
    descriptionKr: '탑은 급변, 격변, 혼돈, 그리고 기존 구조의 붕괴를 나타냅니다.',
    element: 'Fire',
    planet: 'Mars',
    numerology: 16,
    symbolism: ['lightning (divine intervention)', 'falling figures (sudden fall)', 'crown (false pride)', 'flames (destruction and purification)']
  },
  {
    id: 17,
    name: 'The Star',
    nameKr: '별',
    arcana: 'major',
    imageUrl: '/images/tarot/17-star.jpg',
    keywords: ['hope', 'faith', 'purpose', 'renewal', 'spirituality'],
    keywordsKr: ['희망', '믿음', '목적', '재생', '영성'],
    meanings: {
      upright: {
        general: '희망과 치유의 시기가 찾아옵니다. 긍정적인 에너지와 영감을 받아 새롭게 시작하세요.',
        love: '진정한 사랑과 영적 연결을 찾을 수 있습니다. 마음을 열고 사랑을 받아들이세요.',
        career: '꿈과 이상을 실현할 기회가 찾아옵니다. 창의성과 영감을 활용하여 목표를 달성하세요.',
        health: '건강 회복과 치유의 시기입니다. 자연 치유법이나 정신적 치유가 도움이 될 것입니다.'
      },
      reversed: {
        general: '희망을 잃거나 방향감각을 상실한 상태입니다. 내면의 빛을 다시 찾고 믿음을 회복하세요.',
        love: '관계에서 실망하거나 불안감을 느끼고 있습니다. 긍정적인 마음가짐으로 변화를 시도하세요.',
        career: '목표나 비전이 흐려져 있습니다. 초심을 되찾고 새로운 영감을 찾아보세요.',
        health: '회복이 더디거나 치료 효과가 미미할 수 있습니다. 인내심을 갖고 지속적으로 관리하세요.'
      }
    },
    description: 'The Star represents hope, faith, purpose, renewal, and connection to the divine.',
    descriptionKr: '별은 희망, 믿음, 목적, 재생, 그리고 신성한 것과의 연결을 나타냅니다.',
    element: 'Air',
    planet: 'Aquarius',
    numerology: 17,
    symbolism: ['large star (hope)', 'seven small stars (chakras)', 'pouring water (renewal)', 'naked figure (vulnerability and truth)']
  },
  {
    id: 18,
    name: 'The Moon',
    nameKr: '달',
    arcana: 'major',
    imageUrl: '/images/tarot/18-moon.jpg',
    keywords: ['illusion', 'fear', 'anxiety', 'subconscious', 'intuition'],
    keywordsKr: ['착각', '두려움', '불안', '잠재의식', '직관'],
    meanings: {
      upright: {
        general: '혼란과 불확실성의 시기입니다. 직관을 믿되 환상에 속지 않도록 주의하세요.',
        love: '관계에서 오해나 착각이 있을 수 있습니다. 솔직한 대화로 진실을 확인하세요.',
        career: '불확실한 정보나 속임수에 주의하세요. 신중하게 판단하고 검증된 정보에 의존하세요.',
        health: '정신적 불안이나 스트레스로 인한 건강 문제에 주의하세요. 충분한 휴식과 안정이 필요합니다.'
      },
      reversed: {
        general: '혼란에서 벗어나 진실을 깨닫게 됩니다. 두려움을 극복하고 명확한 시각을 얻을 수 있습니다.',
        love: '관계의 오해가 풀리고 진실한 감정을 확인할 수 있습니다. 솔직한 소통이 해결책입니다.',
        career: '불확실했던 상황이 명확해지고 올바른 방향을 찾을 수 있습니다. 직관을 믿고 행동하세요.',
        health: '정신적 안정을 찾고 건강이 회복됩니다. 스트레스 관리와 규칙적인 생활이 도움이 됩니다.'
      }
    },
    description: 'The Moon represents illusion, fear, anxiety, and the need to trust your intuition in uncertain times.',
    descriptionKr: '달은 착각, 두려움, 불안, 그리고 불확실한 시기에 직관을 믿어야 할 필요성을 나타냅니다.',
    element: 'Water',
    planet: 'Pisces',
    numerology: 18,
    symbolism: ['moon phases (cycles)', 'dog and wolf (tamed and wild)', 'crayfish (subconscious)', 'path (journey through darkness)']
  },
  {
    id: 19,
    name: 'The Sun',
    nameKr: '태양',
    arcana: 'major',
    imageUrl: '/images/tarot/19-sun.jpg',
    keywords: ['positivity', 'fun', 'warmth', 'success', 'vitality'],
    keywordsKr: ['긍정', '즐거움', '따뜻함', '성공', '활력'],
    meanings: {
      upright: {
        general: '행복과 성공이 가득한 밝은 시기가 찾아옵니다. 긍정적인 에너지로 모든 일이 잘 풀릴 것입니다.',
        love: '사랑이 넘치고 행복한 관계를 누릴 수 있습니다. 결혼이나 새로운 가족의 탄생도 가능합니다.',
        career: '성공과 인정을 받을 수 있는 시기입니다. 자신감을 갖고 적극적으로 활동하세요.',
        health: '활력이 넘치고 건강한 상태입니다. 운동과 야외 활동이 더욱 건강을 증진시킬 것입니다.'
      },
      reversed: {
        general: '일시적인 어려움이나 지연이 있을 수 있지만 곧 해결될 것입니다. 긍정적인 마음을 유지하세요.',
        love: '관계에서 작은 문제나 오해가 있을 수 있습니다. 대화를 통해 쉽게 해결할 수 있습니다.',
        career: '성과가 예상보다 늦어질 수 있지만 포기하지 마세요. 계속 노력하면 좋은 결과를 얻을 것입니다.',
        health: '컨디션이 일시적으로 좋지 않을 수 있습니다. 충분한 휴식과 영양 섭취로 회복하세요.'
      }
    },
    description: 'The Sun represents positivity, fun, warmth, success, and vitality. It is one of the most positive cards.',
    descriptionKr: '태양은 긍정, 즐거움, 따뜻함, 성공, 그리고 활력을 나타냅니다. 가장 긍정적인 카드 중 하나입니다.',
    element: 'Fire',
    planet: 'Sun',
    numerology: 19,
    symbolism: ['bright sun (consciousness)', 'child (innocence)', 'white horse (purity)', 'sunflowers (loyalty)']
  },
  {
    id: 20,
    name: 'Judgement',
    nameKr: '심판',
    arcana: 'major',
    imageUrl: '/images/tarot/20-judgement.jpg',
    keywords: ['rebirth', 'inner calling', 'absolution', 'second chances', 'evaluation'],
    keywordsKr: ['재탄생', '내적 부름', '면죄', '두 번째 기회', '평가'],
    meanings: {
      upright: {
        general: '새로운 인생의 단계로 나아갈 때입니다. 과거를 용서하고 영적 각성을 통해 재탄생하세요.',
        love: '관계에서 새로운 시작이나 화해의 기회가 찾아옵니다. 과거를 용서하고 새출발하세요.',
        career: '새로운 소명이나 인생의 목적을 발견할 수 있습니다. 내면의 목소리에 귀 기울이세요.',
        health: '건강 회복이나 새로운 치료법을 통한 완치의 가능성이 있습니다. 희망을 잃지 마세요.'
      },
      reversed: {
        general: '자기 비판이 지나치거나 과거에 얽매여 있습니다. 자신을 용서하고 앞으로 나아가세요.',
        love: '관계에서 용서하지 못하거나 과거의 상처에 매몰되어 있습니다. 치유의 시간이 필요합니다.',
        career: '자신의 능력을 과소평가하거나 기회를 놓치고 있습니다. 자신감을 회복하세요.',
        health: '회복이 더디거나 치료에 대한 의지가 부족합니다. 전문가의 도움을 받고 적극적으로 치료하세요.'
      }
    },
    description: 'Judgement represents rebirth, inner calling, absolution, and the opportunity for a fresh start.',
    descriptionKr: '심판은 재탄생, 내적 부름, 면죄, 그리고 새로운 시작의 기회를 나타냅니다.',
    element: 'Fire',
    planet: 'Pluto',
    numerology: 20,
    symbolism: ['angel (divine calling)', 'trumpet (awakening)', 'rising figures (resurrection)', 'mountains (obstacles overcome)']
  },
  {
    id: 21,
    name: 'The World',
    nameKr: '세계',
    arcana: 'major',
    imageUrl: '/images/tarot/21-world.jpg',
    keywords: ['completion', 'accomplishment', 'travel', 'fulfillment', 'success'],
    keywordsKr: ['완성', '성취', '여행', '성취감', '성공'],
    meanings: {
      upright: {
        general: '모든 것이 완성되고 성취되는 시기입니다. 목표를 달성하고 새로운 도전을 준비하세요.',
        love: '완벽한 조화와 만족스러운 관계를 누릴 수 있습니다. 영혼의 동반자를 만나거나 관계가 완성됩니다.',
        career: '큰 성공과 인정을 받을 것입니다. 국제적인 기회나 해외 진출의 가능성도 있습니다.',
        health: '완전한 건강 회복이나 최상의 컨디션을 유지할 수 있습니다. 전체적인 웰빙 상태가 훌륭합니다.'
      },
      reversed: {
        general: '목표 달성이 지연되거나 완성되지 못한 일들이 있습니다. 인내심을 갖고 마무리하세요.',
        love: '관계에서 완전함을 추구하다가 현실을 놓칠 수 있습니다. 완벽을 추구하기보다 현재를 즐기세요.',
        career: '성공이 가까웠지만 마지막 단계에서 어려움을 겪을 수 있습니다. 끝까지 최선을 다하세요.',
        health: '건강 목표 달성이 어려울 수 있습니다. 꾸준한 노력과 전문가의 조언이 필요합니다.'
      }
    },
    description: 'The World represents completion, accomplishment, and the successful end of a journey or cycle.',
    descriptionKr: '세계는 완성, 성취, 그리고 여정이나 순환의 성공적인 마무리를 나타냅니다.',
    element: 'Earth',
    planet: 'Saturn',
    numerology: 21,
    symbolism: ['wreath (victory)', 'four corners (elements)', 'dancing figure (celebration)', 'infinite ribbon (eternal cycle)']
  }
]

export const getCardById = (id: number): TarotCard | undefined => {
  return majorArcanaCards.find(card => card.id === id)
}

export const getRandomCard = (): TarotCard => {
  const randomIndex = Math.floor(Math.random() * majorArcanaCards.length)
  return majorArcanaCards[randomIndex]
}

export const getRandomCards = (count: number): TarotCard[] => {
  const cards = [...majorArcanaCards]
  const result: TarotCard[] = []
  
  for (let i = 0; i < count && cards.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length)
    result.push(cards.splice(randomIndex, 1)[0])
  }
  
  return result
}
