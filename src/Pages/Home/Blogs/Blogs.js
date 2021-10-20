import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UseBlogs from '../../../Components/Hooks/UseBlogs';
import Blog from '../BlogSection/Blog';

const Blogs = () => {
    const blogs = UseBlogs();
    return (
        <Container className="mt-4">
            <section className="blogSection">
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

export default Blogs;