import Header from '../components/header/Header'

const ServerSideError = () => {
	return (
		<>
			<Header />
			<div
				style={{
					background: '#000',
					width: '100vw',
					height: '100vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1 style={{ color: '#fff', fontWeight: 'bold', fontSize: 60 }}>
					500 - Server-side error occurred
				</h1>
			</div>
		</>
	)
}

export default ServerSideError
