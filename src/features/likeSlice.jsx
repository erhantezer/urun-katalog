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

        deleteLike:(state) => {
            state.likes = [];
        },
}
});

export const { likeProduct, unLikeProduct, deleteLike } = likeSlice.actions;

export default likeSlice.reducer;