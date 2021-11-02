import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

export const DateInput = () => {
	const [currentDate, setNewDate] = useState(null);
	const onChange = (event, data) => setNewDate(data.value);

	return (
		<>
			<h5>DATE</h5>
			<div style={{ 'minWidth': '100vw' }}>
				<SemanticDatepicker onChange={onChange} />
			</div>
		</>
	)
};
