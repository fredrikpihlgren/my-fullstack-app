import '../mycss/Battle.css';
import { useEffect } from "react";
import {useState} from 'react';

const imgChecker = require('../imgchecker.js');


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
		//console.log(hamsters[randomNumber]);
		hamsterWarriors.push(hamsters[randomNumber]);

		let newHamsters=hamsters.filter((person) => person !== hamsters[randomNumber]);
		randomNumber=Math.floor(Math.random() * newHamsters.length);

		//console.log(newHamsters[randomNumber]);
		hamsterWarriors.push(newHamsters[randomNumber]);

		//Nu har vi två tävlande som inte kan vara samma:
		//console.log(hamsterWarriors);

		function nextProgress(warriordata, num) {
			//console.log('Winner is '+warriordata.name+', med klicknummer: '+num);
			setWinner(warriordata);
			let loserNum=0;
			if (num === loserNum) {loserNum=1;}
			//console.log('winner klicknum is '+num+', loser klicknum is '+loserNum);
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
		}

		function resetgame() {
			setBattleProgress(0);
		}

		let displayWarrior = (warriordata, num) => {return (
			<div className='battlecard'>
				<h1>{warriordata.name}</h1>
				<img
				src={imgChecker(warriordata.imgName)}
				alt={warriordata.imgName} className='thumbnail'
				onClick={() => nextProgress(warriordata, num)}
				/>
			</div>
		)}

		if (battleProgress === 0) {
			hamsterShow = (
				<div className='battlewrapper'>
					<h1>Klicka på den sötaste hamstern</h1>
					{displayWarrior(hamsterWarriors[0], 0)}
						<div className='versus'>VS</div>
					{displayWarrior(hamsterWarriors[1], 1)}
				</div>
			);
		}
		else {
			hamsterShow = (
				<div className='battlewrapper victory'>
					
					<h1>VINNARE!</h1>
					
					<h1>{winner.name}</h1>
					<img
					src={imgChecker(winner.imgName)}
					alt={winner.imgName} className='thumbnailwinner'
					/>
					<p>Vinster: {winner.wins+1} / Förluster: {winner.defeats}</p>
					<button onClick={() => resetgame()}>Nästa match</button>

				</div>
			);
		}
			
	}
	

	return(
		<section>
			<h1 className="mainheader">Tävla:</h1>
			<article>
				{hamsterShow}
			</article>
			

		</section>
	)

}


export default Battle;