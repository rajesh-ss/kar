import { Fragment, react, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HosDonorReg from '../../../components/HosDonorReg/HosDonorReg';
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import './HosDonReg.scss'

const initialState = {
    "familyPermission": false,
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
    "age": 21,
    "bloodgroup": "",
    "aadharId": 0,
    "emergencycontactname": "",
    "emergencycontactphone": 8296339964,
    "role": "",
    "dead": false,
    "permanentbanreason": "",
    "eligibledate": "",
    "livessavedmeter": 1,
    "points": 1450,
    "badge": "",
    "volunteer": true,
    "createdAt": "",
    "updatedAt": "",
    "__v": 0,
    "lastdonationdate": "",
    "organRequest": true,
    "feedback": ""
}

const baseURL = envs.endpoint;

export const HosDonReg = () => {

    const [donorRegis, setDonorRegis] = useState([initialState]);
    

    useEffect(()=>{
        async function callApi() {
            try {
                await axios
                    .get(`${baseURL}/hospital/donorregistry`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            
                            setDonorRegis(response.data)
                        }
                        else {
                           
                            throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
            }
        }
        callApi();
    }, [])

    return (
        <Fragment>
      
            <h3 className='mx-5 my-4 px-5'>DONOR REGISTRY</h3>
            <Container className='my-1'>
                <Row>
                    {
                        donorRegis.map((ele, index)=>{
                            return (
                                <Col lg={4} md={6} xs={12} className='my-4'>
                                <HosDonorReg
                                    name={ele.fname}
                                    email={ele.email}
                                    dob={ele.DOB.slice(0,10)}
                                    age={ele.age}
                                    ph={ele.phone}
                                    sex={ele.sex}
                                    bg={ele.bloodgroup}
                                    addr={ele.address}
                                    emcnam={ele.emergencycontactname}
                                    emcph={ele.emergencycontactphone}
                                    adh={ele.aadharId}
                                    id={ele._id}
                                />
                            </Col>
                            )
                        })
                    }
         
                    
                </Row>
            </Container>
        </Fragment>
    )
}
