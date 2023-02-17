import SignUp from "./Components/SignUp";
import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import LogIn from "./Components/Login";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Inbox from "./Components/Inbox";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/inbox">
          <Inbox />
        </Route>
      </Switch>
    </>
  );
}

export default App;
