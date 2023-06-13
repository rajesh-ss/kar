import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * 
 * } props 
 * hname,
 * hloc,
 * hnum,
 * hreq,
 * hbgrp,
 * htrans,
 * type
 * @returns 
 */

const RequestCard = (props)=> {

  const handleProvide = ()=>{

  }

  
  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Hospital Name : {props.hname}</Card.Text>
      <Card.Text>Hospital Location : {props.hloc}</Card.Text>
      <Card.Text>Hospital Number : {props.hnum}</Card.Text>
      <Card.Text>Component Required : {props.hreq}</Card.Text>
      <Card.Text>Blood Group Required : {props.hbgrp}</Card.Text>
      <Card.Text>Transfusion Purpose : {props.htrans}</Card.Text>
      {
        props.type && <button className='btn btn-rpimary' onClick={handleProvide}>provide</button>
      }
    </Card.Body>
  </Card>
  )

}

export default RequestCard;
