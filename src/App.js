import SignUp from './Components/SignUp';
import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { Switch } from 'react-router-dom';

import LogIn from './Components/Login';

function App() {
 return <Switch>
   <Route exact path='/' >
    <LogIn/>
   </Route>
  <Route path='/signup' >
    <SignUp/>
  </Route>
  <Route path='/login'  >
    <LogIn/>
  </Route>
 </Switch>
}


export default App;
