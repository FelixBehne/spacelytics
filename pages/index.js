import BgVideo from './../components/BgVideo';
import FrontPageContent from './../components/FrontPageContent';
import HamburgerMenu from './../components/HamburgerMenu';
import SideNavigation from './../components/SideNavigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const notify = () => toast('Wow so easy!');

  return (
    <div id="outer-container">
      <HamburgerMenu notify={notify} />
      <BgVideo clicked={clicked} pause={clicked}>
        <FrontPageContent
          heading={'Spacelytics'}
          subheading={'Explore the operational insights of SpaceX !'}
        />
      </BgVideo>
      <ToastContainer />
    </div>
  );
};
export default Home;
