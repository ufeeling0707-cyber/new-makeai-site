import React, { useState } from 'react';
import { Award, FileText, Lightbulb, Maximize2, X } from 'lucide-react';

const highlights = [
  {
    title: '논문',
    label: 'Research Papers',
    description:
      '산업AI, 스마트팩토리, 지능형 제어 관련된 심층적인 연구를 진행하고 있으며, SCI급 국제학술지와 컨퍼런스에서 그 연구성과를 인정받았습니다.',
    imageUrl: '/images/articles.png',
    imageAlt: 'Make AI research articles',
    stats: 'Applied AI Research',
    icon: FileText,
    reverse: false,
    zoomable: true,
  },
  {
    title: '특허',
    label: 'Patents',
    description:
      '산업현장 다양한 니즈와 Pain Point를 수용하고 해결하는 과정에서 확보한 핵심기술을 바탕으로 지속가능한 AI 기술자산을 확보하였습니다.',
    imageUrl: '/images/patents.png',
    imageAlt: 'Make AI patents',
    stats: 'Technology IP',
    icon: Lightbulb,
    reverse: true,
    zoomable: true,
  },
  {
    title: '수상',
    label: 'Awards',
    description:
      'Make AI 연구원이 공동참여 및 지도한 부산대팀이, 세계적인 보안 및 생성형 AI 경쟁대회에서 1위 수상을 하였습니다.',
    imageUrl: '/images/award.png',
    imageAlt: 'Make AI award',
    stats: 'Recognized Results',
    icon: Award,
    reverse: false,
    zoomable: false,
  },
];

const RndHighlights: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="rnd-highlights" className="border-t border-white/10 bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8ce8ff]">R&amp;D Highlights</p>
          <h2 className="mt-4 break-keep text-4xl font-black leading-tight text-white md:text-6xl">
            탁월한 연구 성과를 실제 산업현장에 반영하고 있습니다
          </h2>
          <p className="mt-8 max-w-4xl break-keep text-lg leading-9 text-slate-300 md:text-[1.45rem] md:leading-10">
            MakeAI는 논문, 특허, 수상 성과를 기반으로 검증 가능한 기술 경쟁력과 현장 적용 역량을 함께 발전시킵니다.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;

            return (
              <div
                key={highlight.title}
                className="rounded-2xl border border-white/10 bg-[#06090d] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.4)] md:p-8"
              >
                <div className={`grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center ${highlight.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {highlight.zoomable ? (
                    <button
                      type="button"
                      onClick={() => setSelectedImage({ src: highlight.imageUrl, alt: highlight.imageAlt })}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white p-3 text-left md:p-4"
                      aria-label={`${highlight.title} 이미지 확대`}
                    >
                      <img src={highlight.imageUrl} alt={highlight.imageAlt} className="h-auto w-full object-contain" loading="lazy" />
                      <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white shadow-lg ring-1 ring-white/20 transition group-hover:bg-[#0b1f2a]">
                        <Maximize2 className="h-5 w-5" />
                      </span>
                    </button>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3 md:p-4">
                      <img src={highlight.imageUrl} alt={highlight.imageAlt} className="h-auto w-full object-contain" loading="lazy" />
                    </div>
                  )}

                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/8">
                      <Icon className="h-7 w-7 text-[#67e5ff]" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8ce8c9]">{highlight.label}</p>
                    <h3 className="mt-3 text-4xl font-black text-white md:text-5xl">{highlight.title}</h3>
                    <p className="mt-8 break-keep text-xl leading-10 text-slate-300">{highlight.description}</p>
                    <div className="mt-8 inline-flex rounded-full bg-black/40 px-3 py-1.5 text-sm font-bold text-[#c8f5ff] ring-1 ring-white/6">
                      {highlight.stats}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white p-3 md:p-5" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/75 text-white ring-1 ring-white/20 transition hover:bg-[#0b1f2a]"
              aria-label="확대 이미지 닫기"
            >
              <X className="h-5 w-5" />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-h-[86vh] w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default RndHighlights;
