import React from 'react';
import Logo from '../images/Orange QS.png'

export default function Navbar() {
  return (
      <>
          <div className="navbar">
              <div className="left">
                  <i className='fa fa-bars side-bar-btn'></i>
                  <div className="logo">
                      <img src={Logo} alt="" />
                      <p className='logo-text'>QuickStock</p>
                  </div>
              </div>

              <div className="right">
                  <p className="name">Amaan Majeed</p>
                  <button className='btn btn-primary'>Login</button>
              </div>
        </div>
      </>
  );
}
