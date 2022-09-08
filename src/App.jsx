import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import InitPage from './pages/initPage/InitPage';
import Home from './pages/home/Home';
import Clothes1 from './components/main/clothes/Clothes1';
import reset from 'styled-reset';
import './app.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }   

  button{
    border : none;
    cursor : pointer;
  }

  * {
    box-sizing: border-box;
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