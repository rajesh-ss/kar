
import "./TopBar.css";
import { React } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import logo from "../../../assests/icoOrgan.png";
import './TopBar.scss';

const HomeTopBar = (props) => {

    return (
        <Navbar expand="lg" sticky='top' className="header-cont" >
            <Container>
                <Link to={'home'} style={{ all: 'unset', cursor: 'pointer' }}>
                    <Navbar.Brand >
                        <img
                            src={logo}
                            width={'35'}
                            height={'35'}
                            alt="logo img"
                            id="basic-nav-dropdown" />
                        <Link to={'home'}
                            id="basic-nav-dropdown">
                            Karna
                        </Link>

                    </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav
                        className="w-100 d-flex justify-content-end">
                        <Link to={'home'}
                            style={{ all: 'unset', cursor: 'pointer' }}>
                            <Nav.Link
                                title="home"
                                id="basic-nav-dropdown"
                                href="home">
                                HOME
                            </Nav.Link>

                        </Link>

                        <Link to={'ourImpact'}
                            style={{ all: 'unset', cursor: 'pointer' }}>
                            <Nav.Link
                                title="OUR IMPACT"
                                id="basic-nav-dropdown"
                                className="under-line"
                                href="ourImpact">
                                OUR IMPACT
                            </Nav.Link>

                        </Link>
                        <NavDropdown
                            title="KNOW ABOUT"
                            id="basic-nav-dropdown">
                            <Link

                                to={'knowAbout/organDonation'}
                                style={{ all: 'unset', cursor: 'pointer' }}>
                                <NavDropdown.Item
                                    className="under-line"
                                    href="knowAbout/organDonation">organDonation
                                </NavDropdown.Item>
                            </Link>
                            <Link to={'knowAbout/bloodDonation'}
                                style={{
                                    all: 'unset',
                                    cursor: 'pointer'
                                }}>
                                <NavDropdown.Item
                                    className="under-line"
                                    href="knowAbout/bloodDonation">
                                    bloodDonation
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                        <Link to={'aboutUs'}
                            style={{
                                all: 'unset',
                                cursor: 'pointer'
                            }}>
                            <Nav.Link
                                className="under-line"
                                id="basic-nav-dropdown"
                                title="aboutUs"
                                href="aboutUs">
                                ABOUT US
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HomeTopBar;