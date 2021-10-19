import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';
import "./menubar.css";

const MenuBar = () => {
    const { handleSignOut, user } = useAuth();
    return (
        <Navbar bg="light" expand="lg" className="menubar">
            <Container>
                <Link to="/" className="logo fs-2 fw-bold"><span className="medi">Medi</span><span className="care">care</span> <span className="hospital">Hospital</span></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 text-center"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <ul className="d-flex menu">
                            <li>
                                <NavLink to="/home" className="menuItem" activeClassName="selected">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allmedicine" className="menuItem" activeClassName="selected">All Medicine</NavLink>
                            </li>
                            <li>
                                <NavLink to="/onlinedoctor" className="menuItem" activeClassName="selected">Online Doctor</NavLink>
                            </li>
                            <li>
                                <NavLink to="/helpline" className="menuItem" activeClassName="selected">24/7 Help Line</NavLink>
                            </li>
                        </ul>

                    </Nav>
                    <Form className="d-flex">
                        {
                            user.displayName && <span className="my-auto me-2">Hi, <span className="fw-bold">{user.displayName}</span> </span>}
                        {
                            user.displayName ? <Button onClick={handleSignOut} className="btn-primary signout"><Link to="/"><i class="fas fa-sign-out-alt"></i> SignOut</Link></Button> : <div><Button className="btn-success signIn me-2"><Link to="/login"><i class="fas fa-sign-in-alt"></i> SignIn</Link></Button><Button onClick={handleSignOut} className="btn-primary signout"><Link to="/register"><i class="fas fa-sign-out-alt"></i> Register</Link></Button></div>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;