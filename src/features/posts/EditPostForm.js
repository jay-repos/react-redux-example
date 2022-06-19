import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { postUpdated, selectPostById } from './postsSlice'


export const EditPostForm = () => {
    const postId = useParams().postId
    const post = useSelector(state => selectPostById(state, postId))
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated(
                { id: postId, title: title, content: content }
            ))
            navigate(`/react-redux-example/posts/${postId}`)
        }
    }

    return (
        <section className="post">
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind ?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Post Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked} >
                Save Post
            </button>
        </section>
    )
}