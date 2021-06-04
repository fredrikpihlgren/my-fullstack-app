import React from 'react';
import {useState} from 'react';
//import { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Gallery from './components/Gallery';
import StartPage from './components/StartPage';
import Historik from './components/Historik';
import Statistik from './components/Statistik';
import Battle from './components/Battle';

function App() {


  const [navActive, setNavActive] = useState(-1);
  const [matchWinners, setMatchWinners] = useState(null);
  const [hamsters, setHamsters] = useState(null);
  const [winners, setWinners] = useState(null);
  const [losers, setLosers] = useState(null);
  const [matches, setMatches] = useState(null);
  const [resStatus, setResStatus] = useState(200);

  // kod för att visa vilken länk som är aktiv:

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


  function resetData() {
    setHamsters(null);
    setWinners(null);
    setLosers(null);
    setMatches(null);
    setMatchWinners(null);
  }

  function resetMatchWinners() {
    setMatchWinners(null);
  }


  //hämta matchwinners
	async function getMatchWinners(id) {
		//console.log('gör en fetch GET/matchWinners/'+id);
		const response = await fetch('/matchWinners/'+id, {method: 'GET'});
		setResStatus(response.status);
		const data = await response.json();
		setMatchWinners(data);
	}

  //hämta matcher
	async function getMatches() {
		//console.log('gör en fetch GET/matches');
		const response = await fetch('/matches', {method: 'GET'});
		setResStatus(response.status);
		const data = await response.json();
		setMatches(data);
	}

  //hämta winners
	async function getWinners() {
		//console.log('gör en fetch GET/winners');
		const response = await fetch('/winners', {method: 'GET'});
		setResStatus(response.status);
		const data = await response.json();
		setWinners(data);
	}

  //hämta losers
	async function getLosers() {
		//console.log('gör en fetch GET/losers');
		const response = await fetch('/losers', {method: 'GET'});
		setResStatus(response.status);
		const data = await response.json();
		setLosers(data);
	}


  //hämta alla hamstrar
  async function getAllHamsters() {
    //console.log('gör en fetch GET/HAMSTERS');
    const response = await fetch('/hamsters', {method: 'GET'});
    setResStatus(response.status);
    const data = await response.json();
    setHamsters(data);
  }

  //Radera hamster:
  async function killHamster(id) {
    //console.log('gör en delete på hamster-id: '+id);
    const response = await fetch('/hamsters/'+id, {method: 'DELETE'});
    console.log(response);
    resetData();
    //console.log('hamster med id: '+id+' raderad.');
  }

  //Radera match:
  async function killMatch(id) {
    //console.log('gör en delete på match-id: '+id);
    const response = await fetch('/matches/'+id, {method: 'DELETE'});
    console.log(response);
    resetData();
    //console.log('match med id: '+id+' raderad.');
  }

  //Posta hamster
  async function postHamster(obj) {
    //console.log('Posta hamster: ', obj);
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

  
  //Posta match
  async function postMatch(obj) {
    console.log('Posta match: ', obj);
    const response = await fetch('/matches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj)
    });
    console.log(response);
    resetData();
  }

  //Uppdatera hamster
  async function updateHamster(obj) {
    console.log('Uppdatera hamster: ', obj);
    const response = await fetch('/hamsters/'+obj.id, {
    method: 'PUT',
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

          {/* add props into component via route:
          render={() => <Example prop1={data}/>}
          */}


        {
        (resStatus === 500)
        ?
          <p className='showerrormessage'>{'Gick ej att nå servern. Kontakta systemadministratör'}</p>
        :
          <Switch>
            <Route path="/history" render={() => <Historik getMatches={getMatches} matches={matches} hamsters={hamsters} getAllHamsters={getAllHamsters} killMatch={killMatch}/>}></Route>
            <Route path="/statistics" render={() => <Statistik winners={winners} losers={losers} getWinners={getWinners} getLosers={getLosers}/>}></Route>
            <Route path="/gallery" render={() => <Gallery hamsters={hamsters} getAllHamsters={getAllHamsters} killHamster={killHamster} postHamster={postHamster} getMatchWinners={getMatchWinners} matchWinners={matchWinners} resetMatchWinners={resetMatchWinners}/>}></Route>
            <Route path="/battle" render={() => <Battle postMatch={postMatch} updateHamster={updateHamster} hamsters={hamsters} getAllHamsters={getAllHamsters}/>}></Route>
            <Route path="/"><StartPage/></Route>
          </Switch>
        }


        </main>
        <footer className="byline">
          Skapad av Fredrik Pihlgren, projekt IT-högskolan Stockholm, 2021.
        </footer>
      </div>
    </Router>
  );
}

export default App;
