import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../src/img/logo/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar className='header' sticky='top' collapseOnSelect expand="lg"  >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-items">
                            <Nav.Link className='text-dark' as={Link} to="#services">Service</Nav.Link>
                            <Nav.Link className='text-dark' as={Link} to="#reviews">Review</Nav.Link>

                            <NavDropdown
                                className='text-dark'
                                title="Details" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/contract">
                                    Contract
                                </NavDropdown.Item>


                            </NavDropdown>
                            <NavDropdown
                                className='text-dark'
                                title="Treatment" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/contract">
                                    Contract
                                </NavDropdown.Item>


                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;