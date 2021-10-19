import React from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';

const Login = () => {
    const { user, signInWithGoogle, signInWithFacebook } = useAuth();


    return (
        <Container className="my-4">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <Form className="form-control m-3">
                        <h1>Login Form</h1>
                        <Row className="mb-2">
                            <Col lg={3} className="text-start my-auto">
                                <label>Your Email</label>
                            </Col>
                            <Col lg={9}>
                                <FormControl
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="me-2"
                                /></Col>
                        </Row>
                        <Row>
                            <Col lg={3} className="text-start my-auto">
                                <label>Your PassWord</label>
                            </Col>
                            <Col lg={9}>
                                <FormControl
                                    type="password"
                                    placeholder="Enter your Password"
                                    className="me-2"
                                /></Col>
                        </Row>
                        <Row className="m-3">
                            <Col>
                                <Button variant="outline-success" className="w-100"><i class="fas fa-sign-in-alt"></i> Login</Button>
                            </Col>
                            <Col>
                                <Link to="/register">
                                    <Button variant="outline-primary" className=" w-100">
                                        <i class="fas fa-sign-out-alt"></i> Register</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="m-3">
                            <Button className="btn-danger mb-2" onClick={signInWithGoogle}>Google SignIn</Button>
                            <Button className="btn-Primary" onClick={signInWithFacebook}>FaceBook SignIn</Button>
                        </Row>
                    </Form>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
};

export default Login;