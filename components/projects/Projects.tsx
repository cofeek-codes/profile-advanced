/* eslint-disable react/react-in-jsx-scope */
import { motion } from 'framer-motion'
import Image from 'next/image'
import projects, { Project } from '../../storage/projects'
import styles from './projects.module.scss'
function Projects() {
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
					{projects.map((project: Project) => (
						<a href={project.href} key={project.name}>
							<div className={styles.card}>
								<div className={styles.image}>
									<Image src={project.image} alt={project.name} />
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
