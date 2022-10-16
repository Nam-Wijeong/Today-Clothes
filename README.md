# ☀️ 기온별 옷차림 추천 서비스앱 '옷늘의 날씨'👕
- URL : https://today-clothes.herokuapp.com/
- 개발 기간 : 2022.09 ~ 2022.10

## 📖 프로젝트 소개
- 실시간으로 변하는 날씨, 특히 예측하기 어려운 환절기가 올 때마다 어떤 옷을 입어야 하는지 고민이 됐습니다.
- 이런 어려움을 해결하고 싶어 기온에 맞는 옷차림을 추천해주는 서비스를 개발하게 되었습니다.
- 원하는 지역을 검색하면 해당 지역의 현재 기온과 그에 맞는 옷차림을 추천받을 수 있습니다.
 
## 🛠 기술 스택
- Front-End : React, Styled-Components, Axios, React Router(V6)
- Back-End : OpenWeatherMap API(https://openweathermap.org/)

## 💻 구현 기능

<div>

|Splash & 시작화면 | 유저이름 입력 | 지역 검색 & 옷 추천|
|:---:|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/99578007/196025627-5b855f62-307c-4368-85e9-16276483a02f.gif" width=310 />|<img src="https://user-images.githubusercontent.com/99578007/196025682-d64ac80c-331d-4236-8df6-204570fbe126.gif" width=310 />|<img src="https://user-images.githubusercontent.com/99578007/196025685-068fde1a-bc3b-44a5-97a4-7d93d2316234.gif" width=310 /> 

</div>

### [Splash & 시작화면]	
- Splash 화면이 보이고 시작화면으로 넘어갑니다.
- 사용할 이름을 입력할 수 있습니다.

### [유저이름 입력]
- 사용할 이름을 입력하고 다음 페이지로 넘어갑니다.
- 입력한 이름은 로컬스토리지에 저장됩니다.

### [지역 검색 & 옷 추천]
- 화면 상단에 오늘 날짜와 입력한 이름이 저장되어 보입니다.
- 원하는 지역을 시, 군, 구 단위로 검색할 수 있습니다.
- 검색한 지역의 현재 날씨와 시간대별 날씨 정보를 확인할 수 있습니다.
- 옷 추천 버튼을 클릭하면 현재 기온에 맞는 옷차림을 사진과 텍스트로 추천받을 수 있습니다.

## 📁 폴더 구조
```
├─📦public
│  ├─📄favicon.ico
│  └─📄index.html
└─📦src
   ├─📂assets
   │ ├─📁fonts
   │ └─📁images
   ├─📂components
   │ ├─📁carousel
   │ ├─📁header
   │ ├─📁main
   │ └─📁splash
   ├─📂pages
   │ ├─📁home
   │ └─📁initPage
   ├─📂styles
   │ ├─📄common.js
   │ └─📄font.css
   ├─📄App.jsx
   └─📄index.js
```
