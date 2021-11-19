import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Kevin Van Cott - Software Engineer</title>
        <meta
          name="description"
          content="Kevin Van Cott is a full stack software engineer based in Nebraska. He specializes in building web applications using React, Svelte, and Groovy."
        />
        <meta property="og:image" content="/profile.jpg"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
