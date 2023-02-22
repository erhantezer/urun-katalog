import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../features/likeSlice"

export const store = configureStore({
    reducer: {
        likeReducer,
    }
})