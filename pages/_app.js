import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './../styles/global.css';

import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({
  Component,
  pageProps: { session, ...pageProps }
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
