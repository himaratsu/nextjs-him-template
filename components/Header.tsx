import Link from 'next/link';
import { Noto_Sans_JP } from 'next/font/google';
import { TextInput, em } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

const notojp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export function Header({ query }: { query?: string }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);
  const [isComposing, setIsComposing] = useState(false);

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  const handleSearch = async () => {
    router.push(`/search?q=${searchTerm}`);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (!isComposing) {
        handleSearch();
      }
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };
  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  const text = 'him-templates';
  const siteUrl = 'https://yahoo.co.jp';
  const twitterShareUrl = `https://twitter.com/share?url=${siteUrl}&hashtags=him-templates&text=${text}`;

  return (
    <header className="bg-slate-50 border-b-2">
      <div className="py-3 container mx-auto flex justify-between items-center">
        <Link href="/">
          <h5 className="font-bold text-gray-800 text-2xl font-mono ml-0 hover:underline tracking-wide">
            <p className={notojp.className}>him templates</p>
          </h5>
        </Link>

        {isMobile ? (
          <Link href={'/search'} className="mt-1">
            <p className="text-slate-300 hover:text-slate-500">
              {/* <IconBrandTwitterFilled /> */}
              <IconSearch />
            </p>
          </Link>
        ) : (
          <TextInput
            placeholder="エピソードを検索..."
            radius="md"
            size="sm"
            onKeyDown={handleKeyDown}
            value={searchTerm}
            style={{ width: 250 }}
            onChange={(e) => setSearchTerm(e.target.value)}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
          />
        )}
      </div>
    </header>
  );
}
