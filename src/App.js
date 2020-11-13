import React from 'react'
import Header from './Header'
import "./App.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Login from './Login';

function App() {
    return (
        <div className ="app">
          <Router>
          <Header />
            <Switch>
         
            <Route exact path = "/">
               <h1>Hello Tomiwa</h1>
               </Route>
               <Route path = "/sign-in">
               <Login />
               </Route>
            
            </Switch>
          </Router>          
        </div>
    )
}

export default App