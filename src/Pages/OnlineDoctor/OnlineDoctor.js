import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../img/service/contact_us.png";


const OnlineDoctor = () => {
    return (
        <Container>
            <h1 className="my-5"><span className="fw-bold border border-2 p-2">Contact Our Expert Doctor</span></h1>
            <Row className="mb-5">
                <Col>
                    <img src={img} alt="" /></Col>
                <Col className=" my-auto">
                    <h1 className="bg-primary text-white p-2 rounded-3">Call Us: 01812-435207</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default OnlineDoctor;