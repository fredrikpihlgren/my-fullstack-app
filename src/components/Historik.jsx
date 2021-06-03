import '../mycss/Gallery.css';
import { useEffect } from "react";


const Historik = ({getMatches, matches, hamsters, getAllHamsters}) => {

	useEffect(() => {
		if (!matches) {getMatches();}
	}, [getMatches, matches])

	useEffect(() => {
		if (!hamsters && matches) {getAllHamsters();}
	}, [getAllHamsters, hamsters, matches])


	let matchCards=null;

	if (matches != null && hamsters != null) {
		matchCards = matches.map(match => (
			<article className='bgcard' key={match.id}>
				<div className='neutralcard'>
						{/*hamsters.find((hamster) => hamster.id === match.winnerId)*/}
						
						<p>Winner id: {match.winnerId}</p>
						<h1>VS</h1>
						<p>Loser id: {match.loserId}</p>
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