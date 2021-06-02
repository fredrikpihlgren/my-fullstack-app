import { useState } from 'react';

const PostForm = ({postHamster}) => {

	const [inputText, setInputText] = useState('default');


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

	function validate(name) {


		createObj(name, 777, 'Rulla runt', 'gräs', 'hamster-22.jpg');
	}

	const ageList = (
		<option>Saab</option>
	)


	return(
		<div>
			<label>Namn:
				<input type="text" placeholder="Your name..." onChange={event =>
					setInputText(event.target.value.trim())
					}/>
			</label>
			<label>Ålder:
				<select>
				{ageList}
				</select>
			</label>

			<button onClick={() => {validate(inputText)}}>Posta ny hamster:</button>
		</div>
	)

}


export default PostForm;