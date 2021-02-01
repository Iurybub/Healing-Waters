import styled from 'styled-components';

const CallUsNow = styled.div`
    width: 100%;
    color: white;
    font-size: 17px;
    background-color: #3DC2E8;
    font-weight: lighter;
    text-align: center;
    p{
        display: inline;
        padding: 1rem;
    }
    span{
        font-weight: 600;
        display: inline;
        padding: 1rem;
    }

    @media only screen and (max-width: 700px) {
        p{
            display: none;
        }
        span{
            font-weight: 600;
            display: inline;
        }
      }
`

export default CallUsNow;