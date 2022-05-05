import Image from 'next/image';
import styles from './AboutLayout.module.css';

const AboutLayout = ({ children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div id={styles.header} />
      <div className={styles.stack}>
        <div>
          <h1 id={styles.heading}>About</h1>
          <h3 id={styles.subheading}>The Story Behind Spacelytics 🚀</h3>
        </div>
        <Image
          src="/images/author.png"
          alt="Picture of the author"
          width={200}
          height={200}
        />
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
