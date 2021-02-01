import styled from 'styled-components'
import img1 from '../static/Gallery/img1.png'
import img2 from '../static/Gallery/img2.png'
import img3 from '../static/Gallery/img3.png'
import img4 from '../static/Gallery/img4.png'

const GalleryStyle = styled.div`
    min-height: 60vh;
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .text-holder{
        width: 70%;
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
            font-size: 48px;
            color: #545454;
            font-weight: 400;
        }
    }
    .grid-container {
    height: 100%;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
    grid-template-areas:
        "img1 img1 img1 img2"
        "img3 img4 img4 img4";
    }
    .grid-setting{
        height: 420px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .img1 { grid-area: img1; background-image: url(${img1});}
    .img2 { grid-area: img2; background-image: url(${img2});}
    .img3 { grid-area: img3; background-image: url(${img4});}
    .img4 { grid-area: img4; background-image: url(${img3});}

    @media only screen and (max-width: 768px) {
        .text-holder{
            width: 90%;
            p{
                font-size: 15px;
                font-weight: 500;
                color: #C6C6C6;
                margin: 1.5rem 0 1.5rem 0;
                margin-bottom: 2rem;
            }
            h3{
                font-size: 30px;
                font-weight: light;
                line-height: 75px;
            }
            h4{
                padding-bottom: 2rem;
                font-size: 48px;
                color: #545454;
                font-weight: 400;
            }
        }
        .grid-container {
            height: 100%;
            width: 90%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px;
            grid-template-areas:
                "img1 img1 img2 img2"
                "img3 img3 img4 img4";
            }
            
            .grid-setting{
                height: 200px;
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
            }
            .img1 { grid-area: img1; background-image: url(${img1});}
            .img2 { grid-area: img2; background-image: url(${img2});}
            .img3 { grid-area: img3; background-image: url(${img4});}
            .img4 { grid-area: img4; background-image: url(${img3});}
    }
    `;

    

export default GalleryStyle;