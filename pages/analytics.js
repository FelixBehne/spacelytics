import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import HamburgerMenu from '../components/HamburgerMenu';

function AnalyticsPage() {
  return (
    <div id="outer-container">
      <HamburgerMenu />
      <div id="page-wrap" className="container">
        To be implemented ...
      </div>
    </div>
  );
}
export default withPageAuthRequired(AnalyticsPage);
