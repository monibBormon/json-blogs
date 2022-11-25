import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaCommentAlt, FaTrashAlt} from 'react-icons/fa';
import { removeBlog } from '../redux/slices/blogsSlice';
import { DeleteAlert } from '../utils/DeleteAlert';

const SingleBlog = ({blog}) => {
    const dispatch = useDispatch();
    const comments = useSelector((state)=>state.blogs.commentList);
    const users = useSelector((state)=>state.blogs.userList);
    const totalComment = comments.filter(comment=>comment.postId===blog.id).length;
    const user = users.filter(item=>item.id===blog.userId);

    const handleDelete=async(id)=>{
       const result = await DeleteAlert()
       if(result.isConfirmed){
         dispatch(removeBlog(id))
       }
    }
    
    return (
        <div className='shadow-lg p-5 border rounded relative'>
            <FaTrashAlt className='absolute right-2 top-2 text-red-500 text-sm cursor-pointer' onClick={()=>handleDelete(blog.id)}/>
            <Link to={`/blog-details/${blog.id}`}><h4 className='text-2xl cursor-pointer capitalize overflow-hidden text-ellipsis whitespace-nowrap'>{blog.title}</h4></Link>
            <div className='flex justify-between items-center my-2'>
                {
                    user?.map(i=><span className='text-sm' key={i.id}>Author:- <span className='underline'>{i.name}</span></span>)
                }
                <span className='flex items-center space-x-2 text-sm'><FaCommentAlt className='text-gray-400'/> ({totalComment})</span>
            </div>
            <p>{blog.body}</p>
        </div>
    );
};

export default SingleBlog;