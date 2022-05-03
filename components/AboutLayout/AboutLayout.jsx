import styles from './AboutLayout.module.css';

const AboutLayout = ({ children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div className={styles.stack}>
        <div>
          <h1 id={styles.heading}>About</h1>
          <h3 id={styles.subheading}>
            Fun facts and the story behind Spacelytics
          </h3>
        </div>

        {children}
      </div>
    </section>
  );
};

export default AboutLayout;
