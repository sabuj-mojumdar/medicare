import React from 'react';
import { Col, Card } from 'react-bootstrap';

const OCTMedicines = (props) => {
    const { name, img } = props.medicine;
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

export default OCTMedicines;