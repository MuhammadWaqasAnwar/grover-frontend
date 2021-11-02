export const publishDateConfig = {
	title: 'Publish Date',
	placeholder: 'DD-MM-YYYY',
	parameter: 'publish_date',
}

export const domainConfig = {
	title: 'Domain',
	placeholder: 'Article Domain',
	parameter: 'domain',
	selections: [
		{
			key: 'Jenny Hess',
			text: 'Jenny Hess',
			value: 'Jenny Hess',
		},
		{
			key: 'Elliot Fu',
			text: 'Elliot Fu',
			value: 'Elliot Fu',
		},
		{
			key: 'Stevie Feliciano',
			text: 'Stevie Feliciano',
			value: 'Stevie Feliciano',
		}
	]
}

export const authorConfig = {
	title: 'Author',
	placeholder: 'Article Author',
	parameter: 'authors'
}

export const titleConfig = {
	title: 'Title',
	placeholder: 'Title',
	parameter: 'title'
}

export const summaryConfig = {
	title: 'Summary',
	placeholder: 'Summary',
	parameter: 'summary'
}

export const inputTextConfig = {
	title: 'Input Text',
	placeholder: 'Put Your Article Here',
	parameter: 'text'
}

export const responseLengthConfig = {
	title: 'Response Length',
	default: 1024,
	min: 0,
	max: 1024,
	step: 1,
	slider_marks: {
		1: {
			style: {
				color: '#000000',
			},
			label: <strong>1</strong>,
		},
		1024: {
			style: {
				color: '#000000',
			},
			label: <strong>1024</strong>,
		},
	}
}

export const creativityLevelConfig = {
	title: 'Creativity Level',
	min: 0,
	max: 1,
	step: 0.01,
	default: 0.98,
	slider_marks: {
		0: {
			style: {
				color: '#000000',
			},
			label: <strong>0</strong>,
		},
		1: {
			style: {
				color: '#000000',
			},
			label: <strong>1</strong>,
		},
	}
}
