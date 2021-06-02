import React from 'react';
import {useState} from 'react';
//import { useEffect } from "react";
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

  function resetData() {
    setHamsters(null);
  }


  //hämta alla hamstrar
  async function getAllHamsters() {
    console.log('gör en fetch GET/HAMSTERS');
    const response = await fetch('/hamsters', {method: 'GET'});
    const data = await response.json();
    setHamsters(data);
  }

  //Radera hamster:
  async function killHamster(id) {
    console.log('gör en delete på hamster-id: '+id);
    await fetch('/hamsters/'+id, {method: 'DELETE'});
    resetData();
    console.log('hamster med id: '+id+' raderad.');
  }

  //Posta hamster
  async function postHamster(obj) {
    console.log('Posta hamster: ', obj);
    const response = await fetch('/hamsters', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
    });
    console.log(response);
    resetData();
  }

  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            {navOptions}
          </nav>
        </header>
        <main className='mainclass'>

        före switch

        {/*checkHamstersExists={checkHamstersExists}*/}
        
        <Switch>
          {/* add props into component via route:
          render={() => <Example prop1={data}/>}
          */}
          <Route path="/history">HISTORIK</Route>
          <Route path="/statistics">STATS MAN!</Route>
          <Route path="/gallery" render={() => <Gallery hamsters={hamsters} getAllHamsters={getAllHamsters} killHamster={killHamster} postHamster={postHamster}/>}></Route>
          <Route path="/battle">BATTLE TIME!</Route>
          <Route path="/"><StartPage/></Route>
        </Switch>
        
        
        efter switch


        </main>
        <footer>

        </footer>
      </div>
    </Router>
  );
}

export default App;
