import '../mycss/Gallery.css';
import { useEffect } from "react";
import Deleter from './Deleter';


const Historik = ({getMatches, matches, hamsters, getAllHamsters, killMatch}) => {

	useEffect(() => {
		if (!matches) {getMatches();}
	}, [getMatches, matches])

	useEffect(() => {
		if (!hamsters && matches) {getAllHamsters();}
	}, [getAllHamsters, hamsters, matches])


	let matchCards=null;

	//let found=hamsters.find((person) => person === match.winnerId);

	function displayHamster(hamster) {
		let returnData=(<h1 className='nofound'>Hamster has been deleted.</h1>);
		if (hamster) {returnData=(<div><h1 className='rubrikhistory'>{hamster.name}</h1><img src={` /img/${hamster.imgName} `} className='thumbnailmini' alt={hamster.name}/></div>);console.log(hamster);}
		return returnData;
	}

	if (matches != null && hamsters != null) {
		matchCards = matches.map(match => (
			<article className='bgcard tallcard' key={match.id}>
				<div className='neutralcard'>
						{displayHamster(hamsters.find((hamster) => hamster.id === match.winnerId))}
						
						{/*<p>Winner id: {match.winnerId}</p>*/}
						<h1 className='vs'>VS</h1>
						{displayHamster(hamsters.find((hamster) => hamster.id === match.loserId))}
						{<Deleter name='match' id={match.id} killHamster={killMatch}/>}
				</div>
			</article>
		));

		/*
		matchCards = matches.map((m) => {
				const winner = hamsters.find(
				  (hamster) => hamster.id === m.winnerId
				)
				if (!winner) {console.log(winner);}
				
		});
		*/
	}

	console.log(matches);

	return(
		<section>
			<p>Visa resultatet från de senaste matcherna. Ta bort resultat. Visa resultatet från de senaste matcherna: bild och namn för både vinnare och förlorare.</p>

			<p>
				* Planen: GET matches/
				* visa upp datan för att se att det fungerar.
				* Objekt med loser-id + winner-id. 
				* Mappa resultatet.
				* I map, gör find på id för att koppla ihop hamstrar med id.
				* Skapa ta-bort funktion (återanvänd från gallery)
			</p>

			<div>
				<h1>Matcher:</h1>
				<section className='cardwrapper wrapshow'>
					{matchCards}
				</section>
			</div>
		</section>
	)

}


export default Historik;