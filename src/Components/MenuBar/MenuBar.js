import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Components/useAuth/useAuth';
import "./menubar.css";

const MenuBar = () => {
    const { handleSignOut, user } = useAuth();
    return (
        <Navbar bg="light" expand="lg" className="menubar">
            <Container>
                <Link to="/" className="logo fs-2 fw-bold">
                    <span className="medi">Medi</span>
                    <span className="care">care</span>
                    <span className="hospital">Hospital</span>
                </Link>
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
                                <NavLink to="/otcmedicines" className="menuItem" activeClassName="selected">OTCMedicine</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addmedicine" className="menuItem" activeClassName="selected">AddMedicine</NavLink>
                            </li>
                            <li>
                                <NavLink to="/addcategory" className="menuItem" activeClassName="selected">Add Category</NavLink>
                            </li>
                            <li>
                                <NavLink to="/adddisease" className="menuItem" activeClassName="selected">Add Diseases</NavLink>
                            </li>
                            <li>
                                <NavLink to="/allservices" className="menuItem" activeClassName="selected">AllServices</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className="menuItem" activeClassName="selected">All Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/onlinedoctor" className="menuItem" activeClassName="selected">Online Doctor</NavLink>
                            </li>
                        </ul>

                    </Nav>
                    <Form className="d-flex menuBtn">
                        {
                            user.email &&
                            <span className="my-auto me-2">Hi,
                                <span className="fw-bold">
                                    {user.displayName}
                                </span>
                            </span>}
                        {
                            user.email ?
                                <Button onClick={handleSignOut} className="btn-primary signout">
                                    <Link to="/"><i className="fas fa-sign-out-alt"></i> SignOut</Link>
                                </Button> :
                                <div>
                                    <Button className="btn-success signIn me-2">
                                        <Link to="/login"><i className="fas fa-sign-in-alt"></i> SignIn</Link></Button><Button onClick={handleSignOut} className="btn-primary signout"><Link to="/register"><i className="fas fa-sign-out-alt"></i> Register</Link></Button></div>
                        }
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuBar;