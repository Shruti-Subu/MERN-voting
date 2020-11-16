import React from 'react';
import {Provider} from 'react-redux';
//import api from '../services/api';
import {store} from '../store';
import { addError,  setCurrentUser ,setToken} from '../store/actions';
import decode from 'jwt-decode';

import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage';

if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
      store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));

  }catch(err){
      store.dispatch(setCurrentUser({}));
      store.dispatch(addError(err));
  }
}

const App=()=><Provider store={store}>
    <Auth authType={'login'} />
    <ErrorMessage />
</Provider>



export default App;