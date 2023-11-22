"use server"

import { createClient } from '@supabase/supabase-js';
import z from 'zod';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
//@ts-ignore
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);


// Function to get all posts
export async function getAllPosts() {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('id, title, short_description, author, tags'); // Selects all columns from the 'posts' table

        if (error) {
            throw error;
        }
        console.log(data);
        return { success: true, posts: data };
    } catch (error) {
        console.error("Error fetching posts: ", error);
        //@ts-ignore
        return { success: false, error: error.message };
    }
}

export async function createPost(prevState: any, formData: FormData) {
    const postSchema = z.object({
        postTitle: z.string().nonempty(),
        shortDescription: z.string().nonempty(),
        postText: z.string().nonempty(),
        authorName: z.string().nonempty(),
        postTags: z.string().nonempty(),
    });

    let postData;
    try {
        postData = postSchema.parse({
            postTitle: formData.get("postTitle"),
            shortDescription: formData.get("shortDescription"),
            postText: formData.get("postText"),
            authorName: formData.get("authorName"),
            postTags: formData.get("postTags"),
            // Parse other fields as needed
        });
    } catch (error) {
        console.error("Validation error: ", error);
        return { success: false, error: "Data validation failed" };
    }

    try {
        // Insert the new group into the 'posts' table
        const { data, error } = await supabase
            .from('posts')
            .insert([{
                title: postData.postTitle,
                short_description: postData.shortDescription,
                post_text: postData.postText,
                author: postData.authorName, 
                tags: postData.postTags, 
                // Include other fields as needed
            }]);

        if (error) {
            throw error;
        }

        console.log("Post created:", data);
        return { success: true, group: data };
    } catch (error) {
        console.error("Post creation error: ", error);
        //@ts-ignore
        return { success: false, error: error.message };
    }
}

// Във вашата сървърна част (примерно в същия файл)
//@ts-ignore
export async function getPostById(postId) {
    try {
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .eq('id', postId)
            .single();

        if (error) {
            throw error;
        }

        return { success: true, post: data };
    } catch (error) {
        console.error("Error fetching post: ", error);
        //@ts-ignore
        return { success: false, error: error.message };
    }
}
