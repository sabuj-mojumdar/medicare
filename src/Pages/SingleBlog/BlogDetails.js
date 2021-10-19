import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = (props) => {
    const { title } = props.blog;
    return (
        <li>
            <Link to="/blogs" className="d-flex justify-content-between">
                <p className="fw-bold m-0">{title}</p>
                <i className="fas fa-chevron-right my-auto"></i>
            </Link>
        </li>
    );
};

export default BlogDetails;