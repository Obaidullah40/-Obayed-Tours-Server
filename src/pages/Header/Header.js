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
                            src="https://i.ibb.co/cw5yw6C/hospital.png"
                            fluid
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/home#service">
                            Services
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/doctor">
                            Doctors
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/about">
                            About Us
                        </Nav.Link>
                        <Nav.Link as={HashLink} to="/departments">
                            Departments
                        </Nav.Link>
                        {user?.email ? (
                            <Button onClick={logOut} variant="light">
                                Logout
                            </Button>
                        ) : (
                            <Nav.Link
                                className="logOut-btn"
                                as={HashLink}
                                to="/login"
                            >
                                Login
                            </Nav.Link>
                        )}
                        <>
                            <Navbar.Text>
                                Signed:{" "}
                                <a href="#login">
                                    {user?.displayName || user.email}
                                </a>
                            </Navbar.Text>
                        </>
                    </Navbar.Collapse>
                </Navbar>
            </>
        </div>
    );
};

export default Header;