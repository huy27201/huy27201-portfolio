import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';
import { CommonText } from '@/constants';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ProfileCard from '@/components/ui/ProfileCard';

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
    <html lang='en' data-theme='light'>
      <body className={`${publicSans.variable} bg-zinc-50 antialiased`}>
        <div className='min-h-screen px-4 pb-24 pt-12'>
          <Navbar />
          <main className='mx-auto flex w-full max-w-4xl flex-col rounded-3xl border border-gray-250 p-8'>
            <ProfileCard />
            {children}
            <div className='divider border-gray-250' />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
