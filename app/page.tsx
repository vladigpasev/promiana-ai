import Features from '@/components/Features'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Промяна AI',
  description: 'Открийте най-новите тенденции и иновации в света на изкуствения интелект на нашия технологичен портал. Предлагаме задълбочени анализи, експертни мнения и последни новини, които оформят бъдещето на технологиите. Станете част от нашата общност на ентусиасти и експерти, за да останете в челните редици на технологичния прогрес.',
  keywords: 'изкуствен интелект, технологични новини, иновации в технологиите, анализи на технологии, технологичен портал, бъдещето на технологиите, технологична общност',
  openGraph: {
    images: `https://www.promiana-ai.com/opengraph-image.png`,
  }
}
function Home() {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  )
}

export default Home