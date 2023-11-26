import React from 'react';
import Link from 'next/link';
import supabase from '../../utils/supabase'
import Post from '@/components/Post';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Статии | Промяна AI',
    description: 'Разгледайте нашата обширна колекция от статии в областта на технологиите и изкуствения интелект. Тук ще намерите последните новини, дълбоки анализи и иновативни идеи от водещи експерти. Открийте статии, които обхващат широк спектър от теми, включително последни разработки, научни изследвания и бъдещите тенденции в технологиите.',
    keywords: 'технологични статии, актуални технологични новини, иновации в изкуствения интелект, научни изследвания в технологии, експертни мнения в технологии, развитие на технологиите, анализи и тенденции в технологиите',
    alternates: {
        canonical: `https://promiana-ai.com/posts`,
    },
}

export const revalidate = 0

export default async function Posts() {
    const { data: posts } = await supabase.from('posts').select('*')

    if (!posts) {
        return <p>No posts found.</p>
    }


    return (
        <div>
            <h1 className='text-3xl pl-10 pt-10'>Скорошни статии на тема ИИ</h1>
            <div className='flex flex-grow justify-end p-10'>
                <Link href="/posts/new" className='btn'>Създай статия</Link>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-10'>
                {posts.length > 0 ? posts.map(article => (
                    <div key={article.id}>
                        <Post
                            id={article.id}
                            title={article.title}
                            description={article.short_description}
                            author={article.author}
                            tags={article.tags}
                        />
                    </div>
                )) : <div>Няма статии</div>}
            </div>
        </div>
    );
}