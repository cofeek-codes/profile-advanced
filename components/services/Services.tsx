import { motion } from "framer-motion";
import styles from "./services.module.scss";

function Services(): JSX.Element {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };



  return (
    <div className={styles.wrapper}>
      <div className={styles.list__title}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{duration: 0.3}}
        >
          So, this is what i can do for you
        </motion.div>
      </div>
      <div className={styles.list}>
          <motion.div initial={{opacity: 0, y:100}} whileInView={{opacity: 1, y:0}}>
            Build simple landing page with{" "}
            <span className={styles.html}>html </span>/ {" "}
            <span className={styles.css}>css </span>/ {" "}
            <span className={styles.js}>js</span> {" "}
            for your business or company
          </motion.div>
          <motion.div initial={{opacity: 0, y:100}} whileInView={{opacity: 1, y:0}}>
            Or build more complicated app with <span className={styles.react}>react</span>
          </motion.div>

      </div>
    </div>
  );
}

export default Services;
