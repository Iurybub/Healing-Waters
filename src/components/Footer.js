import React from 'react'
import logo from '../static/logo@2x.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FooterStyle from '../styles/FooterStyle';
import CallUsNow from '../styles/callnow';

const Footer = () => {
    return (
     <section id="footer">
          <FooterStyle >
            <div className="container">
            <div className="row d-flex justify-content-evenly align-middle">
                <div className="col-lg-4">
                    <img src={logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit.  
                        Neque quae ad facere architecto placeat 
                        inventore eum.</p>
                    </div>
                <div className="col-lg-2 d-flex flex-column">
                    <h5>Useful Links</h5>

                    <a href="y.com">About us</a>
                    <a href="y.com">Contact Us</a>
                    <a href="y.com">Services</a>
                    <a href="y.com">Photo Gallery</a>
                    <a href="y.com">Our Location</a>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                <h5>Useful Links</h5>

                <a href="y.com">About us</a>
                <a href="y.com">Contact Us</a>
                <a href="y.com">Services</a>
                <a href="y.com">Photo Gallery</a>
                <a href="y.com">Our Location</a>
                </div>
                <div className="col-lg-2 d-flex flex-column">
                <h5>Socials</h5>    
                <div> 
                   <a href="instagram.com"> <InstagramIcon className="m-2" /></a>
                   <a href="facebook.com"> <FacebookIcon className="m-2"/></a>
                    <a href="gnail.com"><MailOutlineOutlinedIcon className="m-2"/></a>
                </div>
                
                </div>
            </div>
        </div>
        
      </FooterStyle>
      <CallUsNow>
            <p>Healing Waters 2020-2021 All Rights Reserved</p>
        </CallUsNow>
     </section>
    )
}

export default Footer
