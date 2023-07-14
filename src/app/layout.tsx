import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Layout } from '@/components/Layout';

export const metadata: Metadata = {
  title: {
    template: '%s | Junior Alves',
    default: 'Junior Alves'
  },
  description: 'Blog onde falo sobre livros e código'
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
          <Layout>
            <main className="pt-28">{children}</main>
          </Layout>
        </body>
      </html>
    </>
  );
}
