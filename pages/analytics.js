import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import AnalyticsLayout from '../components/AnalyticsLayout';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../admin/App'), { ssr: false });

const Analytics = () => {
  return <AnalyticsLayout />;
};

export default Analytics;

// export async function getStaticProps() {
//   const res = await fetch('https://api.spacexdata.com/v4/launches/latest');
//   const launches = await res.json();

//   return {
//     props: {
//       launches
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 24 * 60 * 60 // In seconds
//   };
// }
