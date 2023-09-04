{/*import { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}*/}

import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

const MyDocument = () => {

  return (
    <Html lang="es">
      <Head>
        { CssBaseline.flush() }
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: React.Children.toArray([initialProps.styles]),
  };

};

export default MyDocument;
