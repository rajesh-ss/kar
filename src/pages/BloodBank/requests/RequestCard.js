import React, {Fragment, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { envs } from '../../../utils/endpoint';
import { toast } from 'react-toastify';
import axios from 'axios';
import okay from '../../../assests/correct.png'
import wrong from "../../../assests/wrong.png"



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
 * type,
 * id
 * @returns 
 */


const baseURL = envs.endpoint;
const RequestCard = (props)=> {

  const [oneOverlay, setOneOverlay] = useState(false);
  const [twoOverlay, setTwoOverlay] = useState(false);
  const [threeOverlay, setThreeOverlay]  = useState(false);

  const handleProvide = ()=>{
    setOneOverlay(true)
  }

  const handleReadData = ()=>{
    async function callApi() {
      try {
          await axios
              .put(`${baseURL}/bloodbank/requests/waiting/provide/details/${props.id}`, {
                
              })
              .then((response) => {
                  console.log(response.status)
                  if (response.status === 200) {
                      toast.success(`Succesfully`, {
                          toastId: 'blood bank register'
                      })
                     setTwoOverlay(true)
                  }
                  else {
                      toast.error(`unable to process the requests ${response.data}`, {
                          toastId: 'blood bank register'
                      })
                      throw Error;
                      setThreeOverlay(true)
                  }
              })
      }
      catch (e) {
          console.log(e);
          setThreeOverlay(true)

      }
  }
  callApi();
  setOneOverlay(false)
  }


  return (
    <Fragment>
    {
      oneOverlay && <>

      <div className='card_insert'>
      <div className='box'>
          <div className='header'>
          <h4>PUT RFID TAG NEAR THE READER</h4>
          <span onClick={()=>{
              setOneOverlay(false)
          }}>X</span>
          </div>
          <div className='img-dis'>
          <img 
          src={okay} 
          alt='correct ico' 
          height={60} 
          width={60}/>
          <button 
          className='btn btn-success rounded' 
          onClick={handleReadData}>Read Data</button>   
        </div> 
      </div>
  </div> </>
    }
    {
      twoOverlay && <div className='card_insert'>
      <div className='box'>
          <div className='header'>
          <h4>Matched and Confirmed</h4>
          <span onClick={()=>{
              setOneOverlay(false)
          }}>X</span>
          </div>
          <div className='img-dis'>
          <img 
          src={okay} 
          alt='correct ico' 
          height={60} 
          width={60}/>
          <button className='btn btn-success rounded' onClick={()=>{
            window.location.reload(false)
          }}>OK</button>   
        </div> 
      </div>
  </div>
    }
      {
      threeOverlay && <div className='card_insert'>
      <div className='box'>
          <div className='header'>
          <h4>Details didn't match</h4>
          <span onClick={()=>{
              setOneOverlay(false)
          }}>X</span>
          </div>
          <div className='img-dis'>
          <img src={wrong} alt='correct ico' height={60} width={60}/>
          <button 
          className='btn btn-success rounded' 
          onClick={()=>{
            window.location.reload(false)
          }}>OK</button>   
        </div> 
      </div>
  </div> 
    }
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Hospital Name : {props.hname}</Card.Text>
      <Card.Text>Hospital Location : {props.hloc}</Card.Text>
      <Card.Text>Hospital Number : {props.hnum}</Card.Text>
      <Card.Text>Component Required : {props.hreq}</Card.Text>
      <Card.Text>Blood Group Required : {props.hbgrp}</Card.Text>
      <Card.Text>Transfusion Purpose : {props.htrans}</Card.Text>
      {
        props.type && <button className='btn btn-primary' onClick={handleProvide}>provide</button>
      }
    </Card.Body>
  </Card>
  </Fragment>
  )
 
}

export default RequestCard;
