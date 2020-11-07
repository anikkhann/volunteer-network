import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import Registration from './Components/Registration/Registration';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Event from './Components/Event/Event';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
    name: '',
    email: '',
   
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
          
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/registration/:volunteerId">
              <Registration></Registration>
            </PrivateRoute>

            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

           <Route path="*">
              <Home></Home>
            </Route>
           
          </Switch>
          
      </Router>

      </UserContext.Provider>
  );
}

export default App;
