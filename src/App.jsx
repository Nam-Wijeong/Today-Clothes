import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/common';
import Home from './pages/home/Home';
import InitPage from './pages/initPage/InitPage';
import './styles/common'

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