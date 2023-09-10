import '@/styles/global.scss';
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
import NileHero from '@/components/heros/nile-hero';
import AmazonHero from '@/components/heros/amazon-hero';
import YangtzeHero from '@/components/heros/yangtze-hero';
import NileCard from '@/components/cards/nile-card';
import AmazonCard from '@/components/cards/amazon-card';
import NileTestamonial from '@/components/testamonials/nile-testamonial';
import YangtzeCard from '@/components/cards/yangtze-card';

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

        <h2 className="pt-10 pb-10 text-2xl font-semibold text-center underline underline-offset-4 bg-zinc-100"> Nile </h2>

        {/* Nile */}
        <NileHeader/>
        <div className="w-full m-auto">
          {/* {children} */}
          <NileHero/>
        </div>
        <div className="max-w-7xl mx-auto py-32 px-5 flex gap-16">
          <NileCard/>
          <NileCard/>
          <NileCard/>
          <NileCard/>
        </div>
        <div className="max-w-7xl mx-auto py-32 px-5 ">
          <NileTestamonial/>
        </div>
        <NileFooter/>
        {/* ./Nile */}


        <h2 className="pt-10 pb-10 text-2xl font-semibold text-center underline underline-offset-4 bg-zinc-100"> Amazon </h2>


        {/* Amazon */}
        <AmazonHeader/>
        <div className="w-full m-auto">
          <AmazonHero/>
        </div>
        <div className='max-w-7xl mx-auto py-32 px-5 flex gap-16 justify-center'>
          <AmazonCard/>
        </div>
        <AmazonFooter/>
        {/* ./Amazon */}


        <h2 className="pt-10 pb-10 text-2xl font-semibold text-center underline underline-offset-4 bg-zinc-100"> Yangtze </h2>


        {/* YangtzeHeader */}
        <YangtzeHeader/>
        <div className="p-4 max-w-7xl m-auto">
          <YangtzeHero/>  
        </div>
        <div>
          <YangtzeCard />
        </div>
        <YangtzeFooter/>
        {/* ./
        {/* ./YangtzeHeader */}
      </body>
    </html>
  )
}
