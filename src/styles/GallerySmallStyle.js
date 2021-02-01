import styled from 'styled-components';
import img1 from '../static/GallerySmall/img1.png'
import img2 from '../static/GallerySmall/img2.png'
import img3 from '../static/GallerySmall/img3.png'
import img4 from '../static/GallerySmall/img4.png'
import img5 from '../static/GallerySmall/img5.png'
import img6 from '../static/GallerySmall/img6.png'
import img7 from '../static/GallerySmall/img7.png'
const SmallGallery = styled.div`
    height: 250px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
    "img1 img2 img3 img4 img5 img6 img7";

    .bg-setting{
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

    }
    .img1 { grid-area: img1; background-image: url(${img1})}
    .img2 { grid-area: img2; background-image: url(${img2})}
    .img3 { grid-area: img3; background-image: url(${img3})}
    .img4 { grid-area: img4; background-image: url(${img4})}
    .img5 { grid-area: img5; background-image: url(${img5})}
    .img6 { grid-area: img6; background-image: url(${img6})}
    .img7 { grid-area: img7; background-image: url(${img7})}

    @media only screen and (max-width: 768px) {
        margin-top: 2rem;
        height: 100px;
        width: 100%;
        display: grid;
        grid-template-columns:1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
        "img4 img5 img6 img7";
        .img1, .img2, .img3{
            display: none;
        }
        .img4 { grid-area: img4; background-image: url(${img4})}
        .img5 { grid-area: img5; background-image: url(${img5})}
        .img6 { grid-area: img6; background-image: url(${img6})}
        .img7 { grid-area: img7; background-image: url(${img7})}

    }
`;

export default SmallGallery;