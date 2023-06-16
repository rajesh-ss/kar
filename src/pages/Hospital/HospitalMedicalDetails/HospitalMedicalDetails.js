import { react, useState, Fragment } from 'react';
import classes from "./DonorRegister.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { envs } from "../../../utils/endpoint"



const baseURL = envs.endpoint;

const HospitalMedicalDetails = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "height": 0,
        "age": 0,
        "weight": 0,
        "creatinine": 0,
        "ethnicity": "",
        "hypertension": "",
        "diabetes": '',
        "causeOfDeath": "",
        "hcv": "",
        "dcd": '',
    });



    const handleFormData = (e) => {
        if (e.target.name === 'height'
            || e.target.name === 'age'
            || e.target.name === 'weight'
            || e.target.name === 'creatinine') {
            console.log("Either one og them is activated !", Number(e.target.value))
            setFormData(
                {
                    ...formData,
                    [e.target.name]: Number(e.target.value),
                }
            )
        }
        else if (e.target.name === 'DOB') {

            console.log(e.target.value)
            const [year, month, day] = (e.target.value).split('-')

            const date = new Date(e.target.value);
            // console.log(date.toString())
            // const date = (e.target.value).append('T12:39:45.734+00:00')
            setFormData(
                {
                    ...formData,
                    [e.target.name]: date.toString(),
                }
            )

        }
        else {
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
                    .put(`${baseURL}/hospital/donorregistry/confirm/yes/submit/${localStorage.getItem('donor_list_id')}`, formData)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('donorDetails', JSON.stringify(response.data.donorDetails))
                            localStorage.setItem('orgnRequestlist',  JSON.stringify(response.data.OrganRequestlist))

                            toast.success("Succesfully Registered :)", {
                                toastId: 'donor register'
                            })

                            setTimeout(navigate('/hospital/waiting-recipent'), 2000);
                        }
                        else {
                            toast.error("Something went wrong :(", {
                                toastId: 'donor register'
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

    console.log(formData);

    return (
        <Fragment>
            <div className={`w-100 ${classes['dis-det']}`}>
                <h3>ENTER FOLLOWING MEDICAL DETAILS OF DONOR</h3>
                <Form className='border w-75 rounded p-3' >

                    <Form.Group className="mb-3" controlId="age" onChange={handleFormData}>
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Age" name='age' />
                    </Form.Group>


                    <Form.Group className="mb-3" onChange={handleFormData} controlId="height" >
                        <Form.Label >Height</Form.Label>
                        <Form.Control type="number" placeholder="height" name='height' />
                    </Form.Group>

                    <Form.Group className="mb-3" onChange={handleFormData} controlId='weight'>
                        <Form.Label>height</Form.Label>
                        <Form.Control type="number" placeholder="weight" name='weight' />
                    </Form.Group>

                    <Form.Group className="mb-3" onChange={handleFormData} name='ethnicity' >
                        <Form.Label>ETHNICITY</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="AMERICAN INDIAN"
                                name="ethnicity"
                                id="AMERICAN INDIAN"
                                type={'radio'}
                                value={'American Indian'}
                            />
                            <Form.Check
                                label="PACIFIC ISLANDER"
                                name="ethnicity"
                                id="PACIFIC ISLANDER"
                                type={'radio'}
                                value='Pacific Island'
                            />
                            <Form.Check
                                label="ASIAN"
                                name="ethnicity"
                                id="ASIAN"
                                type={'radio'}
                                value='Asian'
                            />
                            <Form.Check
                                label="WHITE"
                                name="ethnicity"
                                id="WHITE"
                                type={'radio'}
                                value='White'
                            />
                            <Form.Check
                                label="BLACK"
                                name="ethnicity"
                                id="BLACK"
                                type={'radio'}
                                value='Black'
                            />
                            <Form.Check
                                label="MULTI RACIAL"
                                name="ethnicity"
                                id="MULTI RACIAL"
                                type={'radio'}
                                value='Multi Racial'
                            />
                            <Form.Check
                                label="HISPANIC"
                                name="ethnicity"
                                id="HISPANIC"
                                type={'radio'}
                                value='Hispanic'
                            />
                        </div>

                        {/* </div>) )}*/}

                    </Form.Group>

                    <Form.Group className="mb-3" onChange={handleFormData} name='hypertension' >
                        <Form.Label>HYPERTENSION</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="true"
                                name="hypertension"
                                id="HYPERTENSIONTRUE"
                                type={'radio'}
                                value={'true'}
                            />
                            <Form.Check
                                label="false"
                                name="hypertension"
                                id="HYPERTENSIONFALSE" 
                                type={'radio'}
                                value='false'
                            />
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" onChange={handleFormData} name='diabetes' >
                        <Form.Label>DIABETES</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="true"
                                name="diabetes"
                                id="DIABETESTRUE"
                                type={'radio'}
                                value={'true'}
                            />
                            <Form.Check
                                label="false"
                                name="diabetes"
                                id="DIABETESFALSE"
                                type={'radio'}
                                value='false'
                            />
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" onChange={handleFormData} name='causeOfDeath' >
                        <Form.Label>CAUSE OF DEATH:</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="ANOXIA"
                                name="causeOfDeath"
                                id="ANOXIA"
                                type={'radio'}
                                value={'Anoxia'}
                            />
                            <Form.Check
                                label="CNS TUMOR"
                                name="causeOfDeath"
                                id="CNS TUMOR"
                                type={'radio'}
                                value='Cns Tumor'
                            />
                            <Form.Check
                                label="CEREBROVASCULAR ACCIDENT"
                                name="causeOfDeath"
                                id="CEREBROVASCULAR ACCIDENT"
                                type={'radio'}
                                value='Cerebrovascular Accident'
                            />
                            <Form.Check
                                label="HEAD TRAUMA"
                                name="causeOfDeath"
                                id="HEAD TRAUMA"
                                type={'radio'}
                                value='Head Trauma'
                            />
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" onChange={handleFormData} controlId='CREATININE(in mg/dL)' name='creatinine'>
                        <Form.Label>CREATININE(in mg/dL)</Form.Label>
                        <Form.Control type="number" placeholder="CREATININE(in mg/dL)" name='creatinine' />
                    </Form.Group>


                    <Form.Group className="mb-3" onChange={handleFormData} name='hcv' >
                        <Form.Label>HEPATITIS C VIRUS STATUS:</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="true"
                                name="hcv"
                                id="HEPATITIS C VIRUS STATUS TRUE"
                                type={'radio'}
                                value={'true'}
                            />
                            <Form.Check
                                label="false"
                                name="hcv"
                                id="HEPATITIS C VIRUS STATUS FALSE"
                                type={'radio'}
                                value='false'
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" onChange={handleFormData} name='dcd' >
                        <Form.Label>DONATION AFTER CIRCULAR DEATH</Form.Label>
                        {/* {['radio'].map((type) => (*/}
                        <div className="mb-3" >
                            <Form.Check
                                label="true"
                                name="dcd"
                                id="DONATION AFTER CIRCULAR DEATH TRUE"
                                type={'radio'}
                                value={'true'}
                            />
                            <Form.Check
                                label="false"
                                name="dcd"
                                id="DONATION AFTER CIRCULAR DEATH FALSE"
                                type={'radio'}
                                value='false'
                            />
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </Fragment>
    )
}


export default HospitalMedicalDetails;
