import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;  

    ul>li{
      font-size: 16px;

    }
    h1{
      font-size: 100px;
      font-weight: 300;
      line-height: 140px; 
    }
    h2{
      font-size: 60px;
      font-weight: 300;
      color: white;
    }
    h3{
      font-size: 24px;
      font-weight: 300;

    }
    p{
      font-size: 16px;
    }
    
`
 
export default GlobalStyle;