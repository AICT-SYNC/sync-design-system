# Sync Design System

## About AICT Team

> "소통의 혼란을 AI로 해결하는, AICT 팀입니다."

AICT 팀은 소프트웨어 개발 현장에서 발생하는 **비개발자와 개발자 간의 소통 문제**를 AI 기술로 해결하는 것을 목표로 합니다.

## About Sync

> "Sync is All You Need"

**Sync**는 기획부터 실행까지, 소통의 단절을 해결하고 협업의 본질을 완성하는 **AI 기반 올인원 협업 플랫폼**입니다.

### 문제 정의

소프트웨어 개발 현장에서 가장 빈번하게 발생하는 문제는 **비개발자(기획자·디자이너)와 개발자 간의 소통 불일치**입니다. 기획서는 모호하고, 회의는 길어지고, 일정은 지연됩니다.

Sync 팀은 **"DeepSync"** AI 에이전트를 통해 이 모든 문제를 **구조적으로 해결**합니다.

### DeepSync가 해결하는 네 가지 핵심 단계

#### 1. 기획
기획 단계에서 발생하는 **이해 불일치**를 해결하기 위해 DeepSync는 기획 문서를 자동으로 **구조화하고 수정 가능하게** 만듭니다. 기획자와 개발자가 같은 문서에서 실시간으로 협업하면서, 서로의 언어를 **자동 번역하듯 명확히 이해**할 수 있습니다.

> "이제 기획이 말이 됩니다."

#### 2. 검증
DeepSync는 **기능 복잡도, 일정, 리소스**를 자동 분석하여 아이디어의 실현 가능성을 즉시 검증합니다.

> "감정이 아닌 데이터 기반으로 의사결정합니다."

#### 3. 실행
기획이 확정되면 DeepSync가 **자동으로 이슈를 생성하고 담당자를 배정**합니다. 깃허브 연동을 통해 **이슈 트래킹이 자동화**되어 개발자는 개발에만 집중할 수 있습니다.

> "수십 경 가지의 경우의 수도 DeepSync는 자동으로 Plan을 세웁니다."

#### 4. 관리
프로젝트가 진행되면서 발생하는 관리 부담 역시 DeepSync가 대신합니다. 칸반보드, 간트차트, 캘린더가 자동으로 갱신되고, 비개발자도 **이메일 한 통으로 이슈를 생성**할 수 있어 협업 진입장벽이 완전히 사라집니다.

> "DeepSync는 All You Need."

### Sync의 특징

- **All-in-One 협업툴** - 기획, 검증, 실행, 관리 전 과정을 하나로 통합
- **AI 기반 자동화** - 이슈 생성, 일정 배정, 트래킹 자동화
- **비개발자 친화적 UX** - 이메일, 자연어 입력만으로 모든 기능 접근 가능

> "1분 1초가 아까운 개발 환경에서, DeepSync는 세팅 없이 바로 사용 가능한 진정한 AI 도우미입니다."

### 비즈니스 모델

Sync는 **SaaS(Software as a Service)** 모델을 기반으로 한 **구독형 서비스**입니다. 팀 규모, 사용 기능, 프로젝트 수에 따라 단계별 요금제를 제공하며, 기존 협업툴 대비 압도적인 생산성과 자동화 기능을 통해 비즈니스 효율성을 극대화합니다.

---

## 소개

**sync-design-system**은 Sync 애플리케이션을 위한 React 기반 디자인 시스템 라이브러리입니다. 일관된 UI/UX를 제공하고 개발 생산성을 향상시키기 위해 재사용 가능한 컴포넌트들을 제공합니다.

## 주요 기능

- TypeScript로 작성된 타입 안전한 컴포넌트
- Styled Components를 활용한 스타일링
- Storybook을 통한 컴포넌트 문서화 및 개발 환경
- ESM 및 CJS 모듈 형식 지원
- React 18 및 19 지원

## 설치

```bash
npm install sync-design-system
```

```bash
yarn add sync-design-system
```

```bash
pnpm add sync-design-system
```

## 사용 방법

```tsx
import { Button, Input, Card } from 'sync-design-system';

function App() {
  return (
    <Card>
      <Input placeholder="Enter your text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## 제공 컴포넌트

### 기본 컴포넌트
- **Button** - 다양한 스타일의 버튼 컴포넌트
- **IconButton** - 아이콘 전용 버튼 컴포넌트
- **Input** - 텍스트 입력 컴포넌트
- **Checkbox** - 체크박스 컴포넌트
- **ToggleButton** - 토글 버튼 컴포넌트

### 레이아웃 컴포넌트
- **Card** - 기본 카드 컴포넌트
- **ProjectCard** - 프로젝트용 카드 컴포넌트
- **WorkspaceCard** - 워크스페이스용 카드 컴포넌트
- **Divider** - 구분선 컴포넌트

### 데이터 표시
- **Badge** - 배지 컴포넌트
- **Image** - 이미지 컴포넌트
- **List** - 리스트 컴포넌트

### 폼 컨트롤
- **Select** - 드롭다운 선택 컴포넌트
- **Calendar** - 캘린더 컴포넌트
- **DatePicker** - 날짜 선택 컴포넌트

### 네비게이션
- **HeaderTab** - 헤더 탭 컴포넌트

## 개발

### 스크립트

```bash
# Storybook 개발 서버 실행
npm run storybook

# 프로덕션 빌드
npm run build

# Storybook 빌드
npm run build-storybook
```

### 개발 환경

이 프로젝트는 다음 기술 스택을 사용합니다:

- **React** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Styled Components** - CSS-in-JS 스타일링
- **Rollup** - 번들링
- **Storybook** - 컴포넌트 문서화 및 개발
- **Lucide React** - 아이콘

### 빌드 출력

빌드 시 다음 형식으로 출력됩니다:

- **ESM** - `dist/index.esm.js`
- **CommonJS** - `dist/index.cjs.js`
- **Type Definitions** - `dist/index.d.ts`

## 브라우저 지원

최신 버전의 주요 브라우저를 지원합니다:
- Chrome
- Firefox
- Safari
- Edge

## 라이선스

이 프로젝트의 라이선스는 프로젝트 루트의 LICENSE 파일을 참조하세요.

## 기여

기여를 환영합니다! 이슈를 생성하거나 Pull Request를 제출해 주세요.
