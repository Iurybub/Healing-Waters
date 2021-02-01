import styled from 'styled-components';
import woman from '../static/woman.png'

const AboutStyled = styled.div`
    width: 100%;
    
    p{
        font-size: 15px;
        font-weight: 500;
        color: #C6C6C6;
        margin: 1.5rem 0 1.5rem 0;
        margin-bottom: 2rem;
    }
    h3{
        font-size: 48px;
        font-weight: light;
        line-height: 75px;
    }
    
    .Row{
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    .Col{
        width: 50%;
        min-height: 60vh;
        padding: 5rem;
        

        p{
            font-size: 15px;
            font-weight: 500;
            color: #C6C6C6;
            margin: 1.5rem 0 1.5rem 0;
            margin-bottom: 2rem;
        }
        h3{
            font-size: 48px;
            font-weight: light;
            line-height: 75px;
        }
    }
    .Col-img{
        background-image: url(${woman});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

    }

    @media only screen and (max-width: 768px) {
       .Col-img{
           display: none;
       }
       .Col{
            padding: 2rem;
           width: 100%;

           h3{
            font-size: 30px;
            line-height: 50px;
           }
       }

       
`;

export default AboutStyled;