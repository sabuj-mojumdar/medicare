import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { title, description, comments, img, date, user } = props.blog;
    return (
        <Col>
            <Card>
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <p>{description.slice(0, 60)}</p>
                    <Link to="/blog">Read More <i class="fas fa-angle-double-right"></i></Link>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default Blog;