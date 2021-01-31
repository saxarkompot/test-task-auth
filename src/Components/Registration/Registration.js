import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classes from '../FormStyle.module.css';
import UserProvider from "../../providers/userProvider";
import AuthProvider from "../../providers/authProvider";

const succesfullyRegistered = 'You registered successfully!';

function Registration(props) {
   const [isRegistered, setRegistered] = useState(false);
   const [isError, setIsError] = useState(false);
   const [userName, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   function setUser() {
      try {
         const registResult = new UserProvider().addUser(userName, password);
         setRegistered(registResult);
         setIsError(!registResult);
         setErrorMessage('');
      }
      catch (e) {
         setIsError(true);
         setErrorMessage(e.message);
      }
   }

   if (isRegistered) {
      //console.log(succesfullyRegistered);
      return <Redirect to="/" />;
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
            className="btn btn-primary"
            onClick={setUser}>
            Sign on
            </button>
         <p className={classes.BackLink}><Link to="/">Already have an account?</Link></p>
         {isError && errorMessage}
      </div >
   )
}

export default Registration;
