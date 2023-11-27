"use server"

import { createClient } from '@supabase/supabase-js';
import z from 'zod';
import OpenAI from 'openai';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
//@ts-ignore
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const openai = new OpenAI({
    organization: "org-aNz8Hs6PinAJZz5FQPF9HbjN",
    apiKey: process.env.OPENAI_API_KEY,
});

export async function createPost(prevState: any, formData: FormData) {
    const postSchema = z.object({
        postTitle: z.string().nonempty(),
        shortDescription: z.string().nonempty(),
        postText: z.string().nonempty(),
        authorName: z.string().nonempty(),
        postTags: z.string().nonempty(),
        postImage: z.string(),
    });

    let postData;
    try {
        postData = postSchema.parse({
            postTitle: formData.get("postTitle"),
            shortDescription: formData.get("shortDescription"),
            postText: formData.get("postText"),
            authorName: formData.get("authorName"),
            postTags: formData.get("postTags"),
            postImage: formData.get("postImage"),
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
                post_image: postData.postImage,
                // Include other fields as needed
            }]);

        if (error) {
            throw error;
        }

        console.log("Post created:", data);
        return { success: true, post: data };
    } catch (error) {
        console.error("Post creation error: ", error);
        //@ts-ignore
        return { success: false, error: error.message };
    }
}
//@ts-ignore
export async function generateArticleContent(title) {
    // const instructions = '\'Article Creator BG\' exclusively generates Bulgarian articles. Upon receiving a title, it creates (The different parts of the article are distinctly separated by \'|||\'.):\
    // 1. A short, SEO-optimized description (up to 25 words).\
    // 2. Main article content, neutral and informative - it should be long.\
    // 3. SEO-optimized tags (up to 15, min 5), separated by commas. These components are provided in plain Bulgarian text.';


    //  const instructions = "'Article Creator BG' should generate Bulgarian articles with the following structure: Start with a short, SEO-optimized description, consisting of 15-25 words. This should be immediately followed by '|||'. Next, provide a longer, detailed, and neutral main article content. After the main content, include another '|||'. Finally, conclude with SEO-optimized tags (minimum 5, maximum 15), separated by commas. The main content section should be significantly more extensive than the other sections, offering comprehensive and in-depth information on the topic.";

    //  const assistant = await openai.beta.assistants.create({
    //      name: "Article Creator BG",
    //      instructions: instructions,
    //      tools: [],
    //      model: "gpt-3.5-turbo-instruct"
    // });

    const thread = await openai.beta.threads.create();

    const message = await openai.beta.threads.messages.create(
        thread.id,
        {
            role: "user",
            content: `Заглавие: ${title}`
        }
    );

    const run = await openai.beta.threads.runs.create(
        thread.id,
        {
            assistant_id: 'asst_qgMep7TrKHBMFCyI4d1NOfnM'
        }
    );

    // Function to check the run status
    const checkRunStatus = async () => {
        try {
            const status = await openai.beta.threads.runs.retrieve(thread.id, run.id);
            return status.status === 'completed';
        } catch (error) {
            console.error("Error checking run status:", error);
            return false;
        }
    };

    // Wait for the run to complete
    let isCompleted = await checkRunStatus();
    while (!isCompleted) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds
        isCompleted = await checkRunStatus();
    }

    // Retrieve messages after run completion
    const messages = await openai.beta.threads.messages.list(thread.id);

    // Filter to get only the assistant's response
    const assistantMessage = messages.data.find(message => message.role === 'assistant');

    // Extract and return the content of the assistant's message
    if (assistantMessage && assistantMessage.content) {
        //@ts-ignore
        const responseText = assistantMessage.content.map(content => content.text.value).join(' ');
        console.log("Assistant's Response: ", responseText);
        return responseText;
    } else {
        console.error("No response from the assistant found");
        return "No response from the assistant found";
    }


    //console.log("Assistant: " + JSON.stringify(assistant));
    console.log("Thread: " + JSON.stringify(thread));
    console.log("Messages: " + JSON.stringify(messages));
    //return (JSON.stringify(assistant));
}