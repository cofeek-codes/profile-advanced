import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Intro from '../components/intro/Intro'
import Meta from '../components/meta/Meta'
import Projects from '../components/projects/Projects'
import Services from '../components/services/Services'
import Grid from '../components/socials/Grid'
import constants from '../constants'

function HomePage() {
	return (
		<>
			<Meta
				title={'Cofeek-Codes | Profile'}
				description={'Cofeek Codes web dev profile and links'}
				url={constants.URL}
			/>
			<Header />
			<Intro />
			<Services />
			<Projects />
			<Grid />
			<Footer />
		</>
	)
}

export default HomePage
