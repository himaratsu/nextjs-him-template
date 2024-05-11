import Link from 'next/link';
import { Noto_Sans_JP } from 'next/font/google';

const notojp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export function Footer() {
  return (
    <footer className="mt-32 mb-8">
      <div className="bg-slate-50 pt-12 pb-12 text-black/60 text-center px-8">
        <h5 className="mb-4">注意事項</h5>
        <div className="mb-20 text-gray-700 text-sm">
          <div className="mb-2">
            ※1. ラジオの原稿、発話はAIによって行われているため、内容を間違える可能性があります。
          </div>
          <div>※2. 本サービスはZennの記事を紹介していますが、非公式のサービスです。</div>
        </div>
        <div className="flex flex-col md:flex-row text-sm md:container md:mx-auto gap-12 md:gap-20">
          <div className="text-left">
            <div className="font-bold text-sm mb-4 ">サブスクリプション</div>
            <Link className="hover:underline" href="#" target="_blank">
              Spotify
            </Link>
            <div className="mt-2">
              <Link
                className="hover:underline"
                href="https://podcasts.apple.com/us/podcast/id1743769993"
                target="_blank"
              >
                Apple Podcast
              </Link>
            </div>
          </div>

          <div className="text-left">
            <div className="font-bold text-sm mb-4">お便り</div>
            <Link
              className="hover:underline"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJMRwLH_nXMrSgs9Q417VPoqUO0HJTGnBIrOlRpTYpj_G4YA/viewform"
              target="_blank"
            >
              お便りを送る
            </Link>
            <div className="mt-4 text-xs text-black/40">
              送っていただいたお便りは
              <br />
              AIパーソナリティが読み上げます。
            </div>
          </div>

          <div className="text-left">
            <div className="font-bold text-sm mb-4">Special Thanks</div>
            BGM:{' '}
            <Link className="hover:underline" href="https://dova-s.jp/_contents/author/profile446.html" target="_blank">
              yuhei komatsuさん
            </Link>
            <div className="font-bold text-sm mt-12 mb-2">作者</div>
            <Link className="hover:underline" href="https://twitter.com/himara2" target="_blank">
              @himara2
            </Link>
          </div>
        </div>
        <div className="mt-12 md:mt-20">
          <Link href="/">
            <div className="font-bold text-gray-600 text-xl font-mono hover:underline tracking-wide">
              <p className={notojp.className}>him templates</p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
