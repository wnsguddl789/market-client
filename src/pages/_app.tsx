import React from 'react';
import App from 'next/app';
import 'styles/reset.css';
import { Layout } from 'components';
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
