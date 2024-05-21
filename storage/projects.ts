import pcImage from '../assets/pc-course-image.png'
import portfolioImage from '../assets/portfolio.png'
import japanImage from '../assets/japan.png'
import { StaticImageData } from 'next/image'

export type Project = {
   name: string
   image: StaticImageData
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
   {
      name: 'Travel Tour Landing',
      image: japanImage,
      href: 'https://jap-93e048gj1-cofeekcodes-projects.vercel.app/',
   },
]

export default Projects
