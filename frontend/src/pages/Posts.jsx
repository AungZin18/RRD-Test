import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Postitem from '../components/Postitem'

const Posts = () => {
    const posts = useLoaderData()
    return (
        <>
      {
        posts.length >0 && posts.map(post=>
           (
                <Postitem post={post} key={post.id}/>
            )
        )
      }
        </>
    )
}

export default Posts

export const loader = async () => {
    const response = await fetch("http://localhost:8080/posts")
    if (!response.ok) {

    } else {
        const data = await response.json()
        
        return data.posts
    }
}