import PropTypes from 'prop-types';
import styles from './BgVideo.module.css';

/**
 * Fullscreen background video that is fully responsive
 */
const BgVideo = ({ videoLocation, loop, controls, autoPlay, children }) => {
  return (
    <section id="page-wrap" className={styles.showcase}>
      <div className={styles.videoContainer}>
        <video width="100%" controls playsInline muted loop autoPlay>
          <source src="/videos/globe.mp4" type="video/mp4; codecs=hevc" />
          <source src="/videos/globe.webm" type="video/webm; codecs=vp9" />
        </video>
      </div>
      {children}
    </section>
  );
};

export default BgVideo;

BgVideo.propTypes = {
  /**
   * Where is your video located?
   */
  videoLocation: PropTypes.string.isRequired,
  /**
   * Should the video loop ?
   */
  loop: PropTypes.bool,
  /**
   * Should video controls be displayed ?
   */
  controls: PropTypes.bool,
  /**
   * Should the video automatically start to play  ?
   */
  autoPlay: PropTypes.bool
};

BgVideo.defaultProps = {
  videoLocation:
    'https://res.cloudinary.com/diz3ottxo/video/upload/v1606299408/minimal-globe_uardxq.mp4',
  loop: true,
  controls: false,
  autoPlay: true
};
