import React from 'react'
import wave from '../static/sea@2x.png'
import HeaderStyle from '../styles/HeaderStyle';
import Button from '../styles/Button';


const Header = () => {
    return (
        <section className="header">
               <HeaderStyle>
                <div className="row d-flex justify-content-around w-75">
                        <div className="col-lg-12 header">
                            <h1>
                                Body, Mind &amp; <br/> Spirit Detox.
                            </h1>
                            <img src={wave} alt="wave"/>
                            <h3>
                                At Healing Waters, we offer a holistic healing <br/> program that promotes the healing of your body, <br/> mind and spirit.
                            </h3>
                            <h2>
                                At Healing Waters, we offer a holistic healing  program that promotes <br/> the healing of your body, mind and spirit.
                            </h2>
                            <Button>Learn more</Button>
                        </div>                       
                    </div>
               </HeaderStyle>
        </section>
    )
}

export default Header
