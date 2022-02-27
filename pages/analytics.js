import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import HamburgerMenu from '../components/HamburgerMenu';
import SideNavigation from '../components/SideNavigation';
import { useState } from 'react';

const AnalyticsPage = () => {
  const [clicked, setClicked] = useState(false);
  const { user } = useUser();

  const mode = clicked ? 'container--indented' : 'container';
  console.log(user);
  return (
    <>
      <div className={mode}>
        To be implemented ... {clicked ? <SideNavigation /> : null}
      </div>
      <HamburgerMenu clicked={clicked} onButtonClicked={setClicked} />
    </>
  );
};
export default withPageAuthRequired(AnalyticsPage);
