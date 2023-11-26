import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Промяна AI',
  description: 'Открийте най-новите тенденции и иновации в света на изкуствения интелект на нашия технологичен портал. Предлагаме задълбочени анализи, експертни мнения и последни новини, които оформят бъдещето на технологиите. Станете част от нашата общност на ентусиасти и експерти, за да останете в челните редици на технологичния прогрес.',
  keywords: 'изкуствен интелект, технологични новини, иновации в технологиите, анализи на технологии, технологичен портал, бъдещето на технологиите, технологична общност',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bg">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
