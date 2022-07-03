import Image from 'next/image';
import HamburgerMenu from '../components/HamburgerMenu';
import AboutLayout from '../components/AboutLayout';
import styles from '../components/AboutLayout/AboutLayout.module.css';

function AboutPage() {
  return (
    <div id="outer-container">
      <HamburgerMenu />
      <AboutLayout>
        <div className={styles.stack}>
          <div>
            <h1 id={styles.heading}>About</h1>
            <h3 id={styles.subheading}>The Story Behind Spacelytics 🚀</h3>
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
            placerat quis justo eget congue. Proin in dolor quis nulla
            condimentum sollicitudin. Nulla nec.
          </p>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            placerat quis justo eget congue. Proin in dolor quis nulla
            condimentum sollicitudin. Nulla nec.
          </p>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            placerat quis justo eget congue. Proin in dolor quis nulla
            condimentum sollicitudin. Nulla nec.
          </p>
        </div>
      </AboutLayout>
    </div>
  );
}
export default AboutPage;
