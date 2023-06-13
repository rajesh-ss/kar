import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * Date,
 * Time,
 * Name, 
 * Ph, 
 * Age,
 * BldGrp,
 * ReasonCancel,
 * Type
 * } props 
 * @returns 
 */

const AppointsCard = (props)=> {

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Date: {props.Date}</Card.Text>
      <Card.Text>Time: {props.Time}</Card.Text>
      <Card.Text>Donor Name: {props.Name}</Card.Text>
      <Card.Text>Phone No: {props.Ph}</Card.Text>
      <Card.Text>Age: {props.Age}</Card.Text>
      <Card.Text>Blood Group: {props.BldGrp}</Card.Text>
      {props.Type === 'cancelled'?
      <Card.Text>Cancellation Reason: {props.ReasonCancel}</Card.Text>:<></>
     }
      {/* {
        props.reasonCancel && <Card.Text>
        <Form>
      <Form.Control as="textarea" rows={3} >{props.reasonCancel}</Form.Control>
      <Button variant="danger" className='mx-2 my-2'>cancel</Button><br/>
      <Button variant="danger" className='mx-2 my-2'>COMPLETE</Button>
      </Form>
      </Card.Text>
      } */}

    </Card.Body>
  </Card>
  )

}

export default AppointsCard;
