import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Inicio from './paginas/inicio/inicio';
import About from './paginas/about/about';

function App() {
  return (
    <>
    <Inicio />

    <Router>
      <Switch>
        <Route exact path="cvJeyson/about_me" component={About}/>
      </Switch>
    </Router>
    </>

  );
}

export default App;
