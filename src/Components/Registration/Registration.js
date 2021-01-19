import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyle.css';

function Registration(props) {
   return (
      <div className='Form'>
         <form>
            <label>
               <input type="text" className="form-control" placeholder="User name" />
            </label>
            <label>
               <input type="password" className="form-control" placeholder="Password" />
            </label>
            <label>
               <input type="password" className="form-control" placeholder="Confirm password" />
            </label>
            <button type="submit" className="btn btn-primary">Sign up</button>
            <p className="BackLink"><Link to="/login">Already have an account?</Link></p>
         </form>
      </div >
   )
}

export default Registration;
