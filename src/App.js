import React from 'react';
import {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {

  const [navActive, setNavActive] = useState(-1);

  const menuOptions = [
    {url: '/', name: 'Startsida'},
    {url: '/battle', name: 'Tävla'},
    {url: '/gallery', name: 'Galleri'},
    {url: '/statistics', name: 'Statistik'},
    {url: '/history', name: 'Historik'}
  ]

  const navOptions = menuOptions.map((param, index) => {
    return (
      <Link key={param.name} to={param.url} onClick={() => setme(index)} className={(navActive === index) ? 'active' : ''}>{param.name}</Link>
    )
  });

  function setme(param) {
    setNavActive(param);
  }
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            {navOptions}
          </nav>
        </header>
        <main>

        före switch
        
        <Switch>
          {/* add props into component via route:
          render={() => <Example prop1={data}/>}
          */}
          <Route path="/history">HISTORIK</Route>
          <Route path="/statistics">STATS MAN!</Route>
          <Route path="/gallery">GALLERI</Route>
          <Route path="/battle">BATTLE TIME!</Route>
          <Route path="/">Välkommen ska du vara, din gris</Route>
        </Switch>
        
        
        efter switch


        </main>
      </div>
    </Router>
  );
}

export default App;
