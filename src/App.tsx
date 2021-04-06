import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from './pages/Login';
import NavMenu from './components/navigation';
import Projects from './pages/Projects';
import Meetings from './pages/Meetings';
import Rooms from './pages/Rooms';
import Users from './pages/Users';

function App() {
  return (
    <BrowserRouter >
      <NavMenu />
      <Switch>

        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/meetings">
          <Meetings />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/users" component={Users}>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;






/*

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
