// pages/_app.js
import '../styles/global.css';

import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <UserProvider>
      <Head>
        <title>Spacelytics</title>
        <meta
          name="description"
          content="A Web Application to Explore Statistics about SpaceX Operations."
        />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
