import { Layout, Menu, Row, Col, Image  } from 'antd';
import {
	DesktopOutlined,
	PieChartOutlined,
	FileOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import {ArticleField} from "../components/ArticleField";
import {ModelConfigs} from "../components/ModelConfigs";

import HelloSribeLogo from '../assests/HelloSribeLogo.png'
import './Dashboard.css'
import {useState} from "react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const Dashboard = () => {
	const [response, setResponse] = useState({})
	const setOutputs = (response) => {
		console.log(response)
		setResponse(response)
	}

	return (
		<>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider collapsed={false} className={'purple'}>
					<div style={{ padding: 30 }}>
						<Row>
							<Col>
								<Image
									width={130}
									src={HelloSribeLogo}
								/>
							</Col>
						</Row>
						<Row>
							<Col span={8}>

							</Col>
							<Col span={6}>
								<div>
									<p style={{ color: 'white', fontSize: 9, textAlign: 'right' }}>PLAYGROUND</p>
								</div>
							</Col>
						</Row>
					</div>
				</Sider>
				<Layout className="site-layout">
					<Header className="purple" style={{ height: '5vh' }}/>
					<Content>
						<div className="site-layout-background" style={{ minHeight: 360 }}>
							<Row>
								<Col span={16}>
									<div style={{'padding': 45, 'paddingTop': 5 }}>
										<ArticleField response={response}/>
									</div>
								</Col>
								<Col span={8}>
									<div style={{ backgroundColor: '#f2f2f2' }}>
										<ModelConfigs setOutputs={setOutputs} />
									</div>
								</Col>
							</Row>
						</div>
					</Content>
				</Layout>
			</Layout>
		</>
	)
}
