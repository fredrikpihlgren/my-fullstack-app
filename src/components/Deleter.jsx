import {useState} from 'react';

const Deleter = (prop) => {

	const [delMode, setDelMode] = useState(false);

	const showDelete = (
			<button onClick={() => maybeDelete()}>Radera mig</button>
	)

	const areYouSure = (
		<div>
			<button onClick={() => prop.hamsterIdDelete(prop.id)}>Bekräfta</button>
			<button onClick={() => maybeDelete()}>Ångra</button>
		</div>
	)

	function maybeDelete() {
		setDelMode(!delMode);
	}

	return(
		<div>
			<p style={ delMode ? { visibility : 'visible'} : {visibility : 'hidden'} }>Ta bort {prop.name}?</p>
			{ delMode ? areYouSure : showDelete }
		</div>
	)

}


export default Deleter;