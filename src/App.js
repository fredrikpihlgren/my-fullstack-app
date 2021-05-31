import React from 'react';
import {useState} from 'react';
import { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import StartPage from './components/StartPage';

function App() {

  // kod för att visa vilken länk som är aktiv:

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
      <Link key={param.name} to={param.url} onClick={() => setNavActive(index)} className={(navActive === index) ? 'active' : ''}>{param.name}</Link>
    )
  });

  //Slut kod för att visa vilken länk som är aktiv


  const [hamsters, setHamsters] = useState(null);

  const [loadData, setLoadData] = useState(false);

  
	useEffect(() => {
    if (loadData) {
      async function get() {
        console.log('gör en fetch GET/HAMSTERS');
        const response = await fetch('/hamsters', {method: 'GET'});
        const data = await response.json();
        setHamsters(data);
      }
		  get();
    }
	}, [loadData])



  function checkHamstersExists(param) {
    console.log('loadData is now: ', loadData);
    console.log('hamsters usestate is: ', hamsters);
    //if (hamsters === null) {
      setLoadData(param);
    //}
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
          <Route path="/gallery" render={() => <Gallery checkHamstersExists={checkHamstersExists} result={hamsters}/>}></Route>
          <Route path="/battle">BATTLE TIME!</Route>
          <Route path="/"><StartPage/></Route>
        </Switch>
        
        
        efter switch


        </main>
        <footer>
          yehhaha
        </footer>
      </div>
    </Router>
  );
}

export default App;
