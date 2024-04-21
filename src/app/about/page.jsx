import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About the platform</h2>
        <h1 className={styles.title}>
        Intelligent Traffic Monitoring
        </h1>
        <p className={styles.desc}>
        This Platform aims provides an advanced system for monitoring traffic and reporting incidents in real-time. By utilizing modern technologies like machine learning and computer vision, it seeks to improve traffic management and enhance road safety. Users will be able to upload images or videos of traffic scenes, and the system will analyze them for various safety violations such as seatbelt usage, helmet wearing, and red light violations. Upon detecting any violations, the system will record incident details and update user reward points accordingly. Additionally, it will notify relevant authorities about the incidents for further action. The goal is to provide a user-friendly platform that promotes safer driving habits and contributes to better traffic management.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Incedent reported</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>User Registerd</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
