import React from 'react';
import { Building2, ClipboardCheck, Cpu, Network, Stethoscope } from 'lucide-react';
import samsungFireLogo from '../assets/customer-logos/삼성화재.png';
import samsungLifeLogo from '../assets/customer-logos/삼성생명.png';
import kqcLogo from '../assets/customer-logos/한국퀀텀컴퓨팅.png';

const axSteps = [
  {
    number: '1',
    label: 'Diagnosis',
    title: '진단',
    description: '업무, 데이터, 시스템 현황을 분석하여 AI 도입 가능 영역과 우선순위를 정의합니다.',
  },
  {
    number: '2',
    label: 'Roadmap',
    title: '로드맵 수립',
    description: '단기 PoC와 중장기 시스템화를 아우르는 실행 가능한 AI 로드맵을 설계합니다.',
  },
  {
    number: '3',
    label: 'Proof of Concept',
    title: 'PoC',
    description: '실제 데이터와 업무 시나리오를 바탕으로 성능과 적용 가능성을 검증합니다.',
  },
  {
    number: '4',
    label: 'Production System',
    title: '시스템',
    description: '검증된 기능을 실제 운영 환경에 맞게 연결하고 지속 가능한 시스템으로 고도화합니다.',
  },
];

const solutions = [
  {
    title: 'Aged-Care AI',
    summary: '최신 AI기술과 IT기술 기반 지속적인 관리와 모니터링으로 과학적이고 체계적인 건강관리 지원',
    description:
      '화상회의, AI챗봇 및 상담, 투약정보, 위치정보, 자가진단, IoT허브, 이모티콘, 기프티콘, 건강정보, 간병인 연결, 약국위치 정보, PPG/EGC Heart Rate, 스트레스측정, HL7 인터페이스 등을 기반으로 의료비용 절감과 노령건강에 기여합니다.',
    tags: ['원격 모니터링', '상담/연결 지원', '건강 데이터 통합', '노령 건강 관리 AI'],
    icon: Stethoscope,
  },
  {
    title: 'Insurance AI',
    summary: '보험 문서 이해, 심사 지원, 지식검색을 위한 AI 솔루션',
    description:
      '삼성생명, 삼성화재 등 선진기업 대상으로 전사 차원 AI-Ready 데이터 플랫폼 PoC를 구축하여, 복잡한 보험 도메인 데이터를 수월하게 활용한 문서 분석, RAG, 업무지원형 AI 구축의 성과를 검증했습니다.',
    tags: ['보험 약관 질의응답', '심사 보조', '지급조건 확인', '상담/업무지원 AI'],
    icon: ClipboardCheck,
  },
  {
    title: 'Public Sector AI',
    summary: '공공 행정의 문서, 민원, 지식 활용을 지원하는 신뢰형 AI 솔루션',
    description:
      '정책문서, 행정자료, 민원 및 상담 흐름을 AI와 연결하여 설명 가능하고 안정적인 공공 AI 서비스 구축을 지원합니다.',
    tags: ['민원 응대 지원', '행정 문서 검색', '정책 질의응답', '리스크 탐지 및 대응 보조'],
    icon: Building2,
  },
  {
    title: 'Manufacturing AI',
    summary: '제조 현장의 데이터 분석, 예측, 최적화를 위한 산업 AI 솔루션',
    description:
      '공정 센서, 품질 데이터를 기반으로 이상 탐지, 품질 예측, 운영 최적화를 지원합니다.',
    tags: ['이상 탐지', '품질 예측', '수요/공정 예측', '운영 최적화'],
    icon: Cpu,
  },
  {
    title: 'Quantum Computing AI',
    summary: '양자컴퓨팅 선두기업 KQC(www.KQChub.com)과 양자컴퓨팅 기반 Next AI 모델 개발',
    description:
      'Quantum Computing과 AI의 접점을 연구하고, 고난도 최적화 및 차세대 연산 문제에 대한 미래 지향적 적용 가능성을 모색합니다.',
    tags: ['최적화 문제 탐색', '고난도 연산 시뮬레이션', '차세대 AI 아키텍처 연구'],
    icon: Network,
  },
];

const Products: React.FC = () => {
  return (
    <section id="solutions" className="border-t border-white/10 bg-[#0a0d12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8ce8ff]">Solutions</p>
          <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-white md:text-6xl">
            산업별 데이터 특성과 업무 프로세스를 반영한 AI
          </h2>
          <p className="mt-8 max-w-4xl break-keep text-lg leading-9 text-slate-300 md:text-[1.45rem] md:leading-10">
            MakeAI는 기술 보유를 넘어, 실제 현장에서 작동하는 적용 역량을 제공합니다.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-[#060a10] px-6 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.4)] md:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h3 className="text-2xl font-black text-white">AX 컨설팅</h3>
            <p className="mt-6 break-keep text-lg font-bold leading-8 text-[#c8f5dc]">
              기업 및 조직 인력의 역량진단에서부터 시스템 구축까지, End-to-End AX 최적화 컨설팅으로 기업 상황과 준비 수준에 맞추어 ROI를
              극대화시킬 수 있는 검증된 벤처블럭 노하우를 제공합니다.
            </p>
            <p className="mt-6 break-keep text-base leading-8 text-slate-300">
              아이디어를 PoC에서 멈추지 않고, 실제 운영 가능한 AI 시스템으로 연결합니다.
            </p>
          </div>

          <div className="mx-auto mt-10 w-fit max-w-full overflow-hidden rounded-2xl border border-white/10 bg-white p-3 md:p-4">
            <img
              src="/images/ax-consulting-process.png"
              alt="Make AI의 AX 진단 프로세스"
              className="block h-auto w-[min(100vw-4rem,720px)] max-w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {axSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-300/90 text-sm font-black text-[#022029]">
                  {step.number}
                </div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8ce8c9]">{step.label}</p>
                <h4 className="mt-2 text-2xl font-black text-white">{step.title}</h4>
                <p className="mt-4 break-keep text-base leading-8 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <div
                key={solution.title}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/8">
                  <Icon className="h-7 w-7 text-[#67e5ff]" />
                </div>
                <h3 className="text-2xl font-black text-white">{solution.title}</h3>
                <p className="mt-4 break-keep text-lg font-bold leading-8 text-[#c8f5dc]">{solution.summary}</p>
                {solution.title === 'Insurance AI' && (
                  <>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        { name: '삼성생명', src: samsungLifeLogo },
                        { name: '삼성화재', src: samsungFireLogo },
                      ].map((logo) => (
                        <div key={logo.name} className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white p-3">
                          <img src={logo.src} alt={`${logo.name} logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 aspect-[920/446] overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                      <img
                        src="/images/tnc-design.png"
                        alt="Insurance AI system diagram"
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </>
                )}
                {solution.title === 'Aged-Care AI' && (
                  <div className="mt-4 aspect-[920/446] overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                    <img
                      src="/images/aged-care-system.png"
                      alt="Aged-Care AI system diagram"
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                {solution.title === 'Quantum Computing AI' && (
                  <>
                    <div className="mt-4 flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-white p-3">
                      <img src={kqcLogo} alt="한국퀀텀컴퓨팅 logo" className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <div className="mt-4 aspect-[920/446] overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                      <img
                        src="/images/quantum-kqc.png"
                        alt="KQC quantum computing exhibition booth"
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </>
                )}
                <p className="mt-5 break-keep text-base leading-8 text-slate-300">{solution.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/40 px-3 py-1.5 text-sm font-semibold text-slate-200 ring-1 ring-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
