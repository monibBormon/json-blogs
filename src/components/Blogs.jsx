import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsersApi, getBlogsApi, getCommentsApi } from '../apis/blogsApi';
import SingleBlog from './SingleBlog';

const Blogs = () => {
    const data = useSelector((state)=>state.blogs.blogList)

    useEffect(()=>{
        (async()=>{
            await getBlogsApi()
            await getCommentsApi()
            await getAllUsersApi()
        })()
    },[])

    return (
        <div className='container mx-auto px-5 lg:px-0 py-5'>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    data?.slice(0,20)?.map((blog,i)=><SingleBlog key={i} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;