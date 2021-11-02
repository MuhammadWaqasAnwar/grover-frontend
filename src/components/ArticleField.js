export const ArticleField = ({ response }) => {
	console.log(JSON.stringify(response))
	return (
		<>
			{
				JSON.stringify(response) === '{}' || response === null || response === undefined ? (
					<div style={{ backgroundColor: 'white', height: '85vh', paddingTop: 45 }}>
						<h1>Output will shown here</h1>
					</div>
				) : (
					<div style={{ backgroundColor: 'white', height: '85vh', paddingTop: 45 }}>
						<p style={{textAlign: 'center'}}><strong >{response.title}</strong></p>
						<p>{response.gens_article[0]}</p>
					</div>
				)
			}
		</>
	)
}
