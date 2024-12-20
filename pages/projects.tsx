import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Meta from '../components/meta/Meta'
import AllProjects from '../components/projects/AllProjects'
import constants from '../constants'

function ProjectsPage() {
	return (
		<>
			<Meta
				title={'Cofeek-Codes | Projects'}
				description={'Cofeek Codes web dev profile all projects'}
				url={`${constants.URL}/projects`}
			/>
			<Header />
			<AllProjects />
			<Footer />
		</>
	)
}

export default ProjectsPage
