import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../FormStyle.css';
import AuthProvider from '../../providers/authProvider';

function Login(props) {
   const [isLoggedIn, setLoggedIn] = useState(false);
   const [isError, setIsError] = useState(false);
   const [userName, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   function setLogin() {
      try {
         const loginResult = AuthProvider.login(userName, password)
         setLoggedIn(loginResult);
         setIsError(!loginResult);
         setErrorMessage('');
      }
      catch (e) {
         setIsError(true);
         setErrorMessage(e.message);
      }
   }

   if (isLoggedIn) {
      return <Redirect to="/cv" />;
   }

   return (
      <div className='Form'>
         <form>
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
         </form>
         <p className="BackLink"><Link to="/registration">Sign up</Link> if you don't have an account yet.</p>
         { isError && (errorMessage || 'The username or password provided were incorrect!')}
      </div >
   )
}

export default Login;
