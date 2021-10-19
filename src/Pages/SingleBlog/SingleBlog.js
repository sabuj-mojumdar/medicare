import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../SingleService/SingleService.css";
import blogimg from "../../img/hero/slider1.jpg";
import BlogDetails from './BlogDetails';

const SingleBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("./blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    })
    return (
        <Container fluid className="text-start">
            <Row>
                <div className="blog-title mb-3">
                    <h1>In our clinic discounts for a full inspection</h1>
                </div>
            </Row>
            <Row className="g-3">
                <Col sm={3} className="blog-title-area">
                    <ul className="mt-3">
                        {
                            blogs.map(blog =>

                                <BlogDetails
                                    key={blog.id}
                                    blog={blog}
                                />)
                        }
                    </ul>
                </Col>
                <Col sm={9} className="blog-details-area">
                    <div className="blog-details">
                        <img src={blogimg} width="100%" alt="" />
                        <h1 className="text-center">In our clinic discounts for a full inspection</h1>
                        <div className="sectionLine mb-4"></div>
                        <p className="justify">Yamagata Dhaka Friendship General Hospital Better Health of Kentucky keeps your personal and health information safe and private. We are required by law to give you the Notice of Privacy Practices. This notice explains your rights about the privacy of your personal information and how we may use and share your personal information. Changes to this notice apply to the information that we have about you. This also applies to any information that we may get or have in the future. Our privacy policy also makes sure Yamagata Dhaka Friendship General Hospital Better Health of hospital staff is trained on privacy and security policies, which include oral protection of your personal information. You may request a copy at any time.

                            Yamagata Dhaka Friendship General Hospital Better Health and your providers make sure all your records are kept safe and private. Yamagata Dhaka Friendship General Hospital Better Health limits access to your personal information to only those who need it. We have proper protection for entry to our buildings and computer systems. Our Privacy Office also makes sure our staff is trained on our privacy and security policies.

                            To give the best service, we may use and share your personal information for treatment, payment and operations. We may limit the information Yamagata Dhaka Friendship General Hospital Better Health shares about you as the law requires. Our privacy policies always follow the strictest laws.

                            In the provider’s office, your records are labeled with your name and stored in a safe area so unauthorized individuals cannot see your information. If your medical information is on a computer, a special password is needed to see that information.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBlog;