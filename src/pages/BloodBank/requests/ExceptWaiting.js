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
 * hpur,
 * hcomp,
 * hbgrp,
 * hexp,
 * hplat,
 * hhae,
 * hrbc,
 * rp
 * @returns 
 */

const ExceptWaiting = (props)=> {

  const handleProvide = ()=>{

  }

  
  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Hospital Name : {props.hname}</Card.Text>
      <Card.Text>Hospital Location : {props.hloc}</Card.Text>
      <Card.Text>Hospital Number : {props.hnum}</Card.Text>
      <Card.Text>Transfusion Purpose : {props.hpur}</Card.Text>
      <Card.Text>Component : {props.hcomp}</Card.Text>
      <Card.Text>Blood Group : {props.hbgrp}</Card.Text>
      <Card.Text>Expiry Date: {props.hexp}</Card.Text>
      <Card.Text>Platelet Count: {props.hplat}</Card.Text>
      <Card.Text>Haemoglobin Count: {props.hhae}</Card.Text>
      <Card.Text>Red Blood Cell Count: {props.hrbc}</Card.Text>
      <Card.Text>Report : {props.rp}</Card.Text>
      {
        props.type && <button className='btn btn-rpimary' onClick={handleProvide}>provide</button>
      }
    </Card.Body>
  </Card>
  )

}

export default ExceptWaiting;
