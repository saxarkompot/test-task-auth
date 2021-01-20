import React from 'react';
import { Link } from 'react-router-dom';
import '../FormStyle.css';

function Registration(props) {
   return (
      <div className='Form'>
         <form>
            <input type="text" className="form-control" placeholder="User name" />
            <input type="password" className="form-control" placeholder="Password" />
            <button type="submit" className="btn btn-primary">Sign up</button>
            <p className="BackLink"><Link to="/login">Already have an account?</Link></p>
         </form>
      </div >
   )
}

export default Registration;
