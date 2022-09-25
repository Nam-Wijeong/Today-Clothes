import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import InitPage from './pages/initPage/InitPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import reset from 'styled-reset';
import './app.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
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