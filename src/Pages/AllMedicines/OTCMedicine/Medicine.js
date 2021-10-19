import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Medicine = (props) => {
    const { name, type, company, price, prevPrice, img } = props.medicine;
    return (
        <Col>
            <Card>
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Medicine;