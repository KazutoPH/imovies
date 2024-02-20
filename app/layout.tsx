import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

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
    <html lang="en">
      <body className={`${inter.className} bg-dark scroll-smooth  mt-[60px]`}>
        <Header/>
        <div className='pb-10'>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
