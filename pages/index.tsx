import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Intro from '../components/intro/Intro'
import Projects from '../components/projects/Projects'
import Services from '../components/services/Services'

function HomePage() {
	return (
		<>
			<Header />
			<Intro />
			<Services />
			<Projects />
			<Footer />
		</>
	)
}

export default HomePage
