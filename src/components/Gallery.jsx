import { useEffect } from "react";
import {useState} from 'react';
import '../mycss/Gallery.css';
import Deleter from './Deleter';
import Modal from './Modal';
import PostForm from './PostForm';


//{result: {name, age}}, props ersätts med måsvingar.

const Gallery = ({hamsters, getAllHamsters, killHamster, postHamster}) => {


	const [displayModal, setDisplayModal] = useState(false);
	const [hamsterSelected, setHamsterSelected] = useState(null);

	function hideShowModal(hideshow) {
		setDisplayModal(!displayModal);
		setHamsterSelected(hideshow);
		//console.log(hideshow);
	}


	useEffect(() => {
		if (!hamsters) {getAllHamsters();}
	}, [getAllHamsters, hamsters])


	let hamsterCards=null;

	if (hamsters != null) {
		//console.log(prop.result);
		hamsterCards = hamsters.map(hamster => (
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
	}

	
	//console.log(result[0].name);
	

	return (
		<section>
			<section className='cardwrapper'>
				{hamsterCards}
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