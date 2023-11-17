# ☀️ 기온별 옷차림 추천 서비스 '옷늘의 날씨'👕
- URL : https://today-clothes.netlify.app/
- 개발 기간 : 2022.09 ~ 2022.10
- 수정 기간 : 2023.11.10 ~ 2023.11.14
## 📖 프로젝트 소개
- 실시간으로 변하는 날씨, 특히 예측하기 어려운 환절기가 올 때마다 어떤 옷을 입어야 하는지 고민이 됐습니다.
- 이런 어려움을 해결하고 싶어 기온에 맞는 옷차림을 추천해주는 서비스를 개발하게 되었습니다.
- 원하는 지역을 검색하면 해당 지역의 현재 기온과 그에 맞는 옷차림을 추천받을 수 있습니다.

## 🛠 기술 스택
- Front-End : React, React Query, Tailwind CSS
- Back-End : Firebase, OpenWeatherMap API(https://openweathermap.org/)

## 🌟 수정된 내용(2023년)
1. 폴더 구조 정리
   - 비즈니스 로직은 따로 폴더 분리하여 재사용성 높임
2. 환경변수 설정
   - API Key와 같이 외부에 노출되면 안 되는 중요한 정보는 환경변수로 설정
3. 유저 정보(로컬스토리지 저장 -> Firebase 로그인)
   - 기존에는 단순히 유저 이름만 입력받아 로컬스토리지에 저장하고 화면 상단에 표시
   - 로그인 기능을 추가하여 유저 정보를 받아오는 것이 적합하다고 판단하여 Firebase를 통한 로그인 기능을 추가 
4. CSS 변경(styled-component -> tailwind CSS)
   - 클래스명으로 간편하게 CSS를 작성할 수 있고, 반응형 UI를 비교적 쉽게 적용할 수 있다는 장점이 있어 tailwind 사용
5. 데이터베이스 저장(Firebase - Realtime Database)
   - 기존에는 필요한 이미지와 데이터를 직접 입력하여 작성했으나, 확장성이 좋지 않다고 생각해서 Firebase를 활용하여 필요한 데이터를 저장하여 사용
6. Context API 사용
   - 로그인처럼 모든 컴포넌트에서 공통으로 필요한 상태의 경우 props로 필요한 값을 전달하는 것보다, Context API를 사용하는 것이 효율적
7. 리액트 쿼리 적용
   - 간편한 네트워크 통신이 가능
   - 로딩, 에러, 필요한 데이터를 받아왔는지 쉽게 파악

## 💻 구현 기능

<div>

|로그인&로그아웃 | 지역 검색 | 옷 추천 |
|:---:|:---:|:---:|
|<img src="https://github.com/Nam-Wijeong/Today-Clothes/assets/99578007/410a5334-9c3c-4d24-846b-1d81e8b36ecf" width=300 height=220 />|<img src="https://github.com/Nam-Wijeong/Today-Clothes/assets/99578007/b0685fa1-857f-4c67-b5ed-c56cdf725438" width=250 />|<img src="https://github.com/Nam-Wijeong/Today-Clothes/assets/99578007/281874ed-50b8-4502-8943-bad98c22d25d" width=250 />

</div>

### [로그인 & 로그아웃]
- 파이어베이스 구글 연동으로 로그인, 로그아웃을 할 수 있습니다.
- 로그인 상태인 경우 화면 상단에 유저 이름을 확인할 수 있습니다.

### [지역 검색]
- 원하는 지역을 시, 군, 구 단위로 검색할 수 있습니다.
- 검색한 지역의 현재 날씨와 시간대별 날씨 정보를 확인할 수 있습니다.

### [옷 추천]
- 옷 추천 버튼을 클릭하면 현재 기온에 맞는 옷차림을 사진과 텍스트로 추천받을 수 있습니다.
- 화면 상단의 홈 아이콘을 클릭하면 메인 화면으로 이동합니다.

## 📁 폴더 구조
```
├─📦public
│  ├─📄favicon.ico
│  └─📄index.html
└─📦src
   ├─📂api
     ├─📄firebase.js
     └─📄weather.js
   ├─📂assets
   │ ├─📁fonts
   ├─📂components
   │ ├─📄Button.jsx
   │ ├─📄Carousel.jsx
   │ ├─📄Header.jsx
   │ ├─📄HourlyWeatherCard.jsx
   │ ├─📄Loading.jsx
   │ ├─📄Search.jsx
   │ └─📄Weather.jsx
   ├─📂context
     ├─📄UserContext.jsx
   ├─📂pages
   │ ├─📄Home.jsx
   │ └─📄Clothes.jsx
   ├─📄App.jsx
   ├─📄index.css
   └─📄index.js
```
