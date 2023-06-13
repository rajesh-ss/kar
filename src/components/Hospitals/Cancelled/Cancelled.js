import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


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
 * cal,
 * } props 
 * @returns 
 */

const Cancelled = (props)=> {

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Name : {props.Name}</Card.Text>
      <Card.Text>Blood Group : {props.BldGrp}</Card.Text>
      <Card.Text>Component : {props.component}</Card.Text>
      <Card.Text>Transfusion Purpose : {props.purpose}</Card.Text>
      <Card.Text>Email : {props.email}</Card.Text>
      <Card.Text>Age : {props.age}</Card.Text>
      <Card.Text>Phone : {props.ph}</Card.Text>
      <Card.Text>Address : {props.address}</Card.Text>
      <Card.Text>Gender : {props.sex}</Card.Text>
      <Card.Text>Date Of Birth : {props.dob}</Card.Text>
      <Card.Text>Reason For Cancellation : {props.cal}</Card.Text>
    </Card.Body>
  </Card>
  )

}

export default Cancelled;
