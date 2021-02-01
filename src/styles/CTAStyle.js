import styled from 'styled-components';
import CTAimg from '../static/CTAimg2.png'

const CTAStyle = styled.div`
    padding: 5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(${CTAimg});
    background-position: center center;
    background-size: cover;

    h4{
        font-size: 60px;
        font-weight: 300;
        color: white;
        margin: 3rem 0 3rem 0;
    }
    @media only screen and (max-width: 992px) {
        h4{
            font-size: 30px;
            text-align: center;
            font-weight: 300;
            color: white;
            margin: 3rem 0 3rem 0;
        }
    }

    @media only screen and (max-width: 768px) {
       
    
    }
    .react-datepicker-wrapper{
        display: block;
        width: 100%;
    }
    .react-datepicker__input-container{
        border: none;
    }
    .react-datepicker__input-container input {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .25rem;
}
.btn-3 {
    background: #e3403a;
    border: none;
    font-weight: 900;
    letter-spacing: 1px;
    transition: all 150ms linear;
    background-color: #3DC2E8;
    padding: 1rem;
    color: white;   
    border-radius: 2px;
    margin-top: 2rem;
    text-decoration: none !important;
    font-size: 18px;
    font-weight: 500;
}
`;

export default CTAStyle;