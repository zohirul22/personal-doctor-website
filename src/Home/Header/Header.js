import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../src/img/logo/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const handelSignOut = () => {
        signOut(auth)
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='header' variant="dark" sticky="top"  >
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

                        </Nav>
                        {
                            user ? <button onClick={handelSignOut} className={"btn btn-outline-warning text-dark fw-bolder"}>Sign Out</button> : <Nav.Link className={"btn btn-outline-warning text-dark fw-bolder"} as={Link} to="/login">Login</Nav.Link>
                        }




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;