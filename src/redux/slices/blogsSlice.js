import { createSlice } from "@reduxjs/toolkit";
import cogoToast from "cogo-toast";

export const blogsSlice = createSlice({
    name:"blogs",
    initialState:{
        blogList:[],
        commentList:[],
        userList:[],
        blog:{},
        comments:[],
        user:{},
        photo:{}
    },
    reducers:{
        setBlogList:(state,action)=>{
            state.blogList = action.payload;
        },
        setCommentList:(state,action)=>{
            state.commentList = action.payload;
        },
        setUserList:(state,action)=>{
            state.userList = action.payload;
        },
        setSingleBlog:(state,action)=>{
            state.blog = action.payload;
        },
        setSingleComment:(state,action)=>{
            state.comments = action.payload;
        },
        setSingleUser:(state,action)=>{
            state.user = action.payload;
        },
        setSinglePhoto:(state,action)=>{
            state.photo = action.payload;
        },
        removeBlog:(state,action)=>{
            const newBlogs = state.blogList.filter(blog=>blog.id !== action.payload)
            state.blogList = newBlogs;
            cogoToast.error("Blog Remove Success!")
        }
    }
})

export const {setBlogList,setCommentList,setUserList,setSingleBlog,setSingleComment,setSinglePhoto,setSingleUser,removeBlog} = blogsSlice.actions;
export default blogsSlice.reducer;