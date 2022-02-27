import BgVideo from './../components/BgVideo';
import FrontPageContent from './../components/FrontPageContent';
import HamburgerMenu from './../components/HamburgerMenu';
import SideNavigation from './../components/SideNavigation';
import { useState } from 'react';

const Home = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <BgVideo clicked={clicked} pause={clicked}>
        <FrontPageContent
          heading={'Spacelytics'}
          subheading={'Using ADS-B data to determine flight-positions'}
        />

        {clicked ? <SideNavigation /> : null}
      </BgVideo>
      <HamburgerMenu clicked={clicked} onButtonClicked={setClicked} />
    </>
  );
};
export default Home;
