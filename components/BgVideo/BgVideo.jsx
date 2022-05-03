import Image from 'next/image';
import styles from './BgVideo.module.css';

const BgVideo = ({ children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div className={styles.videoContainer}>
        <video
          controls={false}
          preload="auto"
          playsInline
          muted
          loop
          autoPlay
          poster="/videos/poster.png"
        >
          <source src="/videos/globe.mp4" type="video/mp4; codecs=hevc" />
          <source src="/videos/globe.webm" type="video/webm; codecs=vp9" />
        </video>
      </div>
      {children}
    </section>
  );
};

export default BgVideo;
