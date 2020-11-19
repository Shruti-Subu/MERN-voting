import React, { Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {store} from '../store';
import { addError,  setCurrentUser ,setToken} from '../store/actions';
import decode from 'jwt-decode';

import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage';
import RouteViews from './RouteViews';
import Navbar from './Navbar';

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
      store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));

  }catch(err){
      store.dispatch(setCurrentUser({}));
      store.dispatch(addError(err));
  }
}

const App=()=>(
<Provider store={store}>
    <Router>
        <Fragment>
               <Navbar/>
               
                <RouteViews />
        </Fragment>
    </Router>
</Provider>

);

export default App;