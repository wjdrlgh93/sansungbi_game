



## 👾👾👾 Next.js + TypeScript 를 사용한 산성비 게임

> 타입스크립트 + Next.js 학습을 위한 미니 프로젝트 <br>
> TypeScript로 게임을 작성하고 Next.js를 이용해서 화면에 보여주는 방식으로 작성함

<br>

 ## 👾👾👾 기획의도

📈 기획의도 <br>
- 단순한 정적 웹페이지를 넘어, Next.js의 렌더링 최적화와 TypeScript의 안정성을 게임 로직에 적용해보고자 했습니다. <br>
- 텍스트가 떨어지는 애니메이션과 실시간 입력 판정, 스코어링 시스템을 구현하며 상태 관리(State Management) 능력과 <br>
- 비동기 처리 역량을 강화하는 것을 목표로 했습니다. 또한, 별도의 설치 없이 웹 브라우저에서 즉시 실행 가능한 접근성 높은 웹 애플리케이션을 구축하고자 했습니다. <br>

 ## 👾👾👾 프로젝트 프리뷰


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
<img width="308" height="562" alt="image" src="https://github.com/user-attachments/assets/7882a234-07b2-43c0-b546-e88c168b3b2e" />


