import { react, useState, Fragment, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../../../components/Cards/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import React from 'react';
import Card from 'react-bootstrap/Card';


import { envs } from '../../../utils/endpoint';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const baseURL = envs.endpoint

const DonorHome = () => {


    const [feedBack, setFeedBack] = useState();
    const  navigate = useNavigate();
    let location = useLocation();
    const [upcomingDon, setUpComingDon] = useState([{
        "_id": "",
        "bloodgroup": "",
        "location": "",
        "appdate": "",
        "time": "",
        "status": "",
        "arriveStatus": Boolean,
        "donorDetails": "",
        "bloodbankDetails": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0
    }]);

    const [completed, setComplted] = useState([{
        "_id": "647996a50c740919ca6772e9",
        "bloodgroup": "A+",
        "location": "BB Collectors",
        "appdate": "2023-06-05T00:00:00.000Z",
        "time": "12:10",
        "status": "Completed",
        "arriveStatus": true,
        "donorDetails": {
            "familyPermission": true,
            "_id": "",
            "fname": "",
            "mname": "",
            "lname": "",
            "email": "",
            "password": "",
            "address": "",
            "phone": 0,
            "sex": "",
            "DOB": "",
            "age": 0,
            "bloodgroup": "",
            "aadharId": 0,
            "emergencycontactname": "",
            "emergencycontactphone": 0,
            "role": "",
            "dead": false,
            "permanentbanreason": "",
            "eligibledate": "",
            "livessavedmeter": 1,
            "points": 0,
            "badge": "",
            "volunteer": true,
            "createdAt": "",
            "updatedAt": "",
            "__v": 0,
            "lastdonationdate": "",
            "organRequest": true,
            "feedback": ""
    }
}])

    const [cancelled, setCancelled] = useState([{
        "_id": "",
        "bloodgroup": "",
        "location": " ",
        "appdate": "",
        "time": "",
        "status": "",
        "arriveStatus": false,
        "donorDetails": "",
        "bloodbankDetails": "",
        "createdAt": "",
        "updatedAt": "",
        "__v": 0,
        "cancelReason": ""
    }])

    const handleFeedBack = ()=>{
        
        async function callApi() {
            
            try {
                
                await axios
                    .put(`${baseURL}/donor/feedback/${localStorage.getItem('donor_id')}`,{
                        'feedback': feedBack,
                    })
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            toast.success("Feed Back Submitted Successfully :)", {
                                toastId: 'donor success'
                            })
                            // setTimeout(navigate('/donor/donorHome'), 8000);
                            setTimeout(() => {
                                window.location.reload();
                              }, 2000);
                        }
                        else {
                            console.log("response")
                            toast.error(response, {
                                toastId: 'donor error'
                            })
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
                toast.error(e.response.data, {
                    toastId: 'blood bank login'
                })
            }
        }
        callApi();
    }

    useEffect(()=>{
        async function callUpcoming() {
            try {
                await axios
                    .get(`${baseURL}/donor/upcomingappointments/${localStorage.getItem('donor_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                           
                            setUpComingDon(response.data)
                        }
                        else {
                            console.log("response")
              
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
   
            }
        }
      

        async function callCompleted() {
            try {
                await axios
                    .get(`${baseURL}/donor/completedappointments/${localStorage.getItem('donor_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setComplted(response?.data)
                        }
                        else {
                            console.log("response")
              
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
   
            }
        }

        async function callCancelled() {
            try {
                await axios
                    .get(`${baseURL}/donor/cancelledappointments/${localStorage.getItem('donor_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                           
                            setCancelled(response?.data)
                        }
                        else {
                            console.log("response")
              
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
   
            }
        }

        callCompleted();
        callUpcoming();
        callCancelled();

    }, [])

    // console.log(upcomingDon);
    console.log('completed --> ', completed)
    console.log('cancelled --> ', cancelled)
    console.log("upcoming -->", location)

    return (
        <Fragment>
            <div className='d-flex justify-content-center flex-column align-items-center'>
            <h5 className="my-4" >LAST DONATION DATE: <span style={{color: "red"}}>{localStorage.getItem('donor_lastdonationdate').slice(0, 10)}</span></h5>
            
            
            {
                localStorage.getItem('donor_permanentbanreason') !== 'false' &&
                <div style={{background:'#f7ada8'}} className='my-3 p-3'>
                <h4>YOU ARE NOT ELIGIBLE FOR NEW BLOOD DONATION BECAUSE:</h4>
                <p style={{color:'red'}}>Your Blood Sample Has Tested Positive For HIV. Contact Blood Bank For Further Details.</p>
                </div>
            }
            <DropdownButton id="dropdown-basic-button" title="New Donation" drop={'end'}>
                <Dropdown.Item href='/donor/blood-donate'>BLOOD DONATION</Dropdown.Item>
                <Dropdown.Item >ORGAN DONATION</Dropdown.Item>
            </DropdownButton>
            </div>

            <Tabs
                defaultActiveKey="Completed"
                id="fill-tab-example"
                className="my-4"
                justify
            >
                <Tab eventKey="Upcoming" title="Upcoming">
                    {/* <Sonnet /> */}
                    <Container className='my-1'>
                        <Row>
                            {
                                upcomingDon.map((ele, index)=>{
                                    return (
                                        <Col key={index} lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={ele.location} Date={ele.appdate.slice(0, 10)} Time={ele.time} url={'donor/upcomingappointments/cancel'} type={'upcoming'} id={ele._id}/>
                                </Col> 
                                    )
                                })
                            }
                        </Row>
                    </Container>

                </Tab>
                <Tab eventKey="Completed" title="Completed">
                    <Container className='my-1'>
                        <Row>
                            {
                                completed.map((ele, index)=>{
                                    return (

                                        <Col key={index} lg={4} md={6} xs={12} className='my-4'>
                                             <Cards Location={ele?.location} Date={ele?.appdate.slice(0, 10)} Time={ele?.time} Report={ele?.report} url={'donor/completedappointments/feedback'} type={'completed'} id={ele._id}/>
                                        </Col>

                                    )
                                })
                            }
                            {/* <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col> */}
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Cancelled" title="Cancelled">
                    <Container className='my-1'>
                        <Row>
                            {
                                cancelled.map((ele, index)=>{
                                    return (
                                        <Col key={index} lg={4} md={6} xs={12} className='my-4'>
                                        <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
                                        <Card.Body>
                                          <Card.Text>Location: {ele.location}</Card.Text>
                                          <Card.Text>Date: {ele?.appdate.slice(0, 10)}</Card.Text>
                                          <Card.Text>Time: {ele?.time}</Card.Text>
                                          <Card.Text>Cancel Reason: {ele?.cancelReason}</Card.Text>
                                        </Card.Body>
                                      </Card>                                    
                                        {/* <Cards Location={ele?.location} Date={ele?.appdate} Time={ele?.time} /> */}
                                    </Col>
                                    )
                                })
                            }
                            {/* <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col>
                            <Col lg={4} md={6} xs={12} className='my-4'>
                                <Cards Location={"Banshankari"} Date={"29/03/23"} Time={"9:30 AM"} />
                            </Col> */}
                        </Row>
                    </Container>
                </Tab>
            </Tabs>

            <div className='px-5 py-1 my-5 d-flex flex-column align-items-start'>
                <h4>FeedBack About Your Experience in the Website and it's Impact on Donation Mindset</h4>
                <Form.Control 
                as="textarea" 
                rows={3}
                placeholder='Enter your Feedback here'
                className='w-75 w' 
                onChange={(e)=> setFeedBack(e.target.value)}/>
                <Button className='my-2' onClick={handleFeedBack}>Submit</Button>
            </div>
        </Fragment>
    )

}

export default DonorHome;
