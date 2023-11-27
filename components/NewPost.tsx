"use client"

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useFormState } from 'react-dom';
import { createPost } from '@/server/postsActions';
import { generateArticleContent } from '@/server/postsActions';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

function NewPost() {
    const [formData, setFormData] = useState({
        postTitle: '',
        shortDescription: '',
        postText: '',
        authorName: '',
        postTags: '',
        postImage: '',
    });

    const initialState = {
        message: null,
        success: false,
        error: false
    }

    const [state, formAction] = useFormState(createPost, initialState);
    const [shortDescription, setShortDescription] = useState('');
    const [postTags, setPostTags] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // Проверка дали поне едно поле има стойност преди запис в localStorage
        const hasData = Object.values(formData).some(value => value.trim() !== '');
        if (hasData) {
            localStorage.setItem('newPost', JSON.stringify(formData));
        }
    }, [formData]);


    useEffect(() => {
        const savedPost = localStorage.getItem('newPost');
        console.log("Заредено от localStorage:", savedPost);
        if (savedPost) {
            setFormData(JSON.parse(savedPost));
        }
    }, []);

    //@ts-ignore
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`handleChange: ${name} = ${value}`); // Дебъг принт
        setFormData({ ...formData, [name]: value });
    };
    //@ts-ignore
    const handleQuillChange = (value) => {
        console.log(`handleQuillChange: postText = ${value}`); // Дебъг принт
        setFormData({ ...formData, postText: value });
    };

    const handleCancel = () => {
        // Изчистване на формата и localStorage
        setFormData({
            postTitle: '',
            shortDescription: '',
            postText: '',
            authorName: '',
            postTags: '',
            postImage: '',
        });
        localStorage.removeItem('newPost');
    };

    useEffect(() => {
        if (state.success) {
            router.replace('/posts');
            localStorage.removeItem('newPost'); // При успешно създаване изчистваме localStorage
        }
    }, [state.success]);

    const generateContent = async () => {
        setIsLoading(true);
        const content = await generateArticleContent(formData.postTitle);
        console.log(content);
        const [newShortDescription, newPostText, newPostTags] = content.split('|||');
    
        setShortDescription(newShortDescription.trim());
        setFormData({ ...formData, postText: newPostText.trim() });
    
        // Check if the last character of newPostTags is a period and remove it if true
        const trimmedTags = newPostTags.trim();
        const tagsWithoutPeriod = trimmedTags.endsWith('.') ? trimmedTags.slice(0, -1) : trimmedTags;
        setPostTags(tagsWithoutPeriod);
    
        setIsLoading(false);
        console.log(formData)
    };
    

    useEffect(() => {
        setFormData(formData => ({ ...formData, shortDescription }));
    }, [shortDescription]);

    useEffect(() => {
        setFormData(formData => ({ ...formData, postTags }));
    }, [postTags]);

    return (
        <div className="p-4 bg-white">
            {isLoading && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="text-white text-center flex flex-col justify-center items-center p-10">
                        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="Loading..." className="w-20 mb-4" />
                        <p className='text-lg mb-5'>Промяна AI генерира статията ти за теб.</p>
                        <p className='text-lg'>Това може да отнеме малко време, но ти можеш да се отпуснеш на дивана, докато чакаш процесът да завърши.</p>
                    </div>
                </div>
            )}

            <div className="mt-4 p-4 max-w-lg mx-auto bg-gray-50 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Създай статия</h2>
                <button type="button" onClick={handleCancel} className="link mt-5" disabled={isLoading}>
                    Отмени промените
                </button>
                <form className="mt-6" action={formAction}>
                    <div className="mb-6">
                        <label htmlFor="postTitle" className="block text-lg font-medium text-gray-700">
                            Заглавие на статия
                        </label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={formData.postTitle}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Напиши заглавие на статия"
                        />
                    </div>
                    <button type="button" onClick={generateContent} className="btn btn-secondary mb-5" disabled={isLoading}>
                        Генерирай статия
                    </button>
                    <div className="mb-6">
                        <label htmlFor="shortDescription" className="block text-lg font-medium text-gray-700">
                            Кратко описание
                        </label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Напиши кратко описание"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="postText" className="block text-lg font-medium text-gray-700">
                            Текст на статия
                        </label>
                        <ReactQuill
                            theme="snow"
                            value={formData.postText}
                            onChange={handleQuillChange}
                            placeholder="Напиши текст на статия"
                        />
                        {/* Скрито поле, което държи стойността на postText */}
                        <input
                            type="hidden"
                            name="postText"
                            value={formData.postText}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="postImage" className="block text-lg font-medium text-gray-700">
                            Снимка на статия (линк) - препоръчва се хоризонтална снимка
                        </label>
                        <input
                            type="text"
                            id="postImage"
                            name="postImage"
                            onChange={handleChange}
                            value={formData.postImage}
                            placeholder='https://google.com/images'
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="authorName" className="block text-lg font-medium text-gray-700">
                            Име на автор
                        </label>
                        <input
                            type="text"
                            id="authorName"
                            name="authorName"
                            value={formData.authorName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Напиши име на автор"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="postTags" className="block text-lg font-medium text-gray-700">
                            Тагове (изброени със запетаи)
                        </label>
                        <input
                            type="text"
                            id="postTags"
                            name="postTags"
                            value={formData.postTags}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Напиши етикети, разделени със запетаи"
                        />
                    </div>

                    <div className="flex flex-col justify-between">

                        <button type="submit" className="btn btn-primary text-white hover:text-black" disabled={isLoading}>
                            Създай статия
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;