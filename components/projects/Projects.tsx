/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import projects, { Project } from '../../storage/projects'
import styles from './projects.module.scss'

function Projects() {
   const pathname = useRouter().pathname
   const displayedProjects = pathname == '/' ? projects.slice(0, 2) : projects

   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <motion.div
               initial={{ opacity: 0, x: '-100%' }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.3 }}
            >
               My Projects
            </motion.div>
         </div>
         <div className={styles.cards}>
            <motion.div
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
            >
               {
                  displayedProjects.map((project: Project) => (
                     <a href={project.href} key={project.name}>
                        <div className={styles.card}>
                           <div className={styles.image}>
                              <Image
                                 src={project.image}
                                 placeholder='blur'
                                 alt={project.name}
                              />
                           </div>
                           <div className={styles.card__title}>{project.name}</div>
                        </div>
                     </a>
                  ))}
            </motion.div>
         </div>
      </div>
   )
}

export default Projects
