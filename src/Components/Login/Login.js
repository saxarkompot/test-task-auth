import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyle.css';

function Login(props) {
   return (
      <div className='Form'>
         <form>
            <label>
               <input type="email" className="form-control" placeholder="User name" />
            </label>
            <label>
               <input type="password" className="form-control" placeholder="Password" />
            </label>
            <button type="submit" className="btn btn-primary">Sign in</button>
         </form>
         <p className="BackLink"><Link to="/registration">Sign up</Link> if you don't have an account yet.</p>
      </div >
   )
}

export default Login;
