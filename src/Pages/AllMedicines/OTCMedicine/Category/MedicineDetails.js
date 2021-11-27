import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const MedicineDetails = (props) => {
    const { drugName, type, category, company, price, prevPrice, img } = props.category;
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt={drugName} />
                <Card.Body>
                    <Card.Title>{drugName}</Card.Title>
                    <Card.Text>
                        {type} {category} {company} {price} {prevPrice}
                    </Card.Text>
                    <Button variant="primary">Add To cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MedicineDetails;