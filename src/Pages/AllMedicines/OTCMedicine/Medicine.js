import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Medicine = (props) => {
    const { categoryName, categoryImg } = props.medicine;
    return (
        <Col>
            <Card>
                <Card.Img src={categoryImg} />
                <Card.Body>
                    <Card.Title>
                        <Link to={`/otcmedicines/${categoryName}`}>{categoryName}</Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Medicine;