import styled from 'styled-components';

const Button = styled.a`
    background-color: #3DC2E8;
    padding: 1rem;
    color: white;   
    border-radius: 2px;
    margin-top: 2rem;
    text-decoration: none !important;
    
    font-size: 18px;
    font-weight: 500;

    &:hover{
        color: white;
        cursor: pointer;
    }
`;

export default Button;