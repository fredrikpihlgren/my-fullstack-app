import {useState} from 'react';

const Deleter = ({id, name, killHamster}) => {

	const [delMode, setDelMode] = useState(false);

	const showDelete = (
			<button onClick={() => maybeDelete()}>Radera mig</button>
	)

	const areYouSure = (
		<div>
			<button onClick={() => killHamster(id)}>Bekräfta</button>
			<button onClick={() => maybeDelete()}>Ångra</button>
		</div>
	)

	function maybeDelete() {
		setDelMode(!delMode);
	}

	return(
		<div>
			<p style={ delMode ? { visibility : 'visible'} : {visibility : 'hidden'} }>Ta bort {name}?</p>
			{ delMode ? areYouSure : showDelete }
		</div>
	)

}


export default Deleter;