import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/providers';

import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
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
      <html lang="en">
        <body className={`${inter.className} w-full `}>
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
