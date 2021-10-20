import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./service.css";


const Service = (props) => {
    const { title, description, img } = props.service;

    return (
        <Col className="p-3">
            <Card className="p-2">
                <div className="text-center">
                    <img src={img} className="service-img" alt="" />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 30)}...
                    </Card.Text>
                    <Link to={`/service/${title}`} className="text-decoration-none" >Read More <i className="fas fa-angle-double-right"></i></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;