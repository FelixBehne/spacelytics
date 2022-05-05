import Image from 'next/image';
import styles from './BgVideo.module.css';

const BgVideo = ({ children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div className={styles.videoContainer}>
        <video
          preload="auto"
          src={'/videos/globe.mp4'}
          type="video/mp4"
          loop
          controls={false}
          autoPlay
          playsInline
          muted
          poster="/videos/poster.png"
        >
          Your Browser does not support Html5 videos
        </video>
      </div>
      {children}
    </section>
  );
};

export default BgVideo;
