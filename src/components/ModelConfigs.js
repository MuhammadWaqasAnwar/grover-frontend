import {DropDown} from "./Dropdown/DropDown";
import {
	authorConfig, creativityLevelConfig,
	domainConfig,
	inputTextConfig,
	publishDateConfig,
	responseLengthConfig, summaryConfig, titleConfig
} from "../configs/configsList";
import {InputBox} from "./InputBox/InputBox";
import {InputArea} from "./InputArea/InputArea";
import {ParameterSlider} from "./ParameterSlider/ParameterSlider";
import {SubmitButton} from "./SubmitButton/SubmitButton";
import {useState} from "react";
import {generateArticle, updateModelConfig} from "../services/ModelIntefence";
import { Spin } from 'antd';

export const ModelConfigs = ({ setOutputs }) => {
	const [loading, setLoading] = useState(false)
	const [modelConfigs, setModelCongifs] = useState({
		'max_position_embeddings': 1024,
		'top_p': 0.98
	})
	const [articleParameters] = useState({
		'title': '',
		'text': '',
		'authors': [],
		'publish_date': '',
		'domain': '',
		'summary': ''
	})

	const onChangeResponseLength = (value) => {
		if (value === 0 || value === '' || value === null || value === undefined) {
			value = 1024
		}
		console.log(value)
		setModelCongifs({
			...modelConfigs,
			max_position_embeddings: value
		})
	}

	const onChangeCreativityLevel = (value) => {
		if (value === 0 || value === '' || value === null || value === undefined) {
			value = 0.98
		}
		console.log(value)
		setModelCongifs({
			...modelConfigs,
			top_p: value
		})
	}

	const onUpdateConfig = async () => {
		setLoading(true)
		console.log('model configs', modelConfigs)
		const response = await updateModelConfig(modelConfigs)
		console.log('model update', response.message)
	}

	const onGenerateArticle = async () => {
		setLoading(true)

		if (articleParameters.summary === '' || articleParameters.summary === undefined || articleParameters.summary === null) {
			articleParameters.summary = articleParameters.title;
		}
		if (articleParameters.text === '' || articleParameters.text === undefined || articleParameters.text === null) {
			articleParameters.text = articleParameters.title;
		}
		if (articleParameters.publish_date === '' || articleParameters.publish_date === undefined || articleParameters.publish_date === null) {
			articleParameters.publish_date = '04-15-2019';
		}
		if (articleParameters.authors === '' || articleParameters.authors === undefined || articleParameters.authors === null  || articleParameters.authors.length === 0) {
			articleParameters.authors = ['Author'];
		}

		const data_to_submit = {}
		data_to_submit['article'] = []
		data_to_submit['article'].push(articleParameters)
		console.log(data_to_submit)
		const response = await generateArticle(data_to_submit)
		console.log('response', response.data)
		setOutputs(response.data)
		setLoading(false)
	}

	const onChangeText = (e, parameter) => {
		articleParameters[parameter] = e.target.value;
	}

	const onSubmit = () => {
		if (parseInt(modelConfigs.max_position_embeddings) < 1024) {
			alert("Response Length must be 1024")
		}
		else if (articleParameters.title === '' || articleParameters.domain === '') {
			alert("Please Fill in Title and Domain")
		} else {
			onUpdateConfig().then(r => {})
			onGenerateArticle().then(r => {})
		}
	}

	return (
		<div style={{ height: '106vh' }}>
			<div style={{ padding: 15, paddingTop: 40 }}>
				<InputBox configs={publishDateConfig} onChangeText={onChangeText} />
				<InputBox configs={domainConfig} onChangeText={onChangeText} />
				<InputBox configs={authorConfig} onChangeText={onChangeText} />
				<InputBox configs={summaryConfig} onChangeText={onChangeText} />
				<InputBox configs={titleConfig} onChangeText={onChangeText} />
				<InputArea configs={inputTextConfig} onChangeText={onChangeText} />
				<ParameterSlider configs={responseLengthConfig} onChangeSliderValue={onChangeResponseLength} />
				<ParameterSlider configs={creativityLevelConfig} onChangeSliderValue={onChangeCreativityLevel}/>
				{
					loading ? ( <center><Spin size="large" /></center>) : (<SubmitButton onSubmit={onSubmit}/>)
				}
			</div>
		</div>
	)
}
