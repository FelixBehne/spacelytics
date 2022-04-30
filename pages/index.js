import BgVideo from './../components/BgVideo';
import FrontPageContent from './../components/FrontPageContent';
import HamburgerMenu from './../components/HamburgerMenu';

const Home = () => {
  return (
    <div id="outer-container">
      <HamburgerMenu />
      <BgVideo>
        <FrontPageContent
          heading={'Spacelytics'}
          subheading={'Explore the operational insights of SpaceX!'}
        />
      </BgVideo>
    </div>
  );
};
export default Home;
