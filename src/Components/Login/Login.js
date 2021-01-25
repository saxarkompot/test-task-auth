import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../FormStyle.css';
import AuthProvider from '../../providers/authProvider';

// let errorTiming = (e) => {
//    let interval = setInterval(() => {
//       e++;
//       callback(e);
//    }, 1000);
//    setTimeout(() => {
//       clearInterval(interval);
//    }, 30000);
// };

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
            };
            console.log(errorTime);
            setErrorTime(e => e - 1);
         }, 1000);
      }
      return () => clearInterval(interval);
      // {
      //    if (errorTime <= 0) {
      //       setErrorMessage('');
      //       //console.log(errorTime);
      //       return clearInterval(interval)
      //    }
      // };
      // setTimeout(() => {
      //    return clearInterval(interval);
      //    // }, 120000)
      // }
   }, [errorMessage, errorTime])

   if (isLoggedIn) {
      return <Redirect to="/cv" />;
   }

   return (
      <div className='Form'>
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
            className="btn btn-primary"
            onClick={setLogin}>
            Sign in
            </button>
         <p className="BackLink"><Link to="/registration">Sign up</Link> if you don't have an account yet.</p>
         { isError && (errorMessage
            ?
            `You exceeded number of retries. Try again in ${Math.trunc(errorTime / 60)} min ${errorTime % 60} sec`
            :
            'The username or password provided were incorrect!')}
      </div >
   )
}

export default Login;
