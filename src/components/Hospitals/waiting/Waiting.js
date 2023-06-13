import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { envs } from '../../../utils/endpoint';
import { toast } from 'react-toastify';



/**
 * 
 * @param {
 * Name,
 * BldGrp,
 * component,
 * purpose,
 * email,
 * age,
 * ph,
 * address,
 * sex,
 * dob,
 * id
 * } props 
 * @returns 
 */


const baseURL = envs.endpoint;

const Waiting = (props)=> {

    const [cancelReason, setCancelReason] = useState();

    const handleCancel = ()=>{  
      async function callApi() {
        try {
            await axios
                .put(`${baseURL}/hospital/requests/waiting/cancel/${props.id}`,
                    {
                        "permanentbanreason": cancelReason,
                    })
                .then((response) => {
                    console.log(response.status)
                    if (response.status === 200) {
                        toast.success(`cancelled `, {
                            toastId: 'blood bank register'
                        })

                        // props?.callForApiCallRerender();

                    }
                    else {
                        toast.error(`unable to verify }`, {
                            toastId: 'blood bank register'
                        })
                        throw Error;
                    }
                })
        }
        catch (e) {
            console.log(e);
        }
    }
    callApi();
    }

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Name: {props.Name}</Card.Text>
      <Card.Text>Blood Group: {props.BldGrp}</Card.Text>
      <Card.Text>Component Required: {props.component}</Card.Text>
      <Card.Text>Transfusion Purpose: {props.purpose}</Card.Text>
      <Card.Text>Email: {props.email}</Card.Text>
      <Card.Text>Age: {props.age}</Card.Text>
      <Card.Text>Phone No: {props.ph}</Card.Text>
      <Card.Text>Address: {props.address}</Card.Text>
      <Card.Text>Gender: {props.sex}</Card.Text>
      <Card.Text>Date Of Birth: {props.dob}</Card.Text>
      <Card.Text>Reason For Cancellation: {props.cal}</Card.Text>
  
        <Form>
      <Form.Control as="textarea" rows={3} onChange={(e)=> setCancelReason(e.target.value)}>{cancelReason}</Form.Control>
      <Button variant="danger" className='mx-2 my-2' onClick={handleCancel}>cancel</Button><br/>
      {/* <Button variant="danger" className='mx-2 my-2'>COMPLETE</Button> */}
      </Form>

    </Card.Body>
  </Card>
  )

}

export default Waiting;
