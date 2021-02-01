import React from 'react'
import wave from '../static/sea@2x.png'
import Button from '../styles/Button';
import ProgramsStyled from '../styles/Programs';
import lotus from '../static/lotus.png'
 
const Programs = () => {
    return (
        <ProgramsStyled>
           <div className="info">
                <img src={lotus} height="45px" alt="Lotus flower"/>
                <p>OUR PROGRAMS</p>
                <h3>Embracing Body And Mind.</h3>
                <img src={wave} alt="wave"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br/>
                    finibus velit eget consequat iaculis. </p>
                <Button>Learn more</Button>  
           </div>
           <div className="programs-holder">
               <div className="program">
                   <h4>Weekend Package</h4>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur.</p>
                   <a href="y.com">Learn more</a>
               </div>
               <div className="program">
                   <h4>Weekend Package</h4>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, consequatur.</p>
                   <a href="y.com">Learn more</a>
               </div>
           </div>
        </ProgramsStyled>
    )
}

export default Programs


