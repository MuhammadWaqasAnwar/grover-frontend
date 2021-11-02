import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export const DropDown = ({ configs, onChangeValue }) => {
	return (
		<>
			<h5>{configs.title}</h5>
			<Dropdown
				placeholder={configs.title}
				fluid
				selection
				options={configs.selections}
				onChange={onChangeValue}
			/>
		</>
	)
}
