import { useEffect } from "react";
import {useState} from 'react';
import '../mycss/Gallery.css';
import Deleter from './Deleter';
import Modal from './Modal';
import PostForm from './PostForm';


//{result: {name, age}}, props ersätts med måsvingar.

//checkHamstersExists,

const Gallery = ({hamsters, getAllHamsters, killHamster, postHamster}) => {


	const [allHamsters, setAllHamsters] = useState('Fetching hamsters from API');

	const [displayModal, setDisplayModal] = useState(false);
	const [hamsterSelected, setHamsterSelected] = useState(null);

	function hideShowModal(param) {
		setDisplayModal(!displayModal);
		setHamsterSelected(param);
		console.log(param);
	}


	useEffect(() => {

		function hideShowModal(param) {
			setDisplayModal(displayModal => !displayModal)
			setHamsterSelected(param);
			console.log(param);
		}
		
		if (hamsters != null) { //prop.
			//console.log(prop.result);
			const hamsterCards = hamsters.map(hamster => ( //prop.
				<article className='bgcard' key={hamster.id}>
					<div className='hamstercard'>
						<div className='clickarea' onClick={() => hideShowModal(hamster)}>
							<h1>{hamster.name}</h1>
							{/*<p>{hamster.imgName}</p>*/}
							<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
						</div>
						<Deleter name={hamster.name} id={hamster.id} killHamster={killHamster}/>
					</div>
				</article>
			));
			setAllHamsters(hamsterCards);
		}
		else {
			getAllHamsters();
			//checkHamstersExists(true); //prop.
		}
	}, [hamsters]) //prop.



	
	//console.log(prop.result[0].name);
	

	return (
		<section>
			<section className='cardwrapper'>
				{allHamsters}
			</section>

			<PostForm postHamster={postHamster}/>

			{displayModal ? <Modal hamsterSelected={hamsterSelected} hide={hideShowModal}/> : null}
			


		{/*
		{hamsters ? hamsters.map(hamster => (
			<div key={hamster.id}>
				Hamster with name {hamster.name} soon to be displayed here.
			</div>
		))
		: 'Fetching hamsters from API'}
		*/}
		</section>
	)
}

export default Gallery;