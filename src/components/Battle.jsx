import '../mycss/Battle.css';
import { useEffect } from "react";
//import {useState} from 'react';


const Battle = ({hamsters, getAllHamsters}) => {

	useEffect(() => {
		if (!hamsters) {getAllHamsters();}
	}, [getAllHamsters, hamsters])

	let hamsterWarriors=[];


	//let hamsterCards=null;

	let hamsterShow=null;

	if (hamsters != null) {
		console.log('hamsters have been fetched. ', hamsters);

		//hämta hamster 1 & 2
		let randomNumber=Math.floor(Math.random() * hamsters.length);
		console.log(hamsters[randomNumber]);
		hamsterWarriors.push(hamsters[randomNumber]);

		let newHamsters=hamsters.filter((person) => person !== hamsters[randomNumber]);
		randomNumber=Math.floor(Math.random() * newHamsters.length);

		console.log(newHamsters[randomNumber]);
		hamsterWarriors.push(newHamsters[randomNumber]);

		//Nu har vi två tävlande som inte kan vara samma:
		console.log(hamsterWarriors);

		hamsterShow = hamsterWarriors.map((hamster, index) => (
				<div key={hamster.id}>
					<h1>{hamster.name}</h1>
					<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
					{(index === 0) ? (<div className='versus'>VS</div>) : ''}
				</div>
		));
			
	}
	

	return(
		<section>

			<p>
			Planen är: två statiska objekt i state array
			visa upp dessa som klickbara bilder.
			state för winner.
			PUT winner/loser, POST match, clear hamsters.</p>

			<p>
			Visa två slumpade hamstrar. Låt användaren välja den sötaste. Visa resultatet och initiera nästa match.
			</p>

			<p>
			När battle-vyn visas ska du slumpa två hamstrar, som visas för användaren. Användaren ska klicka för att rösta på den sötaste. Man ska kunna se bilderna och information om varje hamster - men inte hur många vinster/förluster hamstern har. (Det kan påverka hur man röstar!)

När användaren klickar ska båda hamster-objekten uppdateras: vinnaren får +1 vinst och förloraren +1 förlust. Nu ska du visa hur många vinster och förluster respektive hamster har. Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar.

Tänk på att uppdatera alla dokument i databasen där vinst och förlust lagras.
			</p>

			<div className='battlewrapper'>
				{hamsterShow}
			</div>
			

		</section>
	)

}


export default Battle;