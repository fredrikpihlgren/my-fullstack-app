import { useEffect } from "react";
import {useState} from 'react';
import '../mycss/Gallery.css';
import Deleter from './Deleter';


//{result: {name, age}}, props ersätts med måsvingar.

const Gallery = (prop) => {

	/*
	const [hamsters, setHamsters] = useState('');

	useEffect(() => {
		async function get() {
			const response = await fetch('/hamsters', { method: 'GET'});
			const data = await response.json();
			setHamsters(data);
		}
		get();
	}, [])
	*/

	const [allHamsters, setAllHamsters] = useState('Fetching hamsters from API');

	/*
	if (prop.result != null) {
		console.log(prop.result);

		const hamsterCards = prop.result.map(hamster => (
			<div key={hamster.id}>
				Hamster with name {hamster.name} soon to be displayed here.
			</div>
		))

	}
	*/

	useEffect(() => {
		if (prop.result != null) {
			//console.log(prop.result);
			const hamsterCards = prop.result.map(hamster => (
				<div className='bgcard' key={hamster.id}>
					<div className='hamsterCard'>
						<h1>{hamster.name}</h1>
						<p>{hamster.imgName}</p>
						<img src={` /img/${hamster.imgName} `} alt={hamster.imgName} className='thumbnail' />
						<Deleter/>
					</div>
				</div>
			));
			setAllHamsters(hamsterCards);
		}
	}, [prop.result])


	useEffect(() => {
		if (prop.result === null) {
			prop.checkHamstersExists(true);
		}
	}, [])

	//console.log(prop.result[0].name);
	
	

	return (
		<main>
		<p>Gallery component added successfully.</p>
		<section className='cardWrapper'>
			{allHamsters}
		</section>

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