import React from 'react';
import { useParams } from 'react-router';
import UseBlogs from '../../Components/Hooks/UseBlogs';
import SingleBlogDetails from './SingleBlogDetails';

const SingleBlog = () => {
    const { blogtitle } = useParams();
    const blogs = UseBlogs();
    return (
        <>
            {
                blogs.filter(blog => blog.blogtitle === blogtitle)
                    .map(data => (
                        <SingleBlogDetails
                            key={data.id}
                            data={data}
                        />
                    ))
            }
        </>
    );
};

export default SingleBlog;