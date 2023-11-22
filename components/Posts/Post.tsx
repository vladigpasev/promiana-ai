import Link from 'next/link';
import React from 'react';

type PostsProps = {
    id: number;
    title: string;
    description: string;
    author: string;
    tags: string; // Добавено свойство за таговете
};

function Post({ id, title, description, author, tags }: PostsProps) {
    const tagList = tags.split(',').map(tag => tag.trim());

    return (
        <div>
            <div className="card w-[100%] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>

                    <div className="flex flex-row mt-2">
                        <svg width="15px" height="25px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ic_fluent_person_48_filled</title> <desc>Created with Sketch.</desc> <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_person_48_filled" fill="#212121" fill-rule="nonzero"> <path d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color"> </path> </g> </g> </g></svg>
                        <p className='ml-1'>{author}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="card-actions">
                            <Link className="btn btn-primary" href={"/posts/post/" + id}>More</Link>
                        </div>
                    </div>
                    <div className="card-actions justify-end mt-5">
                        {tagList.map((tag, index) => (
                            <div key={index} className="badge badge-outline"># {tag}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
