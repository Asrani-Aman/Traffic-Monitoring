import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Intelligent traffic Monitoring</div>
      <div className={styles.text}>
        Final Year Major Project
      </div>
    </div>
  );
};

export default Footer;
