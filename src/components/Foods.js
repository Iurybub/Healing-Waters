import React from 'react';
import wave from '../static/sea@2x.png';
import Button from '../styles/Button';
import lotus from '../static/lotus.png';
import FoodsStyle from '../styles/FoodsStyle';
import foods from '../static/foods.png'

const Foods = () => {
    return (
        <FoodsStyle>
           <img src={lotus} height="45px" alt="Lotus flower"/>
           <p>OUR PROGRAMS</p>
           <h3>Embracing Body And Mind.</h3>
           <img src={wave} alt="wave"/>
           <p>
               We do not use meat, dairy, salt and sugar in our dishes. Only organic vegetables and fruits with a variety of spices. <br/>
            Nourishment depends on our nutritionist’s appointment . We can discuss this before your arrival at our center.</p>
            <img src={foods} alt="Bowls of greens" class="foodsimg"/>
            <Button>Learn more</Button>
        </FoodsStyle>
    )
}

export default Foods;
