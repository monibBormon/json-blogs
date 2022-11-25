import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow py-2 bg-blue-100'>
            <div className="container mx-auto px-5 lg:px-0">
                <Link to='/'><h5 className='text-blue-600 font-semibold'>JsonPlaceholderBlogs.com</h5></Link>
            </div>
        </div>
    );
};

export default Header;