// pages/_app.js
import './../styles/global.css';
import 'react-lite-toast/dist/index.css';

import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <UserProvider>
      <Head>
        <title>Spacelytics</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
