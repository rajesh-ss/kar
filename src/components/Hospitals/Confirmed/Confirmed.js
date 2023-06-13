import {Fragment, useState, react} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Confirmed.scss';
import ok from "../../../assests/correct.png"


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
const  Confirmed = (props)=> {

    const [disCard, setDisCard] = useState(false);
    const [readData, setReadData] = useState(false);

    const handleArrived = ()=>{
        setDisCard(true)
    }

  return (
    <Fragment>
        {
            disCard && <>
            <div className='background'>
                <div className='box'>
                <div className='headers'>
                        <span onClick={(e)=> setDisCard(false)}>X</span>
                    </div>
                {
                    readData === true ? <div className='msg-box'>
                        <p>Required Blood PACKET Arraived successfully:</p>
                        <img src={ok} height={50} width={50}/>
                        <p>HEARTWARMIG MESSAGE FROM PATIENT:</p>
                        <button className='btn btn-primary'>SUBMIT</button>
                    </div>:<div className='btn-cont'>
                    <button className='btn btn-success' onClick={(e)=>setReadData(true)}>READ DATA</button>
               </div>
                }

                </div>
                </div>
         
          
            </>
        
        }
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
      <Button onClick={handleArrived}>Arrived</Button>
    </Card.Body>
  </Card>
  </Fragment>
  )


}


export default Confirmed;
