import {react, useState, Fragment} from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './HosDonReg.scss'
import { envs } from '../../utils/endpoint';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





/**
 * 
 * @param {
 * name,
 * email,
 * dob,
 * age,
 * ph,
 * sex,
 * bg,
 * addr,
 * emcnam,
 * emcph,
 * adh,
 * id,
 * } props 
 * @returns jsx
 */


const baseURL = envs.endpoint;

const HosDonorReg = (props)=> {

  const [displayCard, setDisplayCard] = useState(false);
  const navigate = useNavigate();

  const handleYes = ()=>{
    localStorage.setItem('donor_list_id', props.id)
    navigate('/hospital/hos-don-det');
  }

  const handleNo = ()=>{
    async function callApi() {
      try {
          await axios
              .put(`${baseURL}/hospital/donorregistry/confirm/no/${props.id}`)
              .then((response) => {
                  console.log(response.status)
                  if (response.status === 200) {
                      toast.success(`Succesfully verfied ${props.name}`, {
                          toastId: 'blood bank '
                      })
                      props?.callForApiCallRerender();
                     
                  }
                  else {
                      toast.error(`unable to verify ${props.name}`, {
                          toastId: 'blood bank '
                      })
                      throw Error;
                  }
              })
      }
      catch (e) {
          console.log(e);
      }
  }
  callApi();
  }

  return (
    <Fragment>
            {
                displayCard && <div className='overlayss'>
                    <div className='dialog-box'>
                        <div className='header'><span onClick={()=>setDisplayCard(false)}>X</span></div>
                        <div className='cnt-cont'><h1>WILLING TO DONATE?</h1><h6>FAMILY ENQUIRED AND PERMISSION TO DONATE OBTAINED</h6></div>
                        <div className='btn-box'>
                          <button className='btn btn-primary' onClick={handleYes}>YES</button>
                          <button className='btn btn-danger' onClick={handleNo}>NO</button>
                        </div>
                    </div>
                </div>
            }
   
    <Card style={{ width: '100%', margin:"0px 0px 0px 0px", height:'650px' }}>
    <Card.Body>
      <Card.Text><span>NAME :</span> {props.name}</Card.Text>
      <Card.Text><span>EMAIL :</span> {props.email}</Card.Text>
      <Card.Text><span>DATE OF BIRTH :</span> {props.dob}</Card.Text>
      <Card.Text><span>AGE  :</span> {props.age}</Card.Text>
      <Card.Text><span>PHONE No :</span> {props.ph}</Card.Text>
      <Card.Text><span>SEX :</span> {props.sex}</Card.Text>
      <Card.Text><span>BLOOD GROUP :</span> {props.bg}</Card.Text>
      <Card.Text><span>ADDRESS :</span> {props.addr}</Card.Text>
      <Card.Text><span>EMERGENCY CONTACT NAME :</span>{props.emcnam}</Card.Text>
      <Card.Text><span>EMERGENCY CONTACT PHONE No :</span>{props.emcph}</Card.Text>
      <Card.Text><span>AADHAR ID :</span>{props.adh}</Card.Text>
      {/* <h1>asdf</h1> */}

      <Button variant="danger" onClick={(e)=>setDisplayCard(true)}>Confirm Death</Button>
    </Card.Body>
  </Card>
  </Fragment>
  )

}

export default HosDonorReg;
