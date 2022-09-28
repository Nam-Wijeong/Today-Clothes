import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import InitPage from './pages/initPage/InitPage';
import Home from './pages/home/Home';
import reset from 'styled-reset';
import './app.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --color-white : #fff;
    --color-darkwhite : #f2f2f2;
    --color-lightgrey : #c4c4c4;
    --color-lightpurple : #A6A0C3;
    --color-text : #212121;
    --color-button : #A6A0C3;
    --color-enabled : ;
    --color-disabled : ;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: #A6A0C3;
  }

  a{
    text-decoration : none;
    color : inherit;
  }   

  button{
    border : none;
    cursor : pointer;
    background-color: transparent;
  }
`
function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitPage/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;