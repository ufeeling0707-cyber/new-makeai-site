import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import dbSavingsBankLogo from '../assets/customer-logos/DB저축은행.png';
import hsLogo from '../assets/customer-logos/화승.png';
import hyundaiWiaLogo from '../assets/customer-logos/현대위아.png';
import krLogo from '../assets/customer-logos/한국선급.png';
import lgElectronicsLogo from '../assets/customer-logos/LG전자.png';
import lgInnotekLogo from '../assets/customer-logos/LG이노텍.png';
import mobisLogo from '../assets/customer-logos/모비스.png';
import samsungLifeLogo from '../assets/customer-logos/삼성생명.png';

const engineModules = [
  {
    title: 'Make Pre-Processing',
    description: '복잡한 원천 데이터를 정제하고 구조화하여 AI 학습과 추론에 적합한 입력으로 변환합니다.',
    tags: ['Data Cleaning', 'Structuring', 'Normalization'],
  },
  {
    title: 'Make Deep-Learning',
    description: '도메인 특성에 맞는 딥러닝 모델을 적용하여 예측, 분류, 탐지, 추론 문제를 해결합니다.',
    tags: ['Prediction', 'Classification', 'Detection'],
  },
  {
    title: 'Make Ensemble',
    description: '다수 모델의 결과를 결합하여 정확도, 안정성, 신뢰도를 향상시킵니다.',
    tags: ['Ensemble', 'Accuracy', 'Robustness'],
  },
];

const customerLogoClass =
  'flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white p-3 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]';

