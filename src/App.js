import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Auth from './containers/Auth';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <div className="App">
               <Auth />
            </div>
         </BrowserRouter>
      );
   }
}

export default App;
