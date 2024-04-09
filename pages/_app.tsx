// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { MantineProvider, createTheme } from '@mantine/core';
import Head from 'next/head';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
