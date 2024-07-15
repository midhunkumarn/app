import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import logo from '../logo.png';
import './Login.css';

export default function Login(){
    return(
        <div className='Student'>
    <img src={logo} className="App-logo" alt="logo" />
              <h1 className='Loginh1'>
                One Credit Course Excemption
                        Portal
              </h1>
              <p>
                Login with bitsathy
                gmail
              </p>
              <span>
             <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
             </span>
    </div>
    );
}
