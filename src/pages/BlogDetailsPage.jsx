import React, {Fragment, Suspense} from 'react';
import LazyLoader from "../utils/LazyLoader";
import BlogDetails from "../components/BlogDetails";

const BlogDetailsPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <BlogDetails/>
            </Suspense>    
        </Fragment>
    );
};

export default BlogDetailsPage;