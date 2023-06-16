import { react, Fragment, } from 'react'
import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { envs } from '../../../utils/endpoint';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const baseURL = envs.endpoint;

const WaitingReceptionistDetails = (props) => {


  const navigate = useNavigate();

  const donorDetails = JSON.parse(localStorage.getItem('donorDetails'));
  // console.log(donorDetails)
  const organDetails = JSON.parse(localStorage.getItem('orgnRequestlist'));
  // console.log(organDetails)
  // style={{ width: '30%', margin:"0px 0px 0px 0px" }}
  const objname = ['epts', 'rawepts', 'name', 'phone', 'sex', 'DOB', 'bloodgroup', 'diabetes', 'priororgantransplant',
    'dialysisDate', 'kidneydisease', 'hlatype', 'hlatypingmethod', 'pralevel', 'hlaantigen', 'pramethod',
    'sensitizationreason', 'height', 'surgicalevaluationremarks',
    'otherdetails']

  // console.log(donorDetails._id)
  return (
    <Fragment>
      <div className='px-5 my-5 mx-5'>

        <div className='container mw-100'>
          <h1 >Donor Details</h1>

          <div className='row gy-3 gx-3 rounded mt-4 border rounded p-3'>
            {
              Object.keys(donorDetails).map((ele, index) => {
                return (
                  ele !== 'password' && <div className='col-lg-4 col-12' style={{ border: '0px solid black' }}>
                    {
                      <><span style={{ fontWeight: 'bolder:' }}>{ele}{': '}</span>{donorDetails[ele]}</>
                    }
                  </div>

                )
              })

            }
          </div>

          <h1 className='mt-5'>WAITING RECIPIENTS DETAILS</h1>

          {
            organDetails.map((ll, index1) => {
              return (


                <div className='row gy-3 gx-3 rounded mt-4 border rounded p-3 border border-dark' key={index1}>

                  {
                    objname.map((ele, index) => {
                      // console.log(ll[ele])
                      return (<div className='col-lg-4 col-12' style={{ border: '0px solid black' }} key={index}>
                        <span style={{ fontWeight: 'bolder:' }}>{ele}{': '}</span>
                        {ll[ele]}</div>
                      )
                    })}
                  <button className='btn btn-danger w-25' onClick={() => {
                    
                    async function callApi() {
                      try {
                        await axios
                          .put(`${baseURL}/hospital/donorregistry/confirm/yes/submit/confirm/${donorDetails._id}/${ll._id}/${localStorage.getItem('hospital_id')}`)
                          .then((response) => {
                            console.log(response.status)
                            if (response.status === 200) {
                              toast.success(`Succesfully `, {
                                toastId: 'blood bank register'
                              })
                              // props?.callForApiCallRerender();
                              // navigate('/');
                              navigate('/hospital/trans-under-process')

                            }
                            else {
                              toast.error(`unable to verify`, {
                                toastId: 'blood bank register'
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

                  }}>Confirm Transplantation {ll._id}</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </Fragment>
  )
}


export default WaitingReceptionistDetails;
