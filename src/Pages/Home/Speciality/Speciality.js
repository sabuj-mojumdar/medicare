import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Speciality = () => {
    return (
        <Container>
            <Row>
                <h1>What's Our Speciality</h1>
                <div className="d-flex justify-content-evenly">
                    <p>Modern Technology</p>
                    <p>Success of Treatment</p>
                    <p>Certified Doctor</p>
                </div>
            </Row>
        </Container>
    );
};

export default Speciality;