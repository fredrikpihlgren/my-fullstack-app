import '../mycss/Gallery.css';
import { useEffect } from "react";
import Deleter from './Deleter';

const imgChecker = require('../imgchecker.js');


const Historik = ({getMatches, matches, hamsters, getAllHamsters, killMatch}) => {

	useEffect(() => {
		if (!matches) {getMatches();}
	}, [getMatches, matches])

	useEffect(() => {
		if (!hamsters && matches) {getAllHamsters();}
	}, [getAllHamsters, hamsters, matches])


	let matchCards=null;

	//let found=hamsters.find((person) => person === match.winnerId);

	function displayHamster(hamster, type) {
		let returnData=(<h1 className='nofound'>Hamster has been deleted.</h1>);
		if (hamster) {returnData=(<div><h1 className='rubrikhistory'>{hamster.name}</h1><img src={imgChecker(hamster.imgName)} className='thumbnailmini' alt={hamster.name}/><div>{type}</div></div>);}
		return returnData;
	}

	if (matches != null && hamsters != null) {
		matchCards = matches.map(match => (
			<article className='bgcard tallcard' key={match.id}>
				<div className='neutralcard'>
						{displayHamster(hamsters.find((hamster) => hamster.id === match.winnerId), 'Vinnare')}
						
						{/*<p>Winner id: {match.winnerId}</p>*/}
						<h1 className='vs'>VS</h1>
						{displayHamster(hamsters.find((hamster) => hamster.id === match.loserId), 'Förlorare')}
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
			

			<div>
				<h1 className="mainheader">Match-historik:</h1>
				<section className='cardwrapper wrapshow'>
					{matchCards}
				</section>
			</div>
		</section>
	)

}


export default Historik;