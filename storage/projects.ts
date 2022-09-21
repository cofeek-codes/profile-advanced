import pcImage from '../assets/pc-course-image.png'
import portfolioImage from '../assets/portfolio.png'
export type Project = {
	name: string
	image: any
	href: string
}

const Projects: Project[] = [
	{
		name: 'PC Course',
		image: pcImage,
		href: 'https://pc-course.vercel.app/',
	},
	{
		name: 'Portfolio Example',
		image: portfolioImage,
		href: 'https://john-virid.vercel.app/',
	},
]

export default Projects
