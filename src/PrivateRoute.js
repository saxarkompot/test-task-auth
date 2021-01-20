import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthProvider from "./providers/authProvider";


function PrivateRoute({ component: Component, ...rest }) {
   const isAuthenticated = AuthProvider.getCurrentUser();

   return (
      <Route {...rest} render={props =>
         isAuthenticated ?
            (
               <Component {...props} />
            ) : (
               <Redirect to="/login" />
            )
      }
      />
   );
}

export default PrivateRoute;