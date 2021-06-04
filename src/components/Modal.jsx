
import '../mycss/Modal.css';
//import {useState} from 'react';
import { useEffect } from "react";

const imgChecker = require('../imgchecker.js');

const Modal = ({hamsterSelected: {id, name, imgName, age, favFood, loves, games, wins, defeats}, hide, getMatchWinners, matchWinners, hamsters, getAllHamsters}) => {

	useEffect(() => {
		if (!matchWinners) {getMatchWinners(id);}
	}, [getMatchWinners, matchWinners, id])

	useEffect(() => {
		if (!hamsters && matchWinners) {getAllHamsters();}
	}, [getAllHamsters, hamsters, matchWinners])

	function displayHamster(hamster) {
		let returnData=(<h1 className='nofound'>Hamster has been deleted.</h1>);
		if (hamster) {returnData=(<div><h1 className='rubrikhistory'>{hamster.name}</h1><img src={imgChecker(hamster.imgName)} className='thumbnailmodal' alt={hamster.name}/></div>);}
		return returnData;
	}

	let winnerCards=null;

	if (matchWinners != null && hamsters != null) {
		winnerCards = matchWinners.map(match => (
			<article className='bgcard' key={match.id}>
				<div className='neutralcard'>
						{displayHamster(hamsters.find((hamster) => hamster.id === match.loserId))}
						{/*
						<h1>{hamster.name}</h1>
						<img src={imgChecker(hamster.imgName)} alt={hamster.imgName} className='nohover' />
						<h1>Antal vinster: {hamster.wins}</h1>
						*/}
				</div>
			</article>
		));
	}



	return(
		<div className='modal'>
			<div className='modalcontent'>
    			<nav className='close' onClick={hide}>&times;</nav>
				<main className='modalwrapper'>
					<section className='modalblock'>
						<h1>{name}</h1>
						<img src={imgChecker(imgName)} alt={name} className='hamsterimg'/>
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
					<p>Besegrade hamstrar:</p>
					<div>
						{winnerCards}
					{/*matchWinnersDisplay*/}
				
					</div>
					
					</section>
					

				</main>
  			</div>
		</div>
	)

}


export default Modal;