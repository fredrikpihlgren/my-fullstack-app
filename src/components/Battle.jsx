import '../mycss/Battle.css';
import { useEffect } from "react";
import {useState} from 'react';


const Battle = ({hamsters, getAllHamsters, postMatch, updateHamster}) => {

	const [battleProgress, setBattleProgress] = useState(0);
	const [winner, setWinner] = useState(null);


	useEffect(() => {
		if (!hamsters) {getAllHamsters();}
	}, [getAllHamsters, hamsters])

	let hamsterWarriors=[];


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

		function nextProgress(warriordata, num) {
			console.log('Winner is '+warriordata.name+', med klicknummer: '+num);
			setWinner(warriordata);
			let loserNum=0;
			if (num === loserNum) {loserNum=1;}
			console.log('winner klicknum is '+num+', loser klicknum is '+loserNum);
			//POSTA ny match
			const matchObj = {
				id: '123',
				loserId: hamsterWarriors[loserNum].id,
				winnerId: warriordata.id
			}
			postMatch(matchObj);

			//UPPDATERA Vinnare
			let addwin=warriordata.wins+1;
			let addgame=warriordata.games+1;
			let hamsterObj = {
				id: warriordata.id,
				games: addgame,
				wins: addwin
			}
			updateHamster(hamsterObj);

			//UPPDATERA Förlorare
			let addloss=hamsterWarriors[loserNum].defeats+1;
			addgame=hamsterWarriors[loserNum].games+1;
			hamsterObj = {
				id: hamsterWarriors[loserNum].id,
				games: addgame,
				defeats: addloss
			}
			updateHamster(hamsterObj);

			setBattleProgress(1);
			
			/*
			if (num === 0) {
				setWinnerLoser([hamsterWarriors[0], hamsterWarriors[1]]);
			}
			else {
				setWinnerLoser([hamsterWarriors[1], hamsterWarriors[0]]);
			}
			console.log('the winner is', winnerLoser[0].name);
			console.log('the loser is', winnerLoser[1].name);
			*/
			//setBattleProgress(1);
		}

		let displayWarrior = (warriordata, num) => {return (
			<div className='battlecard'>
				<h1>{warriordata.name}</h1>
				<img
				src={` /img/${warriordata.imgName} `}
				alt={warriordata.imgName} className='thumbnail'
				onClick={() => nextProgress(warriordata, num)}
				/>
			</div>
		)}

		if (battleProgress === 0) {
			hamsterShow = (
				<div>
					<h1>Klicka på den sötaste hamstern</h1>
					{displayWarrior(hamsterWarriors[0], 0)}
						<div className='versus'>VS</div>
					{displayWarrior(hamsterWarriors[1], 1)}
				</div>
			);
		}
		else {
			hamsterShow = (
				<div>
					<h1>VINNARE!</h1>
					
					<h1>{winner.name}</h1>
					<img
					src={` /img/${winner.imgName} `}
					alt={winner.imgName} className='thumbnailwinner'
					/>
					<button>Nästa match</button>


				</div>
			);
		}
			
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
			

			<article className='battlewrapper'>
				{hamsterShow}
			</article>
			

		</section>
	)

}


export default Battle;