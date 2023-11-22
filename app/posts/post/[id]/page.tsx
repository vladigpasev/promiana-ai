import PostDetails from '@/components/Posts/PostDetails/PostDetails'
import React from 'react'

function PostPage({ params }: { params: { id: string } }) {
    
  return (
    //@ts-ignore
    <PostDetails id={params.id}/>
  )
}

export default PostPage