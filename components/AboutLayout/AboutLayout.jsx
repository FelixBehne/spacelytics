import styles from './AboutLayout.module.css';

function AboutLayout({ children }) {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div id={styles.header} />
      {children}
      <div id={styles.footer}>
        <a href="https://github.com/felixbehne">Felix Behne</a>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}

export default AboutLayout;
