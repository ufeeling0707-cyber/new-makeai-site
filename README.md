# MakeAI.cloud Homepage

MakeAI.cloud 개편 콘텐츠 명세를 반영한 Vite + React 정적 홈페이지입니다. GitHub에 올린 뒤 Vercel에서 무료 Hobby 프로젝트로 연결해 운영할 수 있습니다.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Vercel 설정은 기본값을 사용하면 됩니다.

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Replaceable Image Assets

아래 파일만 교체하면 홈페이지의 임시 비주얼을 실제 브랜드 자산으로 바꿀 수 있습니다. 같은 파일명과 경로를 유지하면 코드 수정이 필요 없습니다.

| Purpose | Path | Current Format | Recommended Spec |
| --- | --- | --- | --- |
| Header/Footer logo | `public/images/makeai-logo.svg` | SVG | SVG 권장, 가로형 로고, 190x48 viewBox 또는 동일 비율 |
| Hero AI Bus visual | `public/images/makeai-ai-bus.png` | PNG | 16:9 또는 3:2, 2400px 이상 가로, 어두운 배경에서도 식별 가능 |
| Make Docu Analyzer | `public/images/product-docu.png` | PNG | 16:10 또는 3:2, 1200px 이상 가로, UI/문서 지능화 콘셉트 |
| Make Agent Builder | `public/images/product-hyperflow.png` | PNG | 16:10 또는 3:2, 1200px 이상 가로, workflow/agent builder 콘셉트 |
| Make LAM | `public/images/product-copilot.png` | PNG | 16:10 또는 3:2, 1200px 이상 가로, action flow/automation 콘셉트 |
| 조정호 프로필 | `public/images/ChoJungHo.png` | PNG | 정사각형 권장, 600x600px 이상 |
| 강경훈 프로필 | `public/images/KangKyungHoon.png` | PNG | 정사각형 권장, 600x600px 이상 |
| 최범기 프로필 | `public/images/ChoiBumKi.png` | PNG | 정사각형 권장, 600x600px 이상 |

정준수 프로필 이미지는 현재 이니셜 플레이스홀더를 사용합니다. 실제 이미지를 추가하려면 `src/App.tsx`의 `people` 배열에서 `정준수` 항목의 `image` 값을 새 파일 경로로 지정하면 됩니다.

## Notes

- 문의 폼은 무료 정적 배포에 맞춰 `mailto:` 방식으로 동작합니다.
- 모든 주요 문의 CTA는 `#contact-details` 앵커로 이동합니다.
- 상세 제품 페이지 없이 단일 홈페이지 섹션 구조로 구성되어 있습니다.

## Customer Logo Folder

히어로 섹션의 고객사 로고는 src/assets/customer-logos 폴더를 자동으로 읽어 표시합니다.

- 지원 확장자: png, jpg, jpeg, svg, webp, ico
- 표시 이름: 파일명에서 확장자를 뺀 값
- 권장 예시: 삼성생명.png, 현대위아.svg, 새고객사.webp
- 반영 방식: 폴더에 파일을 추가하면 빌드 시 자동 반영

예시:

`	ext
src/assets/customer-logos/
  삼성생명.png
  현대위아.png
  한국원자력환경공단.png
  한화손해보험.ico
`

운영 배포 전에 
pm run build를 다시 실행하면 새 로고가 포함된 정적 파일이 생성됩니다.
