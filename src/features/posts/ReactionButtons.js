import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const ReactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionbuttons = Object.entries(ReactionEmoji).map(([name ,emoji]) => {
        return (
            <button 
                key={name} 
                type="button" 
                className="muted-button reaction-button"
                onClick = { () => {
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }}
            >
                {emoji}{post.reactions[name]}
            </button>
        )
    })
    return <div>{reactionbuttons}</div>
}