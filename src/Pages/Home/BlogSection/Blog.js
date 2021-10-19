import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { title, description, img } = props.blog;
    return (
        <Col>
            <Card>
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <p>{description.slice(0, 60)}</p>
                    <Link to="/single_blog">Read More <i className="fas fa-angle-double-right"></i></Link>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default Blog;