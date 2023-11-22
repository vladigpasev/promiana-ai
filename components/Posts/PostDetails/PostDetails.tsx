"use client"
import React, { useEffect, useState } from 'react';
import { getPostById } from '@/server/postsActions';
type PostType = {
    id: number;
    title: string;
    short_description: string;
    post_text: string;
    author: string;
    tags: string;
    created_at: string;
};
type PostDetailsProps = {
    id: number; // Assuming id is a number
};

function PostDetails({ id }: PostDetailsProps) {
    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(id);
                if (response.success) {
                    setPost(response.post);
                } else {
                    console.log("Error fetching post:", response.error);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        // Промяна на локала на 'bg-BG' за български език
        return new Intl.DateTimeFormat('bg-BG', options).format(new Date(dateString));
    };
    
    const tags = post.tags ? post.tags.split(',').map(tag => tag.trim()) : [];

    // Тук добавете Tailwind CSS и DaisyUI дизайн
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4">
                    <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                    <p className="text-gray-700 mb-4">Кратко описание: {post.short_description}</p>
                    <p className="text-gray-700 mb-4">---</p>
                    <div className="prose max-w-none mb-4" dangerouslySetInnerHTML={{ __html: post.post_text }}></div>
                    <p className="text-gray-700 mb-4">---</p>
                    <div className="flex items-center mb-4">
                        <svg className="h-6 w-6 fill-current text-gray-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                        <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"># {tag}</span>
                        ))}
                    </div>
                    <p className="text-gray-600 text-sm mt-4">Публикувана на {formatDate(post.created_at)}</p>
                </div>
            </div>
        </div>
    );
}


export default PostDetails;
