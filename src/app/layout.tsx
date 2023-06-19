import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { siteConfig } from '@/config';

import { Footer } from '@/components/Footer';
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
      <Script
        async
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />

      <html suppressHydrationWarning lang="en">
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
