import React, {Fragment, Suspense} from 'react';
import LazyLoader from "../utils/LazyLoader";
import Blogs from "../components/Blogs";

const BlogPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Blogs/>
            </Suspense>    
        </Fragment>
    );
};

export default BlogPage;