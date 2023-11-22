"use client";

import React, { useEffect, useState } from 'react';
import Post from './Post';
import Link from 'next/link';

// Примерна структура на статия
interface Article {
    id: number;
    title: string;
    short_description: string;
    author: string;
    tags: string;
    // Добавете други полета, ако е необходимо
}

// Предполагаме, че имате функция за извличане на статии
// Моля, заменете 'getAllPosts' с реалната функция, която имате
import { getAllPosts } from '@/server/postsActions';

function Posts() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getAllPosts();
                if (data.posts !== undefined) {
                    setArticles(data.posts);
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1 className='text-3xl pl-10 pt-10'>Скорошни статии на тема ИИ</h1>
            <div className='flex flex-grow justify-end p-10'><Link href="/posts/new" className='btn'>Създай статия</Link></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-10'>
                {articles.map(article => (
                    <Post
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        description={article.short_description}
                        author={article.author}
                        tags={article.tags}
                    />
                ))}
            </div>
        </div>
    );
}

export default Posts;
