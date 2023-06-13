import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

 const BloodBankTopBar = ()=> {

    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.clear();
        toast.success('loggin out',{
            toastId: 'Logout'
        })
        navigate('login')
    }

    const handleAppointments = ()=>{
        navigate('appoint')
    }
    const handleStocks = ()=>{
        navigate('stock')
    }

    const handleRequests = ()=>{
        navigate('request')
    }

  return (
    <Navbar  expand="lg">
            <Container>
                {/* <Navbar.Brand href="#home">userName</Navbar.Brand> */}
                <Nav.Link id="logout" href="impact">{`Welcome ${localStorage.getItem('blood_bank_name')}`}</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav" className=" ">
                    <Nav className="me-auto  w-100 d-flex align-items-end justify-content-end">
                    <Nav.Link onClick={handleAppointments}>Appointments</Nav.Link>
                    <Nav.Link onClick={handleStocks}>STOCK</Nav.Link>
                    <Nav.Link onClick={handleRequests}>Requests</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )

}


export default BloodBankTopBar;
