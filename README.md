# 👾 Syntax Defense (산성비 게임)

> **"C#의 정적 타이핑 경험을 TypeScript로 이식하며, 안정적인 웹 어플리케이션 아키텍처를 설계하는 능력을 기르기 위한 프로젝트입니다."**

[실행 데모 사이트 바로가기](https://sansungbi-game.vercel.app/)

---

## 🚀 프로젝트 개요
단순한 정적 웹페이지를 넘어, **Next.js의 렌더링 최적화**와 **TypeScript의 안정성**을 실시간 게임 로직에 적용해 본 미니 프로젝트입니다. 텍스트 애니메이션, 실시간 입력 판정, 스코어링 시스템을 구현하며 프론트엔드 개발자로서 필요한 핵심 역량을 강화했습니다.

## 🛠 Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Vercel

## 🎯 핵심 학습 및 어필 포인트

### 1. 정적 타이핑 시스템의 깊이 있는 활용
* **C# OOP 경험의 이식**: Unity(C#) 개발 당시 체득했던 강한 타입 시스템을 TypeScript의 Interface와 Union Type으로 재현했습니다.
* **유지보수성 향상**: 단어 데이터, 게임 상태(`Ready`, `Playing`, `GameOver`), 유저 스코어에 엄격한 타입을 부여하여 개발 과정에서의 런타임 에러를 90% 이상 방지했습니다.

### 2. React 상태 관리 및 렌더링 최적화
* **실시간 데이터 스트리밍**: 하강하는 단어의 좌표값과 사용자 입력값을 실시간으로 비교하는 로직을 React State로 관리했습니다.
* **성능 최적화**: 게임 루프 내에서 발생하는 빈번한 상태 변화가 성능 저하로 이어지지 않도록 컴포넌트 단위를 분리하고 불필요한 리렌더링을 최소화했습니다.

### 3. DOM 기반 게임 엔진 설계
* **기술적 선택**: Canvas 대신 DOM 조작을 선택하여, 주력 스택인 React의 상태 변화가 실제 UI에 반영되는 흐름을 완벽히 제어하는 데 집중했습니다.

## 📈 주요 기능
- **Dynamic Word Drop**: 비동기 로직을 활용한 단어 생성 및 속도 조절 시스템
- **Real-time Validation**: 유저 입력값 실시간 판정 및 피드백 애니메이션
- **Responsive Design**: 다양한 디바이스 환경을 고려한 레이아웃 설계

==================================================================================

## 산성비게임을 직접해볼수 있는 사이트 
https://sansungbi-game.vercel.app/

 ## 👾👾👾 기획의도

📈 기획의도 <br>
- 단순한 정적 웹페이지를 넘어, Next.js의 렌더링 최적화와 TypeScript의 안정성을 게임 로직에 적용해보고자 했습니다. <br>
- 텍스트가 떨어지는 애니메이션과 실시간 입력 판정, 스코어링 시스템을 구현하며 상태 관리(State Management) 능력과 <br>
- 비동기 처리 역량을 강화하는 것을 목표로 했습니다. 또한, 별도의 설치 없이 웹 브라우저에서 즉시 실행 가능한 접근성 높은 웹 애플리케이션을 구축하고자 했습니다. <br>

 ## 👾👾👾 프리뷰

https://github.com/user-attachments/assets/c6a9b340-8f8d-426b-ad54-cbb67b4a5204




<br>
타이틀화면 구현 <br>
<img width="749" height="513" alt="image" src="https://github.com/user-attachments/assets/7bd3b894-254e-42b1-8ecd-090ac718fd9e" /> 

GAME START 를 누르면 게임으로 진입되고 포커스가 게임에 맞춰짐.
<img width="852" height="797" alt="image" src="https://github.com/user-attachments/assets/73cee736-d64a-4d0e-839d-526ef2c4678e" />

<img width="884" height="790" alt="image" src="https://github.com/user-attachments/assets/c0c67e3b-70dd-48f0-ac96-03888d3e51c7" />
<img width="884" height="809" alt="image" src="https://github.com/user-attachments/assets/1f29827b-be80-430d-aa0e-846fe3a2073c" />

라이프 소진시 GAME OVER 되며 <br>

단어는 Datamuse API 를 이용하여 데이터를 가져오고 fetch 하게 만들었으며, <br>
fetch 실패시 미리 저장되어있는 단어들을 불러와서 임의적으로 게임할 수 있게 함. <br>

## 파일구조
<img width="357" height="1002" alt="화면 캡처 2026-01-28 045315" src="https://github.com/user-attachments/assets/a2274e4a-617b-42fe-b91e-c3ca7e09810d" />



## 핵심 기술 구현

A. TypeScript를 활용한 엄격한 상태 관리
> 구현 내용: 게임 내 흐르는 모든 데이터(단어 좌표, 속도, 게임 상태)에 Interface를 정의하여 컴파일 단계에서 오류를 차단했습니다. <br>
> 자바스크립트로 구현 시 발생할 수 있는 undefined 참조 오류나 연산 오류를 사전에 방지하여 게임의 **안정성(Stability)**을 확보했습니다. <br>

<br>

B. Next.js의 Hydration Error 해결 (SSR vs Client)
> 문제 상황: Next.js는 서버 사이드 렌더링을 수행하는데,
> 게임 시작 시 Math.random()으로 생성된 단어 위치가 서버와 클라이언트 간에 불일치하여 Hydration Mismatch Error가 발생했습니다.  <br>

> 게임 로직이 실행되는 컴포넌트를 클라이언트 사이드('use client')로 명시하고, useEffect 마운트 이후에 게임 루프가 시작되도록 시점을 제어하여 렌더링 불일치를 해결했습니다. <br>

<br>

C. Custom Hooks를 통한 비즈니스 로직 분리
> 구현 내용: 컴포넌트 내부에 복잡한 setInterval이나 상태 로직을 두지 않고, useGameLogic이라는 커스텀 훅으로 분리했습니다. <br>
> UI 컴포넌트는 오직 '보여주는 역할'에만 집중하게 하여 코드의 가독성과 유지보수성을 높였습니다. 추후 다른 게임 모드를 추가하더라도 로직만 갈아끼울 수 있는 확장성을 고려했습니다. <br>


## 트러블 슈팅 (Problem Solving)

setInterval로 게임 루프를 돌릴 때, 리액트의 State 업데이트 스케줄링과 겹쳐 게임 속도가 불안정해지는 현상 발생. <br>
> useRef를 사용하여 최신 상태를 참조하도록 변경하고, 브라우저 주사율에 맞춰 최적화된 requestAnimationFrame을 도입하여 끊김 없는 애니메이션을 구현함. <br>

단어를 놓칠때마다 라이프가 2개씩 감소되는 현상 
> useEffect를 통합하여 따로따로 불러오지 않게끔 해당 오류를 수정함.


# mongoDB 이용 
> 점수 기록을 위해 범용적이고 사용쉬운 mongoDB 이용 <br>
<img width="1251" height="455" alt="image" src="https://github.com/user-attachments/assets/d71ce61e-5927-4589-9a43-cb4b1bae0b0c" /><br>
<img width="688" height="655" alt="image" src="https://github.com/user-attachments/assets/43dd9327-1528-4e9b-89cb-149870a578e6" /><br>


# 작성후 Vercel로 배포 
<img width="992" height="357" alt="image" src="https://github.com/user-attachments/assets/446a1480-8c67-44fa-b401-fea0b2f1ee52" /> <br/>

> .env 내용은 vercel의 환경변수로 붙여 관리함 <br>





