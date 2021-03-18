import Document, {
  Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from 'next/document';
import React, { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html lang='en'>
        <Head>

          <link rel='apple-touch-icon' sizes='180x180' href='/public/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/public/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/public/favicon-16x16.png' />
          <link rel='manifest' href='/public/site.webmanifest' />
          <link rel='mask-icon' href='/public/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='stylesheet' href='https://use.typekit.net/eqx2cgo.css' />
          <meta name='keywords' content='CSS, Design, Soft-UI, UI, Neumorphism' />
          <meta name='author' content='Aleksandr Shchilkin' />
          <title>Soft UI</title>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
