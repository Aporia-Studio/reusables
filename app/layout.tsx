import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import HeaderOne from '@/components/headerOne';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ship.it',
  description: 'Starter for a Nextjs application built with tailwindcss and typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {/* <HeaderOne /> */}
        <div className="pl-5 pr-5 max-w-7xl m-auto">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
