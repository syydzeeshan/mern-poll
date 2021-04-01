import React from 'react';
import {Provider} from 'react-redux';
import decode from 'jwt-decode';
// import { setToken } from '../services/api';


import { store } from '../store';
import {setCurrentUser, addError, setToken} from '../store/actions';
import Auth from '../components/Auth';
import ErrorMessage from '../components/ErrorMessage';

if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));

    } catch(err){
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}



const App = () =>
 <Provider store={store}>
     <div>
  <Auth authType={'login'}/>
  <ErrorMessage />
  </div>
</Provider>




export default App;
