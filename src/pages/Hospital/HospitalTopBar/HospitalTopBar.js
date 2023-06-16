import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../../../assests/icoOrgan.png"

 const HospitalTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.clear();
        navigate('/hospital/login')
    }


  return (
    <Navbar  expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Link to={'/hospital/request'} style={{ all: 'unset', cursor: 'pointer' }}>
                    <Navbar.Brand >
                        <img 
                            src={logo}
                            width={'35'}
                            height={'35'}
                            alt="logo img"
                            style={{margin:"0px 10px"}}/>
                           Karna
                    </Navbar.Brand></Link>
                <Nav.Link id="logout" href="/">{localStorage.getItem('blood_bank_name')}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    
                    <Nav.Link  href='/hospital/request'>HOME</Nav.Link>
                    <Nav.Link href='/hospital/donorReg'>DONOR REGISTRY</Nav.Link>
                    {/* <Nav.Link href='/hospital/blood-request'>CREATE BLOOD REQUEST</Nav.Link> */}
                    <Nav.Link href='/hospital/organ-request'>Organ Request</Nav.Link>
                    <Nav.Link href='/hospital/blood-request'>Blood Request</Nav.Link>
                    <Nav.Link href='/hospital/trans-under-process'>Transplant progress</Nav.Link>
                    <Nav.Link href='/hospital/emergency-service'>Emergency</Nav.Link>
                    
                    {/* trans-under-process */}
                    <Nav.Link  onClick={handleLogout}>LOGOUT</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default HospitalTopBar;
