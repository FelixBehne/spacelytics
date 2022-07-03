import styles from './AnalyticsLayout.module.css';
import Image from 'next/image';

const AboutLayout = () => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div id={styles.header} />
      <div className={styles.stack}>
        <div>
          <h1 id={styles.heading}>Analytics</h1>
          <h3 id={styles.subheading}>Dive into SpaceX operation insights </h3>
        </div>
        <div id={styles.image}>
          <Image
            src="/images/author.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>

        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          placerat quis justo eget congue. Proin in dolor quis nulla condimentum
          sollicitudin. Nulla nec.
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          placerat quis justo eget congue. Proin in dolor quis nulla condimentum
          sollicitudin. Nulla nec.
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          placerat quis justo eget congue. Proin in dolor quis nulla condimentum
          sollicitudin. Nulla nec.
        </p>
      </div>
      <div id={styles.footer}>
        <a href="https://github.com/felixbehne">Felix Behne</a>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default AboutLayout;
