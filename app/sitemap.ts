import supabase from "@/utils/supabase";

export const revalidate = 0;

export default async function sitemap() {
    const baseUrl = 'https://promiana-ai.com';
    const { data: posts } = await supabase.from('posts').select('*');

    // Сортиране на постовете по дата на създаване и вземане на последната дата
    const latestPost = posts?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
    const latestPostDate = latestPost ? new Date(latestPost.created_at) : new Date();
    
    const postUrls = posts?.map((post) => {
        return {
            url: `${baseUrl}/posts/${post.id}`,
            lastModified: new Date(post.created_at),
            changeFrequency: 'yearly',
            priority: 0.7,
        };
    }) ?? [];

    const lastUpdatedHomepage = new Date('2023-11-26T20:31:29'); // Задайте датата и часа на последното обновление
    const lastUpdatedNewPostPage = new Date('2023-11-26T20:31:29'); // Задайте датата и часа на последното обновление
    const lastUpdatedTerms = new Date('2023-11-26T20:31:29'); // Modify as needed
    const lastUpdatedPrivacy = new Date('2023-11-26T20:31:29'); // Modify as needed
    const lastUpdatedCookies = new Date('2023-11-26T20:31:29'); // Modify as needed

    return [
        {
            url: baseUrl,
            lastModified: lastUpdatedHomepage,
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: baseUrl + '/posts',
            lastModified: latestPostDate,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        {
            url: baseUrl + '/posts/new',
            lastModified: lastUpdatedNewPostPage,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: baseUrl + '/terms-of-use',
            lastModified: lastUpdatedTerms,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: baseUrl + '/privacy-policy',
            lastModified: lastUpdatedPrivacy,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: baseUrl + '/cookies-policy',
            lastModified: lastUpdatedCookies,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        ...postUrls,
    ]
}