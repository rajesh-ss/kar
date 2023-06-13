import React, { Fragment, useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../../../components/Cards/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminCard from '../../../components/AdminCard/AdminCard';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';

const baseURL = envs.endpoint;

const AdminRegis = () => {

    // ----------------------------------------------------
    // BloodBank States
    // ----------------------------------------------------
    const [bloodBank, setBloodBank] = useState([{
        "_id": "",
        "verificationStatus": "",
        "name": "",
        "email": "",
        "password": "",
        "address": "",
        "phone": 0,
        "bloodbankregnum": "",
        "role": "",
        "livessavedmeter": 0,
        "points": 0,
        "badge": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    }]);

    // ----------------------------------------------------
    // Hospital States
    // ----------------------------------------------------

    const [hospitalsList, setHospitalList] = useState([{
        "_id": "647c65edee0c257483f6f9c9",
        "verificationStatus": "Pending",
        "name": "Apollo",
        "email": "ssssss@gmail.com",
        "password": "$2b$10$bEYSH/eoqN83RGyaTEqDw.EKw2QB7zJ/mYTsFuBh6bmbPMqiLGXxi",
        "address": "bglore banashankari",
        "phone": 9999900000,
        "hospitalregnum": "554567123478384294",
        "role": "Hospital",
        "createdAt": "2023-06-04T10:22:37.471Z",
        "updatedAt": "2023-06-04T10:22:37.471Z",
        "__v": 0
    }]);

    // ----------------------------------------------------
    // Renrender call back from admin card
    // ----------------------------------------------------

    const callForApiCallRerender = ()=>{
        callBloodApi();
        callHospitalApi();

    }

    // ----------------------------------------------------
    // API calls for blood bank
    // ----------------------------------------------------
    async function callBloodApi() {
        try {
            await axios
                .get(`${baseURL}/admin/registrations/bloodbank`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setBloodBank(response?.data)
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);
           
        }
    }

    // ----------------------------------------------------
    // API calls for hospitals
    // ----------------------------------------------------
    async function callHospitalApi() {
        try {
            await axios
                .get(`${baseURL}/admin/registrations/hospital`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setHospitalList(response?.data)
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);
           
        }
    }

    // -----------------------------------------------------------
    // Calling api after every re-render (bloodBank and hospitals)
    // -----------------------------------------------------------
    useEffect(()=>{
        callBloodApi();
        callHospitalApi();
    }, [])

    return (
        <Fragment>
            <h5 className="my-4 mx-5 px-5" >VERIFY PENDING REGISTRATIONS : </h5>
            <Tabs
                defaultActiveKey="HOSPITAL"
                id="fill-tab-example"
                className="my-4"
                justify
            >
                <Tab eventKey="HOSPITAL" title="HOSPITAL">
                    <Container className='my-1'>
                        <Row>
                        {
                                hospitalsList.map((ele, index)=>{
                                    return (
                                    <Col key={index} lg={4} md={6} xs={12} className='my-4'>
                                        <AdminCard 
                                            name={ele.name}
                                            email={ele.email}
                                            ph={ele.phone}
                                            addr={ele.address}
                                            hosreg={ele.hospitalregnum}
                                            type={'hospital'}
                                            id={ele._id}
                                            callForApiCallRerender={callForApiCallRerender}
                                        />
                                    </Col>);
                                })
                            }
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="BLOOD BANK" title="BLOOD BANK">
                    <Container className='my-1'>
                        <Row>
                            {
                                bloodBank.map((ele, index)=>{
                                    return (
                                    <Col lg={4} md={6} xs={12} className='my-4'>
                                        <AdminCard 
                                            name={ele.name}
                                            email={ele.email}
                                            ph={ele.phone}
                                            addr={ele.address}
                                            hosreg={ele.bloodbankregnum}
                                            type={'bloodbank'}
                                            id={ele._id}
                                            callForApiCallRerender={callForApiCallRerender}
                                        />
                                    </Col>);
                                })
                            }
                        </Row>
                    </Container>
                </Tab>
                
            </Tabs>

            {/* <div className='px-5 py-1 my-5 d-flex flex-column align-items-start'>
                <h4>FeedBack About Your Experience in the Website and it's Impact on Donation Mindset</h4>
                <Form.Control as="textarea" rows={3} placeholder='Enter your Feedback here' className='w-75 w'/>
            </div> */}
        </Fragment>
    )

}

export default AdminRegis;
