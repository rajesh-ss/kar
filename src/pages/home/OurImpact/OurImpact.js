import React, { useEffect, useState } from 'react';
import classes from "./OutImpact.module.css";
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TestMonial from './TestMonial';
// import women from "../../../assests/woman.png";
import women from '../../../assests/woman.png';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';



const baseURL = envs.endpoint;

const OurImpact = () => {


    const [lifeSaved, setLifeSaved] = useState();
    const [organ, setOrgan] = useState();
    const [bloodPacket, setBloodPacket] = useState();

    // api call functions
    async function getLiveSaved() {
        try {
            await axios
                .get(`${baseURL}/home/livessavedmeter`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setLifeSaved(response?.data)
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

    
    async function getOrganDonated() {
        try {
            await axios
                .get(`${baseURL}/home/organsdonated`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setOrgan(response?.data)
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

    async function getBloodPackets() {
        try {
            await axios
                .get(`${baseURL}/home/bloodpacketsdonated`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setBloodPacket(response?.data)
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

    useEffect(()=>{
        getLiveSaved();
        getBloodPackets();
        getOrganDonated()
    }, [])

    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <h3>WHAT WE HAVE DONE SO FAR ?</h3>
                <div className='row'>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>LIVES SAVED</Card.Title>
                                <Card.Text>{lifeSaved}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>ORGANS DONATED</Card.Title>
                                <Card.Text>{organ}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>BLOOD PACKETS DONATED</Card.Title>
                                <Card.Text>{bloodPacket}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className={classes['dis-det']}>
                <h3>EXPERIENCES </h3>
                <TestMonial
                    ima={women}
                    feed="“This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" />

                <TestMonial
                    ima={women}
                    feed="“This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" />

                <TestMonial
                    ima={women}
                    feed="“This platform
                has helped my mom who needed 
                blood immediately after a deadly
                accident, thank you for your service."
                    name="NAME" />
            </div>
        </Fragment>
    )
}

export default OurImpact;
