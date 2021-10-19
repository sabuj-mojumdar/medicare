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
    })
    return (
        <Container>
            <section className="blogSection">
                <p className="text-primary m-0 fw-bold">Articles</p>
                <h2>Our Latest News</h2>
                <div className="sectionLine mb-4"></div>
                <Row lg={3} className="g-3">
                    {
                        blogs.map(blog => <Blog
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