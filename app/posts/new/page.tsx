import NewPost from '@/components/NewPost'
import type { Metadata } from 'next'
import React from 'react'

export const maxDuration = 300;

export const metadata: Metadata = {
    title: 'Създаване на статии | Промяна AI',
    description: 'Създайте и публикувайте вълнуващи статии в областта на технологиите и изкуствения интелект с нашите лесни за използване инструменти за редактиране. Платформата ни е идеалното място за споделяне на иновативни идеи и научни постижения, допринасящи за технологичния прогрес.',
    keywords: 'създаване на технологични статии, публикуване на статии, редактиране на статии, споделяне на иновации, технологични идеи, авторски платформи, контрибуция в технологии',
    alternates: {
        canonical: `https://promiana-ai.com/posts/new`,
    },
    openGraph: {
      images: `https://www.promiana-ai.com/opengraph-image.png`,
  }
}

  
function NewPostPage() {
  return (
    <NewPost />
  )
}

export default NewPostPage