const LogoStrip = ({ logos }: { logos: { name: string; src: string }[] }) => (
  <div className={`grid gap-3 ${logos.length > 1 ? 'sm:grid-cols-2' : 'max-w-xs'}`}>
    {logos.map((logo) => (
      <div key={logo.name} className={customerLogoClass}>
        <img src={logo.src} alt={`${logo.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
      </div>
    ))}
  </div>
);

const Engines: React.FC = () => {
  return (
    <section id="products" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8ce8ff]">Products</p>
          <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-white md:text-6xl">
            데이터 처리부터 실행형 AI 아키텍처까지
          </h2>
          <p className="mt-8 max-w-4xl break-keep text-lg leading-9 text-slate-300 md:text-[1.55rem] md:leading-10">
            MakeAI의 제품 포트폴리오는 데이터 처리, 문서 지능화, AI 에이전트 구축, 실행형 AI 아키텍처까지 기업의 AI 전환 전 과정을
            지원합니다.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-cyan-300/20 bg-[#07131b] p-8 shadow-[0_22px_80px_rgba(1,12,21,0.55)] md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-[#07131b] pr-0 lg:pr-8">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8ce8ff]">Core Engine</p>
                <h3 className="mt-5 text-4xl font-black text-white md:text-5xl">Make Engine</h3>
                <div className="mt-6 max-w-xl">
                  <LogoStrip
                    logos={[
                      { name: '모비스', src: mobisLogo },
                      { name: '현대위아', src: hyundaiWiaLogo },
                    ]}
                  />
                </div>
                <p className="mt-7 max-w-xl break-keep text-xl leading-10 text-slate-300">
                  데이터 전처리, 모델 학습, 성능 최적화를 통합한 AI 엔진 프레임워크입니다. 다양한 산업 데이터에 대해 정확도와 안정성을
                  동시에 확보합니다.
                </p>
              </div>

            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {engineModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                >
                  <h4 className="break-keep text-2xl font-black leading-tight text-white">{module.title}</h4>
                  <p className="mt-5 break-keep text-base leading-8 text-slate-300">{module.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {module.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cyan-300/12 px-3 py-1.5 text-sm font-bold text-[#8ce8ff] ring-1 ring-cyan-300/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#06090d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <LogoStrip
                logos={[
                  { name: '한국선급', src: krLogo },
                  { name: 'LG이노텍', src: lgInnotekLogo },
                ]}
              />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <img
                  src="/images/product-docu.png"
                  alt="Make Docu Analyzer workflow"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8ce8ff]">Product</p>
              <h3 className="mt-4 text-4xl font-black text-white md:text-5xl">Make Docu Analyzer</h3>
              <p className="mt-5 break-keep text-2xl font-black leading-10 text-[#c8f5ff]">
                복잡한 비정형 문서를 구조화하고 의미를 추출하는 문서 지능화 솔루션
              </p>
              <p className="mt-8 break-keep text-xl leading-10 text-slate-300">
                PDF, Office 문서, 보고서, 약관, 계약서 등 다양한 비정형 문서를 분석하여 구조 인식, 핵심 정보 추출, 검색 및 질의응답
                활용이 가능하도록 지원합니다.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  '문서 구조 분석',
                  '표/텍스트/항목 추출',
                  '의미 기반 검색',
                  '문서 질의응답',
                  '업무 활용형 문서 지식화',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#67e5ff]" />
                    <span className="break-keep">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#06090d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8fffc1]">Product</p>
              <h3 className="mt-4 text-4xl font-black text-white md:text-5xl">Make Agent Builder</h3>
              <p className="mt-5 break-keep text-2xl font-black leading-10 text-[#c8f5ff]">
                기업 업무에 맞는 AI Agent를 설계하고 연결하는 빌더 플랫폼
              </p>
              <p className="mt-8 break-keep text-xl leading-10 text-slate-300">
                LLM, 내부 문서, 업무 규칙, API 및 외부 시스템을 연결하여 실제 업무를 수행할 수 있는 AI 에이전트 구성을 지원합니다.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Agent workflow orchestration',
                  'Tool / API integration',
                  'Knowledge-grounded reasoning',
                  '업무 자동화 시나리오 설계',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#67e5ff]" />
                    <span className="break-keep">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <LogoStrip
                logos={[
                  { name: '화승', src: hsLogo },
                  { name: 'DB저축은행', src: dbSavingsBankLogo },
                ]}
              />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-[#f5f1e7]">
                <img
                  src="/images/product-hyperflow.png"
                  alt="Make Agent Builder workflow"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#06090d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <LogoStrip logos={[{ name: 'LG전자', src: lgElectronicsLogo }]} />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <img
                  src="/images/product-copilot.png"
                  alt="Line of Business AI Assistant"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="inline-flex rounded-full bg-[#2a1a4f] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#8ec5ff]">
                Copilot for LOB
              </p>
              <h3 className="mt-4 break-keep text-4xl font-black text-white md:text-5xl">Make Co-Pilot</h3>
              <p className="mt-8 break-keep text-xl leading-10 text-slate-300">
                On-premise 및 부서별 비즈니스 시스템을 위한 플러그인 모듈입니다. 이메일 및 전자 결재 시스템에 내장된 AI 비서 기능을
                제공합니다.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  'Outlook Integration: 메일 요약 및 분석',
                  'Intelligent Chatbot: 내부 데이터 기반 Q&A',
                  'Document Generation: 보도 자료 작성, 번역, 맞춤법 검사',
                  '비즈니스 생산성 극대화',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#9b78ff]" />
                    <span className="break-keep">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#06090d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <LogoStrip logos={[{ name: '삼성생명', src: samsungLifeLogo }]} />
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <img
                  src="/images/product-lam.png"
                  alt="Make LAM architecture"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8fffc1]">Product</p>
              <h3 className="mt-4 break-keep text-4xl font-black text-white md:text-5xl">Make LAM (Large Action Model)</h3>
              <p className="mt-5 break-keep text-2xl font-black leading-10 text-[#c8f5ff]">
                단순 응답을 넘어 실제 액션 수행까지 연결하는 실행형 AI 아키텍처
              </p>
              <p className="mt-8 break-keep text-xl leading-10 text-slate-300">
                질의응답 중심 LLM을 넘어, 의사결정 흐름, 외부 시스템 연동, 단계적 실행까지 고려한 Action-oriented AI 구조를 지향합니다.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'Multi-step action planning',
                  'External tool execution',
                  'Workflow decision support',
                  'Process automation',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-lg font-semibold text-white">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#67e5ff]" />
                    <span className="break-keep">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engines;


