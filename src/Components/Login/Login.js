import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classes from '../FormStyle.module.css';
import AuthProvider from '../../providers/authProvider';

function Login(props) {
   const [isLoggedIn, setLoggedIn] = useState(false);
   const [isError, setIsError] = useState(false);
   const [userName, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState('');
   const [errorTime, setErrorTime] = useState(10);

   function setLogin() {
      try {
         const loginResult = AuthProvider.login(userName, password)
         setLoggedIn(loginResult);
         setIsError(!loginResult);
         setErrorMessage('');
      }
      catch (e) {
         setIsError(true);
         setErrorMessage(e);
      }
   }

   useEffect((interval) => {
      if (errorMessage) {
         interval = setInterval(() => {
            if (errorTime === 0) {
               setErrorMessage('')
               setIsError(false);
               setErrorTime(10);
            };
            console.log(errorTime);
            setErrorTime(e => e - 1);
         }, 1000);
      }
      return () => clearInterval(interval);
   }, [errorMessage, errorTime])

   if (isLoggedIn) {
      return <Redirect to="/cv" />;
   }

   return (
      <div className={classes.Form}>
         <input
            type="username"
            value={userName}
            className="form-control"
            placeholder="User name"
            onChange={e => {
               setUsername(e.target.value)
            }}
         />
         <input
            type="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={e => {
               setPassword(e.target.value)
            }}
         />
         <button
            type="submit"
            className={!errorMessage ? "btn btn-primary" : classes.Disabled}
            onClick={setLogin}>
            Sign in
            </button>
         <p className={classes.BackLink}><Link to="/registration">Sign up</Link> if you don't have an account yet.</p>
         { isError && (errorMessage
            ?
            <div>
               You exceeded number of retries. Try again in <b className={classes.Error}>{Math.trunc(errorTime / 60)}</b> min <b className={classes.Error}> {errorTime % 60}</b> sec
            </div >
            :
            <p>'The username or password provided were incorrect!'</p>)
         }
      </div >
   )
}

export default Login;
