import '@/styles/global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NileHeader from '@/components/headers/nile-header';
import NileFooter from '@/components/footers/nile-footer';
import config from '@/lib/config';
import IndexHead from '@/components/headers/head';
import AmazonHeader from '@/components/headers/amazon-header';
import AmazonFooter from '@/components/footers/amazon-footer';
import YangtzeHeader from '@/components/headers/yangtze-header';
import YangtzeFooter from '@/components/footers/yangtze-footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <IndexHead/>
      <body className={inter.className}>
        {/* Nile */}
        <NileHeader/>
        <div className="p-4 max-w-7xl m-auto">
          {children}
        </div>
        <NileFooter/>
        {/* ./Nile */}

        {/* Amazon */}
        <AmazonHeader/>
        <div className="p-4 max-w-7xl m-auto">
          {children}
        </div>
        <AmazonFooter/>
        {/* ./Amazon */}

        {/* YangtzeHeader */}
        <YangtzeHeader/>
        <div className="p-4 max-w-7xl m-auto">
          {children}
        </div>
        <YangtzeFooter/>
        {/* ./
        {/* ./YangtzeHeader */}
      </body>
    </html>
  )
}
