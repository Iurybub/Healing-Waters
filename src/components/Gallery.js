import React from 'react'
import GalleryStyle from '../styles/GalleryStyle';
const Gallery = () => {
    return (
        <GalleryStyle>
            <div className="text-holder">
                <p>Gallery</p>
                <h4>Your happy place</h4>
            </div>
            <div class="grid-container">
                <div class="img1 grid-setting"></div>
                <div class="img2 grid-setting"></div>
                <div class="img3 grid-setting"></div>
                <div class="img4 grid-setting"></div>
            </div>
        </GalleryStyle>
    )
}

export default Gallery
