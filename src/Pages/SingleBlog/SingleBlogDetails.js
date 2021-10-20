import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UseBlogs from '../../Components/Hooks/UseBlogs';
import BlogDetails from './BlogDetails';

const SingleBlogDetails = (props) => {
    const blogs = UseBlogs();
    const { blogtitle, description, img } = props.data;
    return (
        <Container fluid className="text-start">
            <Row>
                <div className="blog-title mb-3">
                    <h1>{blogtitle}</h1>
                </div>
            </Row>
            <Row className="g-3">
                <Col sm={3} className="blog-title-area">
                    <ul className="mt-3">
                        {
                            blogs.map(blog => <BlogDetails
                                key={blog.id}
                                blog={blog}
                            />)
                        }
                    </ul>
                </Col>
                <Col sm={9} className="blog-details-area">
                    {
                        blogs.filter(blog => blog.blogtitle === blogtitle)
                            .map(data => (
                                <div className="blog-details">
                                    <img src={img} className="titleImg" alt="" />
                                    <h1 className="text-center">{blogtitle}</h1>
                                    <div className="sectionLine mb-4"></div>
                                    <p className="justify">{description}</p>
                                </div>
                            ))
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBlogDetails;