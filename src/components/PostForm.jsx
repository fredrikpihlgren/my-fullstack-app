import { useState } from 'react';
import '../mycss/Form.css';

const PostForm = ({postHamster}) => {

	let hamsterimages=[];
	for (let i=1;i<=40;i++) {
		hamsterimages.push('hamster-'+i+'.jpg');
	}
	const hamsterimagelist = hamsterimages;

	const [inputName, setInputName] = useState('');

	const [selectedImage, setSelectedImage] = useState('hamster-1.jpg');

	//let nameIsValid = (inputName !== '')

	/*
	let nameClass = '';
	if (nameTouched) {
		nameClass = nameIsValid ? 'validinput' : 'errorinput'
	}
	*/


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

	function validate(name, image) {


		createObj(name, 777, 'Rulla runt', 'gräs', image);
	}


	/*
	setExampleState({...exampleState,  masterField2: {
        fieldOne: "c",
        fieldTwo: {
           fieldTwoOne: "d",
           fieldTwoTwo: "e"
           }
        },
   }})
   */

	return(
		<div className='formwrapper'>
			<h1>Posta ny hamster:</h1>
			<label>Namn:
				<input type="text" onChange={event =>
					setInputName(event.target.value.trim())
					}
					value={inputName}
					//className={nameClass}
					//onBlur={() => setNameTouched(true)}
				/>
			</label>
			<div className='message'>Namn måste vara en sträng</div>
			<label>Ålder:
			</label>
				
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
					/>
			</label>

			<button onClick={() => {validate(inputName, selectedImage)}}>Posta ny hamster:</button>
		</div>
	)

}


export default PostForm;