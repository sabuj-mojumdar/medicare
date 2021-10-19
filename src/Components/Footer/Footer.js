import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container className="text-white text-start p-3">
                <Row md={3} lg={4} sm={2} className="border border-top-0 border-start-0 border-end-0">
                    <Col>
                        <Link to="/" className="footer-logo fs-3 fw-bold text-white text-decoration-none p-1">Medicare Hospital</Link>
                        <p>We are ipsum dolor sit amet aeeatt consectetuer adipiscing elitseder diam nonummy.</p>
                        <p><i className="fas fa-map-marker-alt"></i> Banglabazar, Noakhali</p>
                        <p><i className="fas fa-phone"></i> any question: 01812-435207</p>
                        <p><i className="fas fa-envelope"></i> mojumdarnb@gmail.com</p>
                    </Col>
                    <Col>
                        <h3>Departments</h3>
                        <div className="underline">   </div>
                        <p>Who We Are</p>
                        <p>Our Mission</p>
                        <p>Awards</p>
                        <p>Experience</p>
                        <p>Success Story</p>
                    </Col>
                    <Col className="quickLink">
                        <h3>Quick Links</h3>
                        <div className="underline">   </div>
                        <p><Link to="/home">Home</Link></p>
                        <p><Link to="/allservices">All Services</Link></p>
                        <p><Link to="/blogs">All Blogs</Link></p>
                        <p><Link to="/onlinedoctor">Online Doctor</Link> </p>
                        <p><Link to="/login">Login</Link> </p>
                    </Col>
                    <Col>
                        <h3>Opening Hours</h3>
                        <div className="underline">   </div>
                        <Row lg={2}>
                            <Col md={6}>Monday</Col>
                            <Col md={6}>09:00  - 10.00 </Col>
                            <Col md={6}>Tuesday</Col>
                            <Col md={6}>09:00  - 10.00 </Col>
                            <Col md={6}>Wednesday</Col>
                            <Col md={6}>09:00  - 10.00 </Col>
                            <Col md={6}>Thursday</Col>
                            <Col md={6}>09:00  - 10.00 </Col>
                            <Col md={6}>Friday</Col>
                            <Col md={6}>09:00  - 10.00 </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="py-3">
                    <Col lg={6}>
                        <h4>Follow Us:  </h4>
                        <div>
                            <i className="fab fa-facebook btn-success p-2 rounded-circle mx-2"></i>
                            <i className="fab fa-youtube btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-instagram btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-twitter btn-success p-2 rounded-circle me-2"></i>
                            <i className="fab fa-linkedin p-2 btn-success rounded-circle me-2"></i>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h4>Sign in and don’t miss anything!</h4>
                        <div className="d-flex">
                            <input type="text" className="form-control w-50 rounded-0" placeholder="Your Email" />
                            <input type="submit" value="Subscribe" className="btn btn-primary w-25 rounded-0" />
                        </div>
                    </Col>
                </Row>
                <Row className="pt-2 text-center border border-1 border-bottom-0 border-start-0 border-end-0">
                    <h6>© Copyright MediCareApp. All Right Reserved. Designed and Developed by Sabuj Majumdar</h6>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;