import React from 'react';
import { Route, Link } from 'react-router-dom';

import './Auth.css';
import Login from '../Components/Login/Login';
import Registration from '../Components/Registration/Registration';
import Cv from '../Components/Cv/Cv';
import { AuthContext } from '../context/AuthContext';
import PrivateRoute from '../PrivateRoute';


function Auth(props) {
   return (
      <AuthContext.Provider value={false}>
         <div className='Auth'>
            <header>
               <nav>
                  <ul>
                     <li><Link to='/login'>Login</Link></li>
                     <li><Link to='/registration'>Registration</Link></li>
                     <li><Link to='/cv'>Cv</Link></li>
                  </ul>
               </nav>
            </header>
            <Route path='/login' exact component={Login} />
            <Route path='/registration' component={Registration} />
            <PrivateRoute path='/cv' component={Cv} />
         </div>
      </AuthContext.Provider>
   )

}

export default Auth;