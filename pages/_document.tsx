import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className="bg-gray-50 leading-relaxed">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
