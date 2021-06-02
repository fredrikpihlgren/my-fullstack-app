import '../mycss/Modal.css';

const Modal = ({hamsterSelected: {id, name, imgName, age, favFood, loves, games, wins, defeats}, hide}) => {

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
					Förutom G-nivån ska man kunna välja en hamster, och se vilka den har besegrat. (/matchWinners)
					</section>
					

				</main>
  			</div>
		</div>
	)

}


export default Modal;