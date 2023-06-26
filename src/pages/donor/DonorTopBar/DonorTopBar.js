import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

 const DonorTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/donor/login')
    }

  return (
    <Navbar  expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link  href="/donor/donorHome">{localStorage.getItem('donor_name')}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link  href="/donor/impact">YOUR IMPACT</Nav.Link>
                    <Nav.Link  href="/donor/blood-donate">NEW BLOOD DONATE</Nav.Link>
                    <Nav.Link  href="/donor/update">Update</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default DonorTopBar;
