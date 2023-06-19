import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css2?family=Foldit:wght@500;600;700&family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="w-full bg-primary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
