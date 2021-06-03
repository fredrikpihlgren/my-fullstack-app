import '../mycss/Gallery.css';
import { useEffect } from "react";

const Statistik = ({winners, getWinners, losers, getLosers}) => {


	useEffect(() => {
		if (!winners) {getWinners();}
	}, [getWinners, winners])

	useEffect(() => {
		if (!losers && winners) {getLosers();}
	}, [getLosers, losers, winners])

	
	let winnerCards=null;

	if (winners != null) {
		winnerCards = winners.map(hamster => (
			<article className='bgcard' key={hamster.id}>
				<div className='neutralcard'>
						<h1>{hamster.name}</h1>
						<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
						<h1>Antal vinster: {hamster.wins}</h1>
				</div>
			</article>
		));
	}

	let loserCards=null;

	if (losers != null) {
		loserCards = losers.map(hamster => (
			<article className='bgcard' key={hamster.id}>
				<div className='neutralcard'>
						<h1>{hamster.name}</h1>
						<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
						<h1>Antal förluster: {hamster.defeats}</h1>
				</div>
			</article>
		));
	}

	return(
		<section>
			<div>
				<h1>Vinnare:</h1>
				<section className='cardwrapper wrapshow'>
					{winnerCards}
				</section>
			</div>
			<div>
				<h1>Förlorare:</h1>
				<section className='cardwrapper wrapshow'>
					{loserCards}
				</section>
			</div>

		</section>
	)

}


export default Statistik;