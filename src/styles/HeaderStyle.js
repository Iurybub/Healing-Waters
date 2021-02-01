import styled from 'styled-components';
import header from '../static/header.png';


const HeaderStyle = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(${header});
    background-size: cover;
    background-position: center top;
    padding: 3rem;
    margin: 0;

    h1{
        margin-bottom: 1rem;
    }
    h2{
        display: none;
    }
    h3{
        margin-top: 1rem;
        margin-bottom: 2rem;
        line-height: 50px;
    }

    @media only screen and (max-width: 992px) {
        .header{
            display: flex;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            align-items: center;
        }
        img{
            width: 120px;
            height: 10px;
        }
        h1{
            margin-bottom: 1rem;
            font-size: 80px;
            text-align: center;
        }
        h3{
            margin-top: 1rem;
            margin-bottom: 2rem;
            line-height: 50px;
        }
    @media only screen and (max-width: 7686px) {
      
        h1{
            font-size: 64px;
            font-weight: 300;
            line-height: 100px; 
          }
          h2{
            font-size: 60px;
            font-weight: 300;
            color: white;
            display: block;
            color: black;
            font-size: 16px;
            padding-top: 2rem;
          }
          h3{
            display: none; 
      
          }
          p{
            font-size: 16px;
          }
    @media only screen and (max-width: 576px) {
      
        h1{
            font-size: 48px;
            font-weight: 300;
            line-height: 60px; 
          }
          h2{
            font-size: 60px;
            font-weight: 300;
            color: white;
            display: block;
            color: black;
            font-size: 16px;
            padding-top: 2rem;
          }
          h3{
            display: none; 
      
          }
          p{
            font-size: 16px;
          }

`;

export default HeaderStyle;