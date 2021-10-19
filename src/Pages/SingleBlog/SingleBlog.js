import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import "../SingleService/SingleService.css";
import blogimg from "../../img/hero/slider1.jpg";
import { Link } from 'react-router-dom';

const SingleBlog = () => {
    return (
        <Container fluid className="text-start">
            <Row>
                <div className="blog-title mb-3">
                    <h1>This is blog Title</h1>
                </div>
            </Row>
            <Row className="g-3">
                <Col sm={3} className="blog-title-area">
                    <Form>
                        <input type="search" name="" id="" placeholder="Serach" />

                    </Form>
                    <ul className="mt-3">
                        <li>
                            <Link to="/single_service" className="d-flex justify-content-between">
                                <p className="fw-bold m-0">blog-title1</p>
                                <i className="fas fa-chevron-right my-auto"></i>
                            </Link></li>

                    </ul>
                </Col>
                <Col sm={9} className="blog-details-area">
                    <div className="blog-details">
                        <img src={blogimg} width="100%" alt="" />
                        <h1 className="text-center">Blog Title</h1>
                        <div className="sectionLine mb-4"></div>
                        <p className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias quisquam accusamus sequi facilis reiciendis qui ab tempore voluptates, explicabo iusto minima recusandae eligendi reprehenderit eos architecto quam iste omnis ut ea odio veniam pariatur. Cupiditate, voluptatibus minus impedit voluptatem eligendi qui repellendus recusandae nesciunt. Corrupti doloremque odit provident odio voluptatibus molestias eaque natus dolorem laborum adipisci magni eveniet recusandae voluptatum quam quas illum amet doloribus esse neque totam, ab nihil. Obcaecati numquam dignissimos beatae aliquam quaerat eligendi, fugiat doloribus odit nobis maiores, perspiciatis possimus voluptates tempora, consequuntur temporibus voluptas incidunt fugit. Fugiat accusamus labore nam molestias facilis quam veniam.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SingleBlog;