import React, { Fragment, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import badge from "../../../assests/hh.jpg"
import TestMonial from "../../../components/Testimonial/TestMonial";
import women from "../../../assests/woman.png"
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';


const baseURL = envs.endpoint;

// import Button from 'react-bootstrap/Button';

const ImpactBlood = () => {


    const [rank, setRank] = useState();
    const [wordsSaved, setWordsSaved] = useState([{}]);
    const [feedBack, setFeedBack] = useState([{}]);
    

    useEffect(()=>{
        async function callUpcoming() {
            try {
                await axios
                    .get(`${baseURL}/bloodbank/leadership/${localStorage.getItem('blood_bank_id')}`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                           setRank(response.data)
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
                .get(`${baseURL}/bloodbank/words/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setWordsSaved(response.data)
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
                .get(`${baseURL}/bloodbank/feedbacks/${localStorage.getItem('blood_bank_id')}`)
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        setFeedBack(response.data)
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


console.log(wordsSaved)
console.log(feedBack)

    return (
        <Fragment>
            <Container className='my-3 mw-100 px-5'>
                <h3 className='my-4 border-bottom '>IMPACT YOU HAVE CREATED SO FAR</h3>
                <Row>
                    <Col xs={12} md={6} lg={4}>

                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title>LIVES SAVED METER</Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Title>{localStorage.getItem('bloodbankLivesSavelivessavedmeter')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Card style={{ width: '100%' }} className='text-center'>
                            <Card.Body>
                                <Card.Title>BADGE</Card.Title>
                                <Card.Img src={badge} style={{
                                    width: '150px',
                                    height: '100px',
                                }} />

                                <Card.Title>{localStorage.getItem('bloodbankBadge')}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} >
                        <Card style={{ width: '100%', height: '100%' }} className='text-center'>
                            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title>{'LEADERSHIP BOARD'}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{''}</Card.Title>
                                <Card.Title>{`Rank ${rank}`}</Card.Title>
                                <Card.Title>{`Points ${localStorage.getItem('bloodbankPoints')}`}</Card.Title>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <h3 className='my-5 border-bottom '>WORDS FROM LIVES YOU SAVED :</h3>

                <Row>
                    {
                        wordsSaved.map((ele, index)=>{
                            return (
                                <Col xs={12} className='mx-2 my-1' key={index}>
                                     <TestMonial
                                    ima={women}
                                    feed={ele.heartwarmingmsg}
                                    name=''/>
                                </Col>
                            )
                        })

                    }
                
                    {/* <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME"
                        />

                    </Col> */}
                    {/* <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col>
                    <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col> */}
                </Row>
                <h3 className='my-5 border-bottom '>FEEDBACK ABOUT YOUR SERVICE :</h3>

                <Row>
                {
                        feedBack.map((ele, index)=>{
                            return (
                                <Col xs={12} className='mx-2 my-1' key={index}>
                                     <TestMonial
                                    ima={women}
                                    feed={ele.feedback}
                                    name=''/>
                                </Col>
                            )
                        })

                    }
                    {/* <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME"
                        />

                    </Col>
                    <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col>
                    <Col xs={12} className='mx-2 my-1'>
                        <TestMonial
                            ima={women}
                            feed="“This platform
                            has helped my mom who needed 
                                blood immediately after a deadly
                                accident, thank you for your service."
                            name="NAME" />

                    </Col> */}
                </Row>

            </Container>



        </Fragment>
    )

}

export default ImpactBlood;
