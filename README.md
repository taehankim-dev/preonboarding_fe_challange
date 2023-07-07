# 프리온보딩 프론트엔드 챌린지
## 프리온보딩 프론트엔드 챌린지 과제 1
React와 History API 사용하여 SPA Router 기능 구현하기

### 요구사항
1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.
   - `/` → `root` 페이지
   - `/about` → `about` 페이지
2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.
   - 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)
3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.
```
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```
4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.
   ```
   const { push } = useRouter();
   ```
5) 아래 스크린샷을 참고하여 앱을 작성한다.

참고) Vite 초기 세팅 (링크)
```
$> yarn create vite
# 실행 후 cli의 지시에 따라 react, react-ts 중 택일하여 초기 세팅할 것
```
- <https://vitejs-kr.github.io/guide/#scaffolding-your-first-vite-project>
- Vite란?
  + 프랑스어로 ‘빠르다’는 뜻을 가진 자바스크립트 빌드 툴
  + 프로젝트 스캐폴딩 템플릿 지원하고, 설정이 매우 간단함(거의 불필요함)
  + CRA에 비해 프로젝트에 담긴 의존성 규모가 작아서 인스톨 시간에 대한 부담이 없음
  + HMR 및 빌드 속도가 매우 빠름
 
------------

### 과제 설명
📂 파일 구조
```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useRouter.tsx
 ┃ ┣ 📜Route.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📂pages
 ┃ ┣ 📜About.tsx
 ┃ ┗ 📜Root.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```
+ components : Router와 Route 컴포넌트와 hooks
+ hooks : 커스텀 hook
+ pages : 렌더링되는 페이
