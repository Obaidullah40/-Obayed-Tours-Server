import React from 'react';
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <>
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    sticky="top"
                    bg="dark"
                    variant="dark"
                    className="nav-bar px-3"
                >
                    <Navbar.Brand as={HashLink} to="/home">
                        <Image
                            width="60px"
                            height="30px"
                            src="https://i.ibb.co/Wsc9GXR/Screenshot-2021-10-31-131119-removebg-preview.png"
                            fluid
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#offers">
                            Offers
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/about">
                            About Us
                        </Nav.Link>

                        {user?.email ? (
                            <>
                                <Nav.Link as={HashLink} to="/orders">
                                    My Orders
                                </Nav.Link>
                                <Navbar.Text>
                                    Signed:
                                    <a href="#login">
                                        {user?.displayName || user.email}
                                    </a>
                                </Navbar.Text>
                                <Nav.Link
                                    onClick={logOut}
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogOut
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={HashLink}
                                    to="/logIn"
                                    className="login"
                                >
                                    LogIn
                                </Nav.Link>
                                <Nav.Link
                                    as={HashLink}
                                    to="/register"
                                    className="register"
                                >
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </>
        </div>
    );
};

export default Header;