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
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px",   height:'600px'  }}>
      
    <Card.Body>
      <Card.Text><span>Name : </span>{props.Name}</Card.Text>
      <Card.Text><span>Blood Group :</span> {props.BldGrp}</Card.Text>
      <Card.Text><span>Component :</span> {props.component}</Card.Text>
      <Card.Text><span>Transfusion Purpose :</span> {props.purpose}</Card.Text>
      <Card.Text><span>Email :</span> {props.email}</Card.Text>
      <Card.Text><span>Age :</span> {props.age}</Card.Text>
      <Card.Text><span>Phone :</span> {props.ph}</Card.Text>
      <Card.Text><span>Address :</span> {props.address}</Card.Text>
      <Card.Text><span>Gender :</span> {props.sex}</Card.Text>
      <Card.Text><span>Date Of Birth :</span> {props.dob}</Card.Text>
      <Card.Text><span>Reason For Cancellation :</span> {props.cal}</Card.Text>
    </Card.Body>
  </Card>
  )

}

export default Cancelled;
