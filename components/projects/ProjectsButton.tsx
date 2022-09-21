import { motion } from "framer-motion"
import styles from './projects.module.scss'
function ProjectsButton() {
return (
        <div className={styles.view__all}>
          <motion.div>View All </motion.div>
        </div>
   
)
}

export  default ProjectsButton
