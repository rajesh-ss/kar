import React, { Fragment, useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from '../../../components/Cards/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import AppointsCard from '../../../components/AppointsCard/AppointsCard';
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import BloodBankAppointmentUpcoming from '../../../components/BloodBankAppointmentUpcoming/BloodBankAppointmentUpcoming';


const baseURL = envs.endpoint;

const AppointmentsBlood = () => {


    const [cancelled, setCancelled] = useState([{
     
            "_id": "6481da345e3b7244d25a2e7d",
            "bloodgroup": "A+",
            "location": "BB Blood Collectors",
            "appdate": "2022-09-09T00:00:00.000Z",
            "time": "09:30",
            "status": "Completed",
            "arriveStatus": true,
            "donorDetails": {
                "familyPermission": false,
                "_id": "6479968c0c740919ca6772e5",
                "fname": "Goutham",
                "mname": "D",
                "lname": "Reddy",
                "email": "donor@gmail.com",
                "password": "$2b$10$jsChV/YxSQrhCrX4Kp/4Zux.AQpAMjlklgIGYJsTM/AhSwzVGOno6",
                "address": "K.R Puram,Kodigehalli",
                "phone": 8861861428,
                "sex": "Male",
                "DOB": "2001-08-07T00:00:00.000Z",
                "age": 21,
                "bloodgroup": "A+",
                "aadharId": 551675114222,
                "emergencycontactname": "Sisters name",
                "emergencycontactphone": 8296339964,
                "role": "Donor",
                "dead": false,
                "permanentbanreason": "false",
                "eligibledate": "2023-08-31T13:40:35.099Z",
                "livessavedmeter": 1,
                "points": 1450,
                "badge": "Champion",
                "volunteer": true,
                "createdAt": "2023-06-02T07:13:16.344Z",
                "updatedAt": "2023-06-09T16:30:49.884Z",
                "__v": 0,
                "lastdonationdate": "2023-06-08T13:40:35.099Z",
                "organRequest": true,
                "feedback": "dsdfsdf"
            },
            "bloodbankDetails": "6475aa9a147a82fa6164cf61",
            "createdAt": "2023-06-08T13:40:04.268Z",
            "updatedAt": "2023-06-08T14:33:46.602Z",
            "__v": 0,
            "haemoglobinLevel": "80",
            "plateletCount": "100",
            "rbcCount": "230",
            "report": "keep it up..blood is ansolutely healthy..no defects at all..good health"
       
    }]);
    const [upcoming, setUpcoming] = useState([{
     
            "_id": "6481da345e3b7244d25a2e7d",
            "bloodgroup": "A+",
            "location": "BB Blood Collectors",
            "appdate": "2022-09-09T00:00:00.000Z",
            "time": "09:30",
            "status": "Completed",
            "arriveStatus": true,
            "donorDetails": {
                "familyPermission": false,
                "_id": "6479968c0c740919ca6772e5",
                "fname": "Goutham",
                "mname": "D",
                "lname": "Reddy",
                "email": "donor@gmail.com",
                "password": "$2b$10$jsChV/YxSQrhCrX4Kp/4Zux.AQpAMjlklgIGYJsTM/AhSwzVGOno6",
                "address": "K.R Puram,Kodigehalli",
                "phone": 8861861428,
                "sex": "Male",
                "DOB": "2001-08-07T00:00:00.000Z",
                "age": 21,
                "bloodgroup": "A+",
                "aadharId": 551675114222,
                "emergencycontactname": "Sisters name",
                "emergencycontactphone": 8296339964,
                "role": "Donor",
                "dead": false,
                "permanentbanreason": "false",
                "eligibledate": "2023-08-31T13:40:35.099Z",
                "livessavedmeter": 1,
                "points": 1450,
                "badge": "Champion",
                "volunteer": true,
                "createdAt": "2023-06-02T07:13:16.344Z",
                "updatedAt": "2023-06-09T16:30:49.884Z",
                "__v": 0,
                "lastdonationdate": "2023-06-08T13:40:35.099Z",
                "organRequest": true,
                "feedback": "dsdfsdf"
            },
            "bloodbankDetails": "6475aa9a147a82fa6164cf61",
            "createdAt": "2023-06-08T13:40:04.268Z",
            "updatedAt": "2023-06-08T14:33:46.602Z",
            "__v": 0,
            "haemoglobinLevel": "80",
            "plateletCount": "100",
            "rbcCount": "230",
            "report": "keep it up..blood is ansolutely healthy..no defects at all..good health"
       
    }]);
    const [completed, setCompleted] = useState([{
     
            "_id": "6481da345e3b7244d25a2e7d",
            "bloodgroup": "A+",
            "location": "BB Blood Collectors",
            "appdate": "2022-09-09T00:00:00.000Z",
            "time": "09:30",
            "status": "Completed",
            "arriveStatus": true,
            "donorDetails": {
                "familyPermission": false,
                "_id": "6479968c0c740919ca6772e5",
                "fname": "Goutham",
                "mname": "D",
                "lname": "Reddy",
                "email": "donor@gmail.com",
                "password": "$2b$10$jsChV/YxSQrhCrX4Kp/4Zux.AQpAMjlklgIGYJsTM/AhSwzVGOno6",
                "address": "K.R Puram,Kodigehalli",
                "phone": 8861861428,
                "sex": "Male",
                "DOB": "2001-08-07T00:00:00.000Z",
                "age": 21,
                "bloodgroup": "A+",
                "aadharId": 551675114222,
                "emergencycontactname": "Sisters name",
                "emergencycontactphone": 8296339964,
                "role": "Donor",
                "dead": false,
                "permanentbanreason": "false",
                "eligibledate": "2023-08-31T13:40:35.099Z",
                "livessavedmeter": 1,
                "points": 1450,
                "badge": "Champion",
                "volunteer": true,
                "createdAt": "2023-06-02T07:13:16.344Z",
                "updatedAt": "2023-06-09T16:30:49.884Z",
                "__v": 0,
                "lastdonationdate": "2023-06-08T13:40:35.099Z",
                "organRequest": true,
                "feedback": "dsdfsdf"
            },
            "bloodbankDetails": "6475aa9a147a82fa6164cf61",
            "createdAt": "2023-06-08T13:40:04.268Z",
            "updatedAt": "2023-06-08T14:33:46.602Z",
            "__v": 0,
            "haemoglobinLevel": "80",
            "plateletCount": "100",
            "rbcCount": "230",
            "report": "keep it up..blood is ansolutely healthy..no defects at all..good health"
       
    }]);



    useEffect(()=>{
        async function callUpcoming() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/appointments/cancelled/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setCancelled(response.data)
                            // setUpComingDon(response.data)
                     
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
    callUpcoming()
}
, [])

useEffect(()=>{
    async function callUpcoming() {
        try {
            await axios
                .get(`${baseURL}/bloodbank/appointments/upcoming/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setUpcoming(response.data)                 
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);
            console.log(e.response)

        }
        
}
callUpcoming()
}
, [])

useEffect(()=>{
    async function callUpcoming() {
        try {
            await axios
                .get(`${baseURL}/bloodbank/appointments/completed/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setCompleted(response.data)                 
                    }
                    else {
                        console.log("response")
                    }
                })
        }
        catch (e) {
            console.log(e);
            console.log(e.response)

        }
        
}
callUpcoming()
}
, [])

    return (
        <Fragment>
            {/* <div className='d-flex justify-content-center flex-column align-items-center'>
            <h5 className="my-4" >LAST DONATION DATE: <span style={{color: "red"}}>DD/MM/YYYY</span></h5>
            <DropdownButton id="dropdown-basic-button" title="New Donation" drop={'end'}>
                <Dropdown.Item href="#/action-1">BLOOD DONATION</Dropdown.Item>
                <Dropdown.Item href="#/action-2">ORGAN DONATION</Dropdown.Item>
            </DropdownButton>
            </div> */}
            <h5 className="my-4 mx-5 px-5" >YOUR APPOINTMENTS : </h5>


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
                                upcoming.map((ele, index)=>{
                                    return (
                                        <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                        <BloodBankAppointmentUpcoming 
                                        Date={ele.appdate.slice(0, 10)}
                                        Time={ele.time} 
                                        Name={ele.donorDetails.fname} 
                                        Ph={ele.donorDetails.phone}
                                        Age={ele.donorDetails.age}
                                        BldGrp={ele.bloodgroup}
                                        id={ele._id}
                                        // reasonCancel
                                        
                                        />
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
                                        <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                        <AppointsCard 
                                        Date={ele.appdate.slice(0, 10)}
                                        Time={ele.time} 
                                        Name={ele.donorDetails.fname} 
                                        Ph={ele.donorDetails.phone}
                                        Age={ele.donorDetails.age}
                                        BldGrp={ele.bloodgroup}
                                        Type={"completed"}
                                        // reasonCancel
                                        
                                        />
                                    </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="Cancelled" title="Cancelled">
                    <Container className='my-1'>
                        <Row>
                        {
                                cancelled.map((ele, index)=>{
                                    return (
                                        <Col lg={4} md={6} xs={12} className='my-4' key={index}>
                                        <AppointsCard 
                                        Date={ele.appdate.slice(0, 10)}
                                        Time={ele.time} 
                                        Name={ele.donorDetails.fname} 
                                        Ph={ele.donorDetails.phone}
                                        Age={ele.donorDetails.age}
                                        BldGrp={ele.bloodgroup}
                                        ReasonCancel={ele.cancelReason}
                                        Type={"cancelled"}
                                        />
                                    </Col>
                                    )
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

export default AppointmentsBlood;
