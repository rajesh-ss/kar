import {React, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import axios from 'axios';

import { envs } from '../../utils/endpoint';
import { useNavigate } from 'react-router-dom';

/**
 * 
 * @param {Location, Date, Time, Report ,type, url, id} props 
 * @returns jsx
 */

const baseURL = envs.endpoint;

const Cards = (props)=> {


  const navigate = useNavigate();
  const [reasonCancel, setReasonCan] = useState();


  const handleOnChange = (e)=>{
    setReasonCan(e.target.value);
  }

  const handleUpcoming = (e)=>{

    e.preventDefault();
    async function dd() {
      try {
          await axios
              .put(`${baseURL}/${props.url}/${props?.id}`,{
                'cancelReason':reasonCancel,
              })
              .then((response) => {
                  console.log(response.status)
                  if (response.status === 200) {

                      toast.success("cancelled  :)", {
                          toastId: 'donor success'
                      })
                      // props?.callApi()
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                      // setTimeout(navigate('/donor/donorHome'), 8000);
                  }
                  else {
                      console.log("response")
                      toast.error(response, {
                          toastId: 'donor error'
                      })
                      // throw Error;
                  }
              })
      }
      catch (e) {
          console.log(e);
          console.log(e.response)
          toast.error(e.response.data, {
              toastId: 'blood bank login'
          })
      }
  }
  dd();

    }

  const  handleCompleted = (e)=>{

    e.preventDefault();
    async function aa() {
      try {
          await axios
          .put(`${baseURL}/${props.url}/${props.id}`,{
            'feedback':reasonCancel,
          }).then((response) => {
                  console.log(response.status)
                  if (response.status === 200) {
        
                      toast.success("Submitting :)", {
                          toastId: 'donor success'
                      })
                      // props.callApi()
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                      // setTimeout(navigate('/donor/donorHome'), 8000);
                  }
                  else {
                      console.log("response")
                      toast.error(response, {
                          toastId: 'donor error'
                      })
                      // throw Error;
                  }
              })
      }
      catch (e) {
          console.log(e);
          console.log(e.response)
          toast.error(e.response.data, {
              toastId: 'blood bank login'
          })
      }
  }
  aa();


  }

  return (
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px" }}>
    <Card.Body>
      <Card.Text>Location: {props.Location}</Card.Text>
      <Card.Text>Date: {props.Date}</Card.Text>
      <Card.Text>Time: {props.Time}</Card.Text>
      {props.type === 'completed' ?
     <Card.Text>Report: {props.Report}</Card.Text>
     :<></>
     }  
     {props.type === 'completed'?
      <Card.Text>Feedback: </Card.Text>:<></>
     }
     {props.type === 'upcoming'?
      <Card.Text>Cancel Reason: </Card.Text>:<></>
     }
      <Card.Text> <Form.Control as="textarea" rows={3} onChange={handleOnChange}/></Card.Text>
     {props.type === 'upcoming' ?
     <Button variant="danger" onClick={handleUpcoming}>cancel</Button>
     :<Button variant="danger" onClick={handleCompleted}>Submit</Button>
     }  
    </Card.Body>
  </Card>
  )

}

export default Cards;
