import React from 'react'
import logo from '../static/logo@2x.png';
import CallUsNow from '../styles/callnow';
import phoneI from '../styles/icons';

const Navigation = () => {
    return (
       <section id="nav">
        <CallUsNow>
            <p>Ready to live a healthier and more balanced life?  </p><phoneI></phoneI><span>  Call Now (858) 215-1645</span>
        </CallUsNow>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand mr-5" href="y.com"><img src={logo} height="90" alt="Healing Waters"/></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse w-auto navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-around">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="y.com">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="y.com">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="y.com">Nourishment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="y.com">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="y.com">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-4" href="y.com">Contact us</a>
              </li>
            </ul>
    
          </div>
        </div>
      </nav>

       </section>
    )
}

export default Navigation
