import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from '../slices/blogsSlice';
import settingsReducer from '../slices/settingsSlice';

export default configureStore({
    reducer:{
        blogs:blogsReducer,
        settings:settingsReducer
    }
})