import styled from 'styled-components';

const FoodsStyle = styled.div`
    min-height: 70vh;
    padding: 3rem 0 3rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f6f6f6;
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
    h4{
        padding-bottom: 2rem;
        font-size: 22px;
        color: #545454;
        font-weight: 400;
    }
    .foodsimg{
        width:100%;
    }

    @media only screen and (max-width: 992px) {
        padding: 6rem 6rem 6rem 6rem;
        text-align: center;
       .foodsimg{
           width: 100%;
       }

`;

export default FoodsStyle;