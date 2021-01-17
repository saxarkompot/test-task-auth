import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Auth.css';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import Cv from '../Components/Cv/Cv';


class Auth extends Component {

   render() {
      return (
         <div className='Auth'>
            <header>
               <nav>
                  <ul>
                     <li><Link to='/' exact>Login</Link></li>
                     <li><Link to='/registration'>Registration</Link></li>
                     <li><Link to='/cv'>Cv</Link></li>
                  </ul>
               </nav>
            </header>
            <Route path='/' exact component={Login} />
            <Route path='/registration' component={Registration} />
            <Route path='/cv' exact component={Cv} />
         </div>
      )
   }
}

export default Auth;