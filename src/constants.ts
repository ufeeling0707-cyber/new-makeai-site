import { Engine, Product, TeamMember, NavItem, ContactInfo } from './types';

// ==========================================
// EASY MAINTENANCE SECTION
// Update text here to change website content
// ==========================================

export const COMPANY_NAME = 'MAKE AI';
export const TAGLINE = 'We make your AI';
export const SUB_TAGLINE = 'Operational, Explainable, Governable AI';

// Images
export const LOGO_PATH = '/images/makeai-wordmark.svg';
export const HERO_IMAGE_PATH = '/images/aibus.png';
export const HERO_OVERLAY_TEXT = '전 부서의 핵심 역량을 지능적으로 연결하여 데이터의 경계를 허물고 실시간으로 새로운 가치를 창출하는 여정을 위한 AI';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'R&D Highlights', href: '#rnd-highlights' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const PHILOSOPHY = {
  title: 'Our Philosophy and Approach',
  problems: [
    {
      title: "Limitations of 'Show-off' AI",
      desc: '많은 AI가 데모 환경에서는 작동하지만 프로세스 통합 부족으로 인해 실제 운영 환경에서는 실패하곤 합니다.',
    },
    {
      title: 'Explainable AI (XAI)',
      desc: 'AI가 자신의 추론 과정을 설명하지 못한다면 현업과 조직의 신뢰를 얻기 어렵습니다. 우리는 이 블랙박스 문제를 해결합니다.',
    },
    {
      title: 'Governable AI',
      desc: '기업 적용을 위해서는 책임과 관리에 대한 명확한 기준과 운영 표준이 반드시 필요합니다.',
    },
  ],
  solution:
    '우리는 ML/DL과 Gen AI를 통합해 현업 단계에서 실제로 작동하는 Operational, Explainable, Governable AI를 구현합니다.',
};

export const ENGINES: Engine[] = [
  {
    id: 'money',
    title: 'MAKE Money',
    description:
      '2016년부터 축적된 실제 거래 데이터를 기반으로 외환/주식 거래 및 로보 어드바이징을 수행하는 금융 예측 엔진입니다.',
    stats: 'Total Cumulative Return 276.99%',
    iconName: 'TrendingUp',
  },
  {
    id: 'credit',
    title: 'MAKE Credit',
    description:
      '다양한 신용 평가 모델을 결합하여 개인 신용 점수를 정교하게 예측하는 엔진입니다. 대안 데이터와 신용 이력을 함께 학습합니다.',
    iconName: 'CreditCard',
  },
  {
    id: 'time',
    title: 'MAKE Pulse',
    description:
      'Transformer 엔진 기반으로 시계열 예측과 이상 탐지를 동시에 수행하는 고성능 분석 엔진입니다.',
    iconName: 'Clock',
  },
  {
    id: 'sports',
    title: 'MAKE Sports',
    description:
      '공식 KBO 데이터를 기반으로 경기 흐름과 결과를 예측하는 경량 특화 엔진입니다.',
    stats: '62% ~ 75% Accuracy',
    iconName: 'Trophy',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'docu',
    title: 'Data Platform for AI',
    subtitle: 'Docu Analyzer',
    description:
      '지능형 AI 서비스의 도입을 위해 구조화된 데이터를 통해 파악하기 어려운 데이터 자산과 문서 문제를 해결합니다.',
    features: [
      '문서 레이아웃 분석 (Text, Tables, Graphs, Photos)',
      'Schema 기반 데이터 마이닝',
      'High performance: MS DI 대비 4.5배 고속',
      'HWP, PDF, Office 및 Image 문서 지원',
    ],
    imageUrl: '/images/product-docu.png',
    reverse: false,
  },
  {
    id: 'hyperflow',
    title: 'HyperFlow',
    subtitle: 'Agentic AI Platform',
    description:
      '복잡한 작업을 자동화하는 Agentic AI 기술을 기반으로 AI 서비스를 만들고 공유할 수 있는 빠르고 강력한 플랫폼입니다.',
    features: [
      'Low Code / No Code Flow Editor',
      'RAG AI & Autonomous Prompting',
      'Multi-Agent Orchestration',
      '공공 및 교육 분야에서 검증한 인터페이스 보유',
    ],
    imageUrl: '/images/product-hyperflow.png',
    reverse: true,
  },
  {
    id: 'copilot',
    title: 'Copilot for LOB',
    subtitle: 'Line of Business AI Assistant',
    description:
      'On-premise 및 부서별 비즈니스 시스템을 위한 플러그인 모듈입니다. 이메일과 전자결재 시스템에 내장형 AI 비서 기능을 제공합니다.',
    features: [
      'Outlook Integration: 메일 요약 및 분석',
      'Intelligent Chatbot: 내부 데이터 기반 Q&A',
      'Document Generation: 보도 자료 작성, 번역, 맞춤법 검사',
      '비즈니스 생산성 극대화',
    ],
    imageUrl: '/images/product-copilot.png',
    reverse: false,
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: '조정호',
    role: 'Chief Executive Officer',
    description: ['Microsoft', 'Megazone Cloud AI 리드', 'Agile Soda 부대표'],
    imageUrl: '/images/ChoJungHo.png',
  },
  {
    id: 'scientist',
    name: '최범기',
    role: 'Principal AI Scientist',
    description: ['서울대학교 수학과 학사', 'Florida State Univ. 석사 (Neural Network)', 'Neutopia AI Engine 개발'],
    imageUrl: '/images/ChoiBumKi.png',
  },
];

export const CONTACT: ContactInfo = {
  address: '서울특별시 강남구 강남대로 4길 21',
  email: 'beyoman68@gmail.com',
  phone: '010-9174-3516',
  website: 'MakeAI.Cloud',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50635.69809935104!2d127.02058425!3d37.497917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c302021%3A0x6a053c5d6447817b!2sGangnam-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1715000000000!5m2!1sen!2skr',
};
