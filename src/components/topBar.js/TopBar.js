
import  "./TopBar.module.css";
import { React } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopBar = (props) => {

    return (
        <Navbar  expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Karna</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link id="ourImapactNav" href="/">OUR IMPACT</Nav.Link>
                        <NavDropdown title="KNOW ABOUT" id="basic-nav-dropdown">
                            <NavDropdown.Item href="knowAbout/organDonation">organDonation</NavDropdown.Item>
                            <NavDropdown.Item href="knowAbout/bloodDonation">bloodDonation</NavDropdown.Item>
                        </NavDropdown>
                  
                        <NavDropdown title="ABOUT US" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;