import axios from "axios"
import { setBlogList,setCommentList, setSingleBlog, setSingleComment, setSinglePhoto, setSingleUser, setUserList } from "../redux/slices/blogsSlice";
import { hideLoader, showLoader } from "../redux/slices/settingsSlice";
import store from "../redux/store/store";


export const getBlogsApi=async()=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20');
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setBlogList(res.data))
        }
    } catch (error) {
        store.dispatch(setBlogList([]))
        store.dispatch(hideLoader())
    }
}
export const getCommentsApi=async()=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setCommentList(res.data))
        }
    } catch (error) {
        store.dispatch(setCommentList([]))
        store.dispatch(hideLoader())
    }
}
export const getAllUsersApi=async()=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setUserList(res.data))
        }
    } catch (error) {
        store.dispatch(setUserList([]))
        store.dispatch(hideLoader())
    }
}

export const blogDetailsApi=async(id)=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setSingleBlog(res.data))
        }
    } catch (error) {
        console.log(error);
        store.dispatch(hideLoader())
    }
}
export const blogDetailsCommentApi=async(id)=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setSingleComment(res.data))
        }
    } catch (error) {
        console.log(error);
        store.dispatch(hideLoader())
    }
}
export const blogDetailsUserApi=async(id)=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setSingleUser(res.data[0]))
        }
    } catch (error) {
        console.log(error);
        store.dispatch(hideLoader())
    }
}
export const blogDetailsUserPhotoApi=async(id)=>{
    try {
        store.dispatch(showLoader())
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?id=${id}`);
        store.dispatch(hideLoader())
        if(res.status===200){
            store.dispatch(setSinglePhoto(res.data[0]))
        }
    } catch (error) {
        console.log(error);
        store.dispatch(hideLoader())
    }
}