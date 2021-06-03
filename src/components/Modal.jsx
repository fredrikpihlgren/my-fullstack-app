import '../mycss/Modal.css';
//import {useState} from 'react';

const Modal = ({hamsterSelected: {id, name, imgName, age, favFood, loves, games, wins, defeats}, hide}) => {

	/*
	const [matchWinners, setMatchWinners] = useState(null);
	const [getLocker, setGetLocker] = useState(false);
	const [resStatus, setResStatus] = useState(200);
 
    //hämta /matchWinners/:id
    async function getMatchWinners(id) {
    	console.log('gör en fetch GET/matchWinners/'+id);
        const response = await fetch('/matchWinners/'+id, {method: 'GET'});
        setResStatus(response.status);
        const data = await response.json();
        setMatchWinners(data);
    }
    if (!getLocker) {setGetLocker(true);getMatchWinners(id);}
    if (matchWinners) {console.log(matchWinners);}

	console.log('anropar: ', resStatus);

	let matchWinnersDisplay=null;

	if (matchWinners != null) {
		if (resStatus !== 404) {
			matchWinnersDisplay = matchWinners.map(m => (
				<p key={m.id}>
					winnerId: {m.winnerId}
					loserId: {m.loserId}
				</p>
			));
		}
	}
	*/


	return(
		<div className='modal'>
			<div className='modalcontent'>
    			<nav className='close' onClick={hide}>&times;</nav>
				<main className='modalwrapper'>
					<section className='modalblock'>
						<h1>{name}</h1>
						<img src={` /img/${imgName} `} alt={name} className='hamsterimg'/>
					</section>
					<section className='modalblock'>
						
						<div className='infoblock'>Ålder:</div><div className='infoblock'>{age}</div>
						<div className='infoblock'>Favoritmat:</div><div className='infoblock'>{favFood}</div>
						<div className='infoblock'>Älskar:</div><div className='infoblock'>{loves}</div>

						<div className='infoblock'>Spel:</div><div className='infoblock'>{games}</div>
						<div className='infoblock'>Vinster:</div><div className='infoblock'>{wins}</div>
						<div className='infoblock'>Förluster:</div><div className='infoblock'>{defeats}</div>
					</section>
					<section className='modalblock'>
					<p>{id}</p>
					Förutom G-nivån ska man kunna välja en hamster, och se vilka den har besegrat. (/matchWinners/:id)
					<div>
					{/*matchWinnersDisplay*/}
				
					</div>
					
					</section>
					

				</main>
  			</div>
		</div>
	)

}


export default Modal;