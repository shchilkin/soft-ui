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
          <link rel='stylesheet' href='https://use.typekit.net/eqx2cgo.css' />
          <meta name='keywords' content='CSS, Design, Soft-UI, UI, Neumorphism' />
          <meta name='author' content='Aleksandr Shchilkin' />
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
