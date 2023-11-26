"use client"

import { useRouter } from 'next/navigation'; // Коригиране на импорта
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useFormState } from 'react-dom';
import { createPost } from '@/server/postsActions'; // Проверете пътя до този импорт

// Динамичен импорт на react-quill, за да се избегне SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // Импорт на стиловете на Quill

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

    return (
        <div className="p-4 bg-white">
            <div className="mt-4 p-4 max-w-lg mx-auto bg-gray-50 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Създай статия</h2>
                <button type="button" onClick={handleCancel} className="link mt-5">
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

                        <button type="submit" className="btn btn-primary text-white hover:text-black">
                            Създай статия
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;