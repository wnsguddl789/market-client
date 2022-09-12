import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { MarketThemeProvider } from 'utils';

import { Layout } from 'components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MarketThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MarketThemeProvider>
  );
};

export default MyApp;
