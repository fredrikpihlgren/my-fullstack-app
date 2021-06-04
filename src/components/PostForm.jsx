import { useState } from 'react';
import '../mycss/Form.css';

const PostForm = ({postHamster}) => {

	let hamsterimages=[];
	for (let i=1;i<=40;i++) {
		hamsterimages.push('hamster-'+i+'.jpg');
	}
	const hamsterimagelist = hamsterimages;

	const [myName, setName] = useState('');
	const [errorName, setErrorName] = useState('');

	const [myAge, setAge] = useState(0);
	const [errorAge, setErrorAge] = useState('');

	const [myLoves, setLoves] = useState('');
	const [errorLoves, setErrorLoves] = useState('');

	const [myFood, setFood] = useState('');
	const [errorFood, setErrorFood] = useState('');

	const [myUrl, setUrl] = useState('');
	const [errorUrl, setErrorUrl] = useState('');

	const [selectedImage, setSelectedImage] = useState('hamster-1.jpg');



	function createObj(name, age, loves, favFood, imgName) {

		const hamsterObj = {
			name,
			age,
			loves,
			favFood,
			imgName,
			id: '123',
			games: 0,
			wins: 0,
			defeats: 0
		}
		postHamster(hamsterObj);

	}

	function sanitize(string) {
		const map = {
			'&': '',
			'<': '',
			'>': '',
			'"': '',
			"'": '',
			"/": '',
		};
		const reg = /[&<>"'/]/ig;
		if (string.length > 0) {return string.replace(reg, (match)=>(map[match]));}
		return string;
	}

	function validate(name, age, loves, food, image, myUrl) {

		setErrorName('');
		setErrorAge('');
		setErrorLoves('');
		setErrorFood('');
		setErrorUrl('');

		//add sanitizer:
		name=sanitize(name);
		age=sanitize(age);
		loves=sanitize(loves);
		food=sanitize(food);


		let post=true;
		if (name.length <= 0) {setErrorName('Vänligen skriv ditt namn');post=false;}
		if (typeof(name) !== "string") {setErrorName('Namn måste vara en sträng');post=false;}

		if (age.length <= 0) {setErrorAge('Vänligen ange ålder');post=false;}
		else {
			age = parseInt(age);
			if (typeof(age) !== "number") {setErrorAge('Måste vara ett tal');post=false;}
		}
		//console.log(typeof(age));

		if (loves.length <= 0) {setErrorLoves('Vänligen skriv något');post=false;}
		if (typeof(loves) !== "string") {setErrorName('Måste vara en sträng');post=false;}

		if (food.length <= 0) {setErrorFood('Vänligen skriv något');post=false;}
		if (typeof(food) !== "string") {setErrorFood('Måste vara en sträng');post=false;}

		if (myUrl.length > 0) {
			//check if http:// and .png
			if (!myUrl.startsWith("https://")) {setErrorUrl('Bildlänk måste börja med https://');post=false;}
			if (!myUrl.endsWith(".jpg") && !myUrl.endsWith(".gif") && !myUrl.endsWith(".png")) {setErrorUrl('Bildlänk måste sluta med .png, .jpg, eller .gif');post=false;}

			if (post) {
				image=myUrl;
			}
		}


		if (post) {
			setName('');
			setAge(0);
			setLoves('');
			setFood('');
			setUrl('');
			createObj(name, age, loves, food, image);
		}
	}


	return(
		<div className='formwrapper'>
			<h1>Posta ny hamster:</h1>
			<label>Namn:</label>
				<input type="text"
					onChange={event => setName(event.target.value)}
					className={(errorName.length <= 0) ? '' : 'errorfield'}
					value={myName}
				/>
			<div className='message'>{errorName}</div>
			<label>Ålder:</label>
				<input type="number"
					onChange={event => setAge(event.target.value)}
					className={(errorAge.length <= 0) ? '' : 'errorfield'}
					value={myAge}
					min="0" max="99"
				/>
			<div className='message'>{errorAge}</div>
			<label>Älskar:</label>
				<input type="text"
					onChange={event => setLoves(event.target.value)}
					className={(errorLoves.length <= 0) ? '' : 'errorfield'}
					value={myLoves}
				/>
			<div className='message'>{errorLoves}</div>
			<label>Favoritmat:</label>
				<input type="text"
					onChange={event => setFood(event.target.value)}
					className={(errorFood.length <= 0) ? '' : 'errorfield'}
					value={myFood}
				/>
			<div className='message'>{errorFood}</div>
			<label>Bild:</label>
				<div className="imagelister">
					{hamsterimagelist.map(arr => (
						<img
						src={` /img/${arr} `}
						alt={arr}
						key={arr}
						className={`previewimage ${(arr === selectedImage) ? 'previewimage-selected' : ''}`}
						onClick={() => setSelectedImage(arr)}
						/>
					))}
				</div>

				{/*
				<select onChange={event => setSelectedImage(event.target.value)}>
				{myArray.map((arr, index) => (
					<option key={index} value={arr}>{arr}</option>
				))}
				</select>
				*/}
				<img src={` /img/${selectedImage} `} alt={selectedImage} className='previewimage'/>
			

			<label>Extern bild:
				<input type="text"
					onChange={event => setUrl(event.target.value)}
					className={(errorUrl.length <= 0) ? '' : 'errorfield'}
					value={myUrl}
					/>
			</label>
			<div className='message'>{errorUrl}</div>

			<button onClick={() => {validate(myName, myAge, myLoves, myFood, selectedImage, myUrl)}}>Posta ny hamster:</button>
		</div>
	)

}


export default PostForm;