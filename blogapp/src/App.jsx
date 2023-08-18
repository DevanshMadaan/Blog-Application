import React from 'react';
import Sidebar from './Components/sidebar/Sidebar';
import Navbar from './Components/Headerbar/Navbar';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Write from './Components/write/Write';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './homebody/Home';
function App() {
  const user=true;
  return (
    <div className="App">
   <Router>
      <Navbar />
      <Sidebar/>
      <Switch>
        <Route exact path="/">
          {user?<Home/>:<Login/>}
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/create">
          {user ?
          <Write/>:<Login/>}
        </Route>
        </Switch>

        </Router>
    </div>
  );
}

export default App;
