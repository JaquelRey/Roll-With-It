import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import React from "react";
import 'bulma/css/bulma.min.css';


const Header = () => {
	return (

        <div className='Header'>


    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

          <a class="navbar-item" href="">
          <img src="https://lh3.googleusercontent.com/2q58Kh0WL1b5F_uiSkZMFF7o8ktuRSRLHOgVv6aZD1pQ9kCKuZ7V6lEXZvJ5YP1ud_-YsgY3sBgmZTxMJ1wA_kqrxICQFl2qxPVTgsKitzSKjU5UcV-bWrBYn18sXNcLuara7A0qRuo=w2400" width="112" height="28"/>
          </a>
        
        {/* WHERE LOGO WILL GO*/}
    
   
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Profile
        </a>
  
        <a class="navbar-item">
          Social
        </a>

        <a class="navbar-item">
          Browse
        </a>
  
    
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

     
        </div>

)
};

export default Header;