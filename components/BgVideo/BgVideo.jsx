import styles from './BgVideo.module.css';

const BgVideo = ({ children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div className={styles.videoContainer}>
        <video
          width="100%"
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
          You're browser doesn't support HTML5 videos
        </video>
      </div>
      {children}
    </section>
  );
};

export default BgVideo;
