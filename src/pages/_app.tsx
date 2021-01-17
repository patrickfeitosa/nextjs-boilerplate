import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from '@Styles/global';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>React Avançado - Boilerplate</title>
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project starter to work with TypScript, React, NextJS and Styled Components"
      />
      <meta name="theme-color" content="#06092B" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default App;
