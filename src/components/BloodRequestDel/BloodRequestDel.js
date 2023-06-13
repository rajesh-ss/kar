import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


/**
 * 
 * @param {
 * bldbnknam,
 * bldbnkloc,
 * bldbnknum,
 * cmp,
 * bldgrp,
 * expdt,
 * pltcnt,
 * hmlvl,
 * rbscnt,
 * rp,
 * trspur,
 * petnam,
 * patph,
 * } props 
 * @returns 
 */

const BloodRequestDel = (props)=> {

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>BLOOD BANK NAME : {props.bldbnknam}</Card.Text>
      <Card.Text>BLOOD BANK LOCATION :{props.bldbnkloc}</Card.Text>
      <Card.Text>BLOOD BANK NUMBER : {props.bldbnknum}</Card.Text>
      <Card.Text>COMPONENT: {props.cmp}</Card.Text>
      <Card.Text>BLOOD GROUP : {props.bldgrp}</Card.Text>
      <Card.Text>EXPIRY DATE : {props.expdt}</Card.Text>
      <Card.Text>PLATELET COUNT : {props.pltcnt}</Card.Text>
      <Card.Text>HAEMOGLOBIN LEVEL : {props.hmlvl}</Card.Text>
      <Card.Text>RED BLOOD CELL COUNT : {props.rbscnt}</Card.Text>
      <Card.Text>REPORT : {props.rp}</Card.Text>
      <Card.Text>TRANSPLANTATION PURPOSE : {props.trspur}</Card.Text>
      <Card.Text>PATIENT NAME : {props.petnam}</Card.Text>
      <Card.Text>PATIENT PHONE :{props.patph}</Card.Text>
    </Card.Body>
  </Card>
  )

}

export default BloodRequestDel;
