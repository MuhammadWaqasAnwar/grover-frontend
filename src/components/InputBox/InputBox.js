import React from 'react'
import { Input } from 'semantic-ui-react'

export const InputBox = ({ configs, onChangeText }) => {
	return (
		<>
			<h5>{configs.title}</h5>
			<Input placeholder={configs.placeholder} style={{width: '26.7vw'}} onChange={(e) => onChangeText(e, configs.parameter)}/>
		</>
	)
}
