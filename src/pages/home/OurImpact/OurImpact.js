import React from 'react';
import classes from "./OutImpact.module.css";
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TestMonial from './TestMonial';
// import women from "../../../assests/woman.png";
import women from '../../../assests/woman.png';



const OurImpact = () => {

    return (
        <Fragment>
            <div className={classes['dis-det']}>
                <h3>WHAT WE HAVE DONE SO FAR ?</h3>
                <div className='row'>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>LIVES SAVED</Card.Title>
                                <Card.Text>69420</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>ORGANS DONATED</Card.Title>
                                <Card.Text>69420</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm my-2 mx-lg-0 mx-5'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "bolder" }}>BLOOD PACKETS DONATED</Card.Title>
                                <Card.Text>69420</Card.Text>
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
