import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <Container className="py-2 text-success border border-1" fluid>
            <Row md={2} lg={4} className="my-auto">
                <Col>
                    <div><i class="fas fa-map-marker-alt"></i> Banglabazar, Noakhali</div>
                </Col>
                <Col>
                    <div><i class="fas fa-phone"></i> any question: 01812-435207</div>
                </Col>
                <Col>
                    <div><i class="fas fa-envelope"></i> mojumdarnb@gmail.com</div>
                </Col>
                <Col>
                    <div>
                        <i class="fab fa-facebook btn-success p-2 rounded-circle me-2"></i>
                        <i class="fab fa-youtube btn-success p-2 rounded-circle me-2"></i>
                        <i class="fab fa-instagram btn-success p-2 rounded-circle me-2"></i>
                        <i class="fab fa-twitter btn-success p-2 rounded-circle me-2"></i>
                        <i class="fab fa-linkedin p-2 btn-success rounded-circle me-2"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopHeader;