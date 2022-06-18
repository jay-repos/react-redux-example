import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '0', name: 'John Wick' },
    { id: '1', name: 'Jason Bourne'},
    { id: '2', name: 'Lucky seven'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer