import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const SubmitButton = ({ onSubmit }) => {
	return (
		<>
			<div style={{ paddingTop: 20 }}>
				<center>
					<Button size={"large"} onClick={onSubmit} style={{ 'backgroundColor': '#609BA1', color: '#ffffff', width: '10vw', borderRadius: '12px' }}>
						Submit
					</Button>
				</center>
			</div>
		</>
	)
}
