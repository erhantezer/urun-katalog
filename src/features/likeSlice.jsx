import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: [],
}

export const likeSlice = createSlice({
    name: "like", 
    initialState, 
    reducers: {
        likeProduct: (state, action) => {
            state.likes.push(action.payload)
        },
        unLikeProduct: (state, action) => {
            state.likes= state.likes.filter((l) => l!== action.payload)
        },
        
}
})