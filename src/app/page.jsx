import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Intelligent Traffic Monitoring </h1>
        <p className={styles.desc}>
          Upload the photo or video of the Incident occured 
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Upload Here </button>
          <button className={styles.button}>Contact</button>
        </div>

      </div>
      <div className={styles.imgContainer}>
        <Image src="/traffic_monitoring.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
