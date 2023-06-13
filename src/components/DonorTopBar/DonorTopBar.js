import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

 const DonorTopBar = ()=> {

  return (
    <Navbar  expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link id="logout" href="/">user name</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link  href="/donor/impact">OUR IMPACT</Nav.Link>
                    <Nav.Link id="logout" href="/">Logout</Nav.Link>
                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default DonorTopBar;
