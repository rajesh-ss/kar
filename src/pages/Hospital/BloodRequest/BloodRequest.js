import React, {Fragment} from 'react';
import { react, useState } from 'react';
// import classes from "./DonorRegister.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { envs } from "../../../utils/endpoint"




const baseURL = envs.endpoint;
const BloodRequest = () =>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "bloodgroup":"",
        "component":"",
        "purpose":"",
        "fname": "",
        "mname": "",
        "lname": "",
        "email": "",
        "address": "",
        "phone": 0,
        "sex":"",
        "DOB": "",
        "age":0
    });



    const handleFormData = (e) => {
        if(e.target.name === 'phone' 
        || e.target.name === 'age'){
            console.log("Either one og them is activated !", Number(e.target.value))
            setFormData(
                {
                    ...formData,
                    [e.target.name]:Number(e.target.value),
                }
            )
        }
        else if( e.target.name === 'DOB'){

            console.log(e.target.value)
            const [year, month, day] = (e.target.value).split('-')
           
            const date = new Date(e.target.value);
            // console.log(date.toString())
            // const date = (e.target.value).append('T12:39:45.734+00:00')
            setFormData(
                {
                    ...formData,
                    [e.target.name]:date.toString(),
                }
            )

        }
        else{
            setFormData(
                {
                    ...formData,
                    [e.target.name]: e.target.value
                }
            )
        }
 
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/hospital/requests/create/blood/${localStorage.getItem('hospital_id')}`, formData)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('id', response.data._id)
                            toast.success("Succesfully blood request created :)", {
                                toastId: 'blood request success'
                            })
                            // setTimeout(navigate('/donor/login'), 8000);
                        }
                        else {
                            toast.error("Something went wrong :(", {
                                toastId: 'blood request failed '
                            })
                            throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                toast.error(e?.response?.message, {
                    toastId: "donor register error"
                })
            }
        }
        callApi();
    }

    console.log(formData)
  return (
    <div className='my-4  d-flex justify-content-center'> 

        <Form className='border w-75 w-sm-100 rounded p-3' >
        <h3 className='mb-5 text-center'>Create Blood Request</h3>  
        <Form.Group className="my-3" onChange={handleFormData}  name='bloodgroup'>
                    <Form.Label>Blood Type Required: </Form.Label>

                    <div className="my-4">
                        <Form.Check
                            inline
                            label="A+"
                            value="A+"
                            id="A+"
                            name="bloodgroup"
                            type={'radio'}

                        />
                        <Form.Check
                            inline
                            label="B+"
                            id="B+"
                            name="bloodgroup"
                            type={'radio'}
                            value="B+"
                        />
                        <Form.Check
                            inline
                            label="AB+"
                            id="AB+"
                            name="bloodgroup"
                            type={'radio'}
                            value="AB+"
                        />
                        <Form.Check
                            inline
                            label="O+"
                            id="O+"
                            name="bloodgroup"
                            type={'radio'}
                            value="O+"

                        />
                        <Form.Check
                            inline
                            label="A-"
                            id="A-"
                            name="bloodgroup"
                            type={'radio'}
                            value="A-"

                        />
                        <Form.Check
                            inline
                            label="B-"
                            id="B-"
                            name="bloodgroup"
                            type={'radio'}
                            value="B-"
                        />
                        <Form.Check
                            inline
                            label="AB-"
                            id="AB-"
                            name="bloodgroup"
                            type={'radio'}
                            value="AB-"

                        />
                        <Form.Check
                            inline
                            label="O-"
                            id="O-"
                            name="bloodgroup"
                            type={'radio'}
                            value="O-"
                        />
                    </div>


                 </Form.Group>

                 <Form.Group className="my-4" onChange={handleFormData}  name='component'>
                    <Form.Label>Component Required: </Form.Label>

                    <div className="my-3">
                        <Form.Check
                            inline
                            label="RBC"
                            value="rbc"
                            id="rbc"
                            name="component"
                            type={'radio'}

                        />
                        <Form.Check
                            inline
                            label="PLATELET"
                            id="platelet"
                            name="component"
                            type={'radio'}
                            value="platelet"
                        />
                        <Form.Check
                            inline
                            label="PLASMA"
                            id="plasma"
                            name="component"
                            type={'radio'}
                            value="plasma"
                        />
                        <Form.Check
                            inline
                            label="WHOLE"
                            id="whole"
                            name="component"
                            type={'radio'}
                            value="whole"

                        />
                        
                    </div>


                 </Form.Group>
                
                 <Form.Group className="my-4" onChange={handleFormData}  controlId="purpose" >
                    <Form.Label >Reason</Form.Label>
                    <Form.Control type="text" placeholder="Reason For blood request" name='purpose' />
                </Form.Group>

                <Form.Group className="my-4" onChange={handleFormData}  controlId="fname" >
                    <Form.Label >First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter you name" name='fname' />
                </Form.Group>

                <Form.Group className="my-4"  onChange={handleFormData} controlId='mname'>
                    <Form.Label>Middle name</Form.Label>
                    <Form.Control type="text" placeholder="middle name" name='mname'/>
                </Form.Group>

                <Form.Group className="my-4" controlId="lname" onChange={handleFormData} >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="last name" name='lname' />
                </Form.Group>
                <Form.Group className="my-4" onChange={handleFormData}  name='sex' >
                    <Form.Label>sex</Form.Label>
                    <div className="my-4" >
                        <Form.Check
                            label="male"
                            name="sex"
                            id="male"
                            type={'radio'}
                            value={'Male'}
                        />
                        <Form.Check
                            label="female"
                            name="sex"
                            id="female"
                            type={'radio'}
                            value='Female'
                        />
                    </div>
                    {/* </div>) )}*/}

                </Form.Group>

                <Form.Group className="my-4" controlId="DOB" onChange={handleFormData}  >
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="date" placeholder="Date of birth" name='DOB' />
                </Form.Group>

                <Form.Group className="my-4" controlId="age" onChange={handleFormData}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" name='age' />
                </Form.Group>


                <Form.Group className="my-4" controlId="phone" onChange={handleFormData} >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" name='phone' />
                </Form.Group>

        
                <Form.Group className="my-4" controlId="email" onChange={handleFormData} >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="email" name='email' />
                </Form.Group>


                <Form.Group className="my-4" onChange={handleFormData} controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" type="textarea" placeholder="address" name='address' />
                </Form.Group>

    

    
              
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
    </div>
  )
}

export default BloodRequest;