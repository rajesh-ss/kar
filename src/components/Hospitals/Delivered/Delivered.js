import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * bbName,
 * bbLoc,
 * bbNumber,
 * comp,
 * bloodGroup,
 * expiryDate,
 * plateletCount,
 * haemoglobinLvl,
 * rbcCnt,
 * report,
 * trsnplatPurpose,
 * PatName,
 * patPhone} props 
 * @returns 
 */
const  Delivered = (props)=> {


  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>BLOOD BANK NAME : {props.bbName}</Card.Text>
      <Card.Text>BLOOD BANK LOCATION :{props.bbLoc}</Card.Text>
      <Card.Text>BLOOD BANK NUMBER : {props.bbNumber}</Card.Text>
      <Card.Text>COMPONENT: {props.comp}</Card.Text>
      <Card.Text>BLOOD GROUP : {props.bloodGroup}</Card.Text>
      <Card.Text>EXPIRY DATE : {props.expiryDate}</Card.Text>
      <Card.Text>PLATELET COUNT : {props.plateletCount}</Card.Text>
      <Card.Text>HAEMOGLOBIN LEVEL : {props.haemoglobinLvl}</Card.Text>
      <Card.Text>RED BLOOD CELL COUNT : {props.rbcCnt}</Card.Text>
      <Card.Text>REPORT : {props.report}</Card.Text>
      <Card.Text>TRANSFUSION PURPOSE : {props.trsnplatPurpose}</Card.Text>
      <Card.Text>PATIENT NAME : {props.PatName}</Card.Text>
      <Card.Text>PATIENT PHONE No :{props.patPhone}</Card.Text>
    </Card.Body>
  </Card>
  )


}


export default Delivered;
