import { useEffect } from "react";
import {useState} from 'react';
import '../mycss/Gallery.css';
import Deleter from './Deleter';
//import Modal from './Modal';
import PostForm from './PostForm';


//{result: {name, age}}, props ersätts med måsvingar.

const Gallery = (prop) => {


	const [allHamsters, setAllHamsters] = useState('Fetching hamsters from API');
	const [hamsterDelete, setHamsterDelete] = useState(null);


	useEffect(() => {
		if (prop.result != null) {
			//console.log(prop.result);
			const hamsterCards = prop.result.map(hamster => (
				<div className='bgcard' key={hamster.id}>
					<div className='hamsterCard'>
						<h1>{hamster.name}</h1>
						{/*<p>{hamster.imgName}</p>*/}
						<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
						<Deleter name={hamster.name} id={hamster.id} hamsterIdDelete={hamsterIdDelete}/>
					</div>
				</div>
			));
			setAllHamsters(hamsterCards);
		}
		else {
			prop.checkHamstersExists(true);
		}
	}, [prop.result])


	//Delete selected hamster:

	useEffect(() => {
		if (hamsterDelete != null) {
			async function killHamster() {
				console.log('gör en delete på hamster-id: '+hamsterDelete);
				const response = await fetch('/hamsters/'+hamsterDelete, {method: 'DELETE'});
				//const data = await response.json();
				console.log('hamster med id: '+hamsterDelete+' raderad.');
				hamsterIdDelete(null);
			}
			killHamster();
		}
	}, [hamsterDelete])

	function hamsterIdDelete(param) {
		console.log('radera hamster med id: '+param);
		setHamsterDelete(param);
	}

	//console.log(prop.result[0].name);
	

	return (
		<main>
			<button onClick={() => prop.resetData()}>Hämta om Data:</button>
			<section className='cardWrapper'>
				{allHamsters}
			</section>

			<PostForm/>


		{/*
		{hamsters ? hamsters.map(hamster => (
			<div key={hamster.id}>
				Hamster with name {hamster.name} soon to be displayed here.
			</div>
		))
		: 'Fetching hamsters from API'}
		*/}
		</main>
	)
}

export default Gallery;