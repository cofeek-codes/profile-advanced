import styles from './footer.module.scss'
const Footer = () => {
  return (
  <footer>
      <div className={styles.copyright}>

      copyright &copy; cofeek-codes, {(new Date().getFullYear())}
      </div>
    </footer>
  )
}

export default Footer

