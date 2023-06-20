import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config';
// import { initMocks } from '@/tests/mocks';

import { Footer } from '@/components/Footer';
import { Layout } from '@/components/Layout';

// MSW ainda não tem suporte aos RSC:  https://github.com/mswjs/msw/discussions/1498
// if (process.env.NODE_ENV === 'development') {
//   initMocks();
// }

export const metadata: Metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'YouTube - Dev Junior Alves',
  manifest: '/manifest.json',
  authors: [{ name: 'Junior Alves' }],
  metadataBase: new URL(`${siteConfig.url}`)
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} w-full bg-primary`}>
          <Layout>
            <main className="pt-28">{children}</main>
          </Layout>

          <Footer />
        </body>
      </html>
    </>
  );
}
