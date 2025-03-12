import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'COM617 Web6S',
  description: '',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="px-4 py-2 border-b bg-teal-600">
          <div className="max-w-10xl mx-auto  flex flex-row items-center justify-between">
          </div>
      </header>
        {children}
      </body>
    </html>
  );
}