import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { siteConfig } from '@/config';
import { Providers } from '@/providers';

import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Blog onde falo sobre livros e código',
  manifest: '/manifest.json',
  authors: [{ name: 'Junior Alves' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Dev Junior Alves',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html suppressHydrationWarning lang="en">
        <body className={`${inter.className} w-full bg-primary`}>
          <Providers>
            <Layout>
              <main className="pt-28">{children}</main>
            </Layout>
          </Providers>
        </body>
      </html>
    </>
  );
}
