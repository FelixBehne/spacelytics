import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import HamburgerMenu from '../components/HamburgerMenu';
import { useState } from 'react';

const AnalyticsPage = () => {
  const [clicked, setClicked] = useState(false);
  const { user } = useUser();

  const mode = clicked ? 'container--indented' : 'container';
  console.log(user);
  return (
    <>
      <div className={mode}>Placeholder for Analyics</div>
      <HamburgerMenu clicked={clicked} onButtonClicked={setClicked} />
    </>
  );
};
export default withPageAuthRequired(AnalyticsPage);
