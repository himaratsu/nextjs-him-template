import Head from 'next/head';
import { Footer } from './Footer';
import { Header } from './Header';

export default function Layout({ children, query }: { children: React.ReactNode; query?: string }) {
  const title = ' - 技術トレンドをAIがラジオに変換';
  const description = 'Zennでトレンドの記事を毎朝AIがラジオにします。';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={'him-templates'} />
        <meta property="og:url" content={'https://yahoo.co.jp'} />
        <meta property="og:type" content={'website'} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://zenncast-web.vercel.app/zenncast_ogp.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Header query={query} />

      {children}

      <Footer />
    </>
  );
}
