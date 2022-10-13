import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './font.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --color-white : #fff;
    --color-darkwhite : #f2f2f2;
    --color-lightgrey : #c4c4c4;
    --color-lightpurple : #A6A0C3;
    --color-text : #212121;
    --color-button : #A6A0C3;
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
    padding: 0;
  }
`

export default GlobalStyle