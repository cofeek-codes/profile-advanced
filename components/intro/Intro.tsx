import styles from "./intro.module.scss";

function Intro() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Dev is Art</h1>
      <div className={styles.logo}>cofeek-codes</div>
    </div>
  );
}
export default Intro;
