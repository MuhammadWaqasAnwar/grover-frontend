import React from 'react'
import { TextArea, Form } from 'semantic-ui-react'

export const InputArea = ({ configs, onChangeText }) => {
	return (
		<>
			<h5>{configs.title}</h5>
			<Form>
				<TextArea placeholder={configs.placeholder} onChange={(e) => onChangeText(e, configs.parameter)} />
			</Form>
		</>
	)
}
