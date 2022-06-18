import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from 'date-fns'

const initialPost = [
    {
        id: '1',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        title: 'First Post!',
        content: 'Hello world',
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        }
    },
    {
        id: '2',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        title: 'Second Post!',
        content: 'The journey starts!',
        reactions: {
            thumbsUp: 0,
            hooray: 0,
            heart: 0,
            rocket: 0,
            eyes: 0
        }
    }
]

const initialState = {
    posts: initialPost,
    status: 'idle',
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action){
                state.posts.push(action.payload)
            },
            prepare(title,content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title: title,
                        content: content,
                        user: userId,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0
                        }
                    }
                }
            }
        },
        postUpdated(state, action){
            const { id, title, content } = action.payload
            const existPost = state.posts.find(post => id === post.id)
            if (existPost) {
                existPost.title = title
                existPost.content = content
            }
        },
        reactionAdded(state, action){
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction] += 1
            }
            else {
                console.log(postId)
            }
        }
    }
})

export default postsSlice.reducer
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) => 
    state.posts.posts.find(post => post.id === postId)