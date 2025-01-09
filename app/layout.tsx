import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import { CommonText } from '@/constants';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: CommonText.name,
  description: CommonText.metadataDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${publicSans.variable} antialiased`}>
        <div className='min-h-screen bg-zinc-50 pb-24 pt-12'>
          <div className='mx-auto max-w-4xl rounded-3xl border border-gray-250 p-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
