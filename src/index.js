import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

import firebase from './Firebase/config';
import { FirebaseContext } from './store/FirebaseContext'
ReactDOM.render( 
<Router>       
<FirebaseContext.Provider value={{firebase}}> 
    <App/>
</FirebaseContext.Provider>
</Router> 
, document.getElementById('root'));
