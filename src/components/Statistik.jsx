import '../mycss/Gallery.css';
import { useEffect } from "react";

const imgChecker = require('../imgchecker.js');


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
						<img src={imgChecker(hamster.imgName)} alt={hamster.imgName} className='nohover' />
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
						<img src={imgChecker(hamster.imgName)} alt={hamster.imgName} className='nohover' />
						<h1>Antal förluster: {hamster.defeats}</h1>
				</div>
			</article>
		));
	}

	return(
		<section>
			<h1 className="mainheader">Statistik:</h1>
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