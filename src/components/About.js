import React from 'react'
import wave from '../static/sea@2x.png'
import Button from '../styles/Button';
import AboutStyled from '../styles/AboutStyled';
import lotus from '../static/lotus.png'
const About = () => {
    return (
        <AboutStyled>
            <div className="Row">
                <div className="Col Col-img">
            
                </div>
                <div className="Col">
                    <img src={lotus} height="45px" alt="Lotus flower"/>
                <p>HEALING WATER PROGRAM</p>
                <h3>Your PLace To Discover <br/> Wellness</h3>
                <img src={wave} alt="wave"/>
                <p>Healing Waters therapy – removes toxins and revitalizes the body’s natural <br/>
                    defense systems through a strict routine. Each day is designed to ensure <br/>
                    that your body’s natural rhythm is restored. Whether you are a first-time or <br/>
                    returning guest, we encourage you to find the right balance between <br/>
                    scheduled activities and free-time.</p>
                <Button>Learn more</Button> 
                </div>
            </div>
        </AboutStyled>
    )
}

export default About

