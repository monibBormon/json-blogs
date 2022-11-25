import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { blogDetailsApi, blogDetailsCommentApi, blogDetailsUserApi, blogDetailsUserPhotoApi } from '../apis/blogsApi';


const BlogDetails = () => {
    const {id} = useParams()
    const blog = useSelector((state)=>state.blogs.blog);
    const comments = useSelector((state)=>state.blogs.comments);
    const user = useSelector((state)=>state.blogs.user);
    const photo = useSelector((state)=>state.blogs.photo);

    useEffect(()=>{
        (async()=>{
            await blogDetailsApi(id)
            await blogDetailsCommentApi(id)
            await blogDetailsUserApi(id)
            await blogDetailsUserPhotoApi(id)
        })()
    },[])

    return (
        <div className='bg-gray-100 h-screen'>
            <div className="absolute hidden lg:block top-[20%] transform -rotate-90">Blog Details</div>
            <div className="container mx-auto px-5 lg:px-0 py-5">
               <div className=' p-2 bg-white'>
                 <h2 className='text-4xl mb-2'>{blog.title}</h2>
                 <p>{blog.body}</p>
                 <div className="comments mt-3">
                    <h4 className='text-xl font-semibold text-gray-600'>Comments</h4>
                    {
                        comments?.map((comment,i)=><div className='shadow p-2 my-2 rounded' key={i}>
                            <h4>Email: {comment.email}</h4>
                            <p>Comment: {comment.body}</p>
                        </div>)
                    }
                 </div>
                 <div className="author mt-5">
                    <h4 className='text-xl text-gray-500 font-semibold'>Author</h4>
                    <div>
                        <img className='w-16 rounded-full' src={photo?.thumbnailUrl} alt={photo.title} />
                        <div>
                            <h4>{user?.name}</h4>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default BlogDetails;