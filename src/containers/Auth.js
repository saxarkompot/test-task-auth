import React, { Component } from 'react';
import './Auth.css';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import Cv from '../Components/Cv/Cv';


class Auth extends Component {

   render() {
      return (
         <div className='Auth'>
            <Login />
            <Registration />
            <Cv />
         </div>
      )
   }
}

export default Auth;