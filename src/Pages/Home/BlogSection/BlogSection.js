import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from './Blog';
import "./blogSection.css";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    });
    const sliceBlogs = blogs.slice(0, 6);
    return (
        <Container className="mt-4">
            <section className="blogSection">
                <p className="text-primary m-0 fw-bold">Articles</p>
                <h2>Our Latest News</h2>
                <div className="sectionLine mb-4"></div>
                <Row sm={1} md={3} className="g-3">
                    {
                        sliceBlogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        />)
                    }
                </Row>
            </section>
        </Container>
    );
};

export default BlogSection;