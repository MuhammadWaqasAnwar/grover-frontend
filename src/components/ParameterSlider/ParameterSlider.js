import {Col, InputNumber, Row, Slider} from 'antd';
import {useState} from "react";

export const ParameterSlider = ({configs, onChangeSliderValue}) => {
	const [inputValue, setInputValue] = useState(configs.default)
	return (
		<>
			<div style={{paddingTop: 50}}>
				<Row>
					<Col span={19}>
						<h4>{configs.title}</h4>
					</Col>
					<Col span={4}>
						<InputNumber
							min={configs.min}
							max={configs.max}
							style={{margin: '0 16px'}}
							value={inputValue}
							step={configs.step}
							onChange={(value) => {
								    setInputValue(value)
									onChangeSliderValue(value)
								}
							}
						/>
					</Col>
				</Row>
				<Row>
					<Col span={23}>
						<Slider
							min={configs.min}
							max={configs.max}
							onChange={(value) => {
								setInputValue(value)
								onChangeSliderValue(value)
							}}
							value={typeof inputValue === 'number' ? inputValue : 0}
							step={configs.step}
							marks={configs.slider_marks}
						/>
					</Col>
				</Row>
			</div>
		</>
	)
}
