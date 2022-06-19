import React from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from "./ReactionButtons"
import { selectPostById } from "./postsSlice"

export const SinglePostPage = () => {
    const postId = useParams().postId

    const post = useSelector(state => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Page Not Found!</h2>
            </section>
        )
    }
    return (
        <section>
            <article className="post">
                <h2>{post.title}</h2>
                <PostAuthor userId={post.user} />
                <p className="post-content">{post.content}</p>
                < ReactionButtons post={post} />
                <Link to={`/react-redux-example/editPosts/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    )
}