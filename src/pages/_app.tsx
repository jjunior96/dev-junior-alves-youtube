import { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@/components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Junior Alves</title>
        <link href="/img/bg.png" rel="shorcut icon" />
        <link href="/img/bg.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="Junior Alves" name="description" />
      </Head>

      <main className="min-h-screen">
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default App;
