import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = (props) => {
    const { blogtitle } = props.blog;
    return (
        <li>
            <Link to={`/blog/${blogtitle}`} className="d-flex justify-content-between">
                <p className="fw-bold m-0">{blogtitle}</p>
                <i className="fas fa-chevron-right my-auto"></i>
            </Link>
        </li>
    );
};

export default BlogDetails;