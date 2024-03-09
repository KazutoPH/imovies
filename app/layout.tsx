import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Modal from '@/components/modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iMovies',
  description: 'A Movie Collection App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" id="maincontainer" className='flex flex-1 flex-col min-h-screen'>
      <body className={`${inter.className} bg-dark scroll-smooth flex flex-1 min-h-full flex-col mt-[60px]`}>
        <Header/>
        <div className='pb-10 h-full flex flex-col flex-1'>
          {children}
        </div>
        <Footer/>
        <Modal />
        </body>
    </html>
  )
}
