import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { envs } from '../../../utils/endpoint'
import './EmergencyService.scss';


const baseURL = envs.endpoint;
const EmergencyService = () => {

    const [volan, setVolan] = useState([{
        "_id": "647c361d9de65d6005d2431e",
        "status": "Booked",
        "name": "Suja",
        "address": "Andhrahalli Pakka, Bglore",
        "phone": 8998989877,
        "sex": "Male",
        "DOB": "1999-06-24T12:00:00.734Z",
        "bloodgroup": "O-",
        "diabetes": true,
        "priororgantransplant": true,
        "dialysisDate": "2015-02-16T12:00:00.734Z",
        "kidneydisease": "Chronic Kidney Disease",
        "hlatype": "HLA-A",
        "hlatypingmethod": "Polymerase Chain Reaction",
        "pralevel": 5,
        "hlaantigen": "HLA-A",
        "pramethod": "Single Antigen Bead",
        "sensitizationreason": "Previous Transplantation",
        "height": 171,
        "weight": 88,
        "surgicalevaluationremarks": "all good bro np",
        "otherdetails": "no probelm dude chill",
        "rawepts": 1.9045193071995095,
        "epts": 33,
        "toHospital": {
        "_id": "6478f4cb7e56ffe321a6044f",
        "verificationStatus": "Verified",
        "name": "Apollo",
        "email": "hospital@gmail.com",
        "password": "$2b$10$AMDaPGYxbv5qv7WZnOGFyuvtp9puS.wzAcGishB3n9RnGFpWr7FsG",
        "address": "bglore banashankari",
        "phone": 9999900000,
        "hospitalregnum": "554567123478384294",
        "role": "Hospital",
        "createdAt": "2023-06-01T19:43:07.824Z",
        "updatedAt": "2023-06-01T19:43:24.317Z",
        "__v": 0
        },
        "createdAt": "2023-06-04T06:58:37.584Z",
        "updatedAt": "2023-06-09T12:33:22.758Z",
        "__v": 0,
        "donorDetails": {
        "familyPermission": false,
        "_id": "6478f50a7e56ffe321a60453",
        "fname": "Goutham",
        "mname": "D",
        "lname": "Reddy",
        "email": "donor5@gmail.com",
        "password": "$2b$10$sTJPexDaP8rV3T.x82VJveQ0DDd06hTZGeGymbmZsEF9oXR8yl3Y.",
        "address": "K.R Puram,Kodigehalli",
        "phone": 8861861428,
        "sex": "Male",
        "DOB": "2001-08-07T00:00:00.000Z",
        "age": 52,
        "bloodgroup": "A+",
        "aadharId": 551675114222,
        "emergencycontactname": "Sisters name",
        "emergencycontactphone": 8296339964,
        "role": "Donor",
        "dead": true,
        "permanentbanreason": "false",
        "eligibledate": "2023-08-24T19:49:33.926Z",
        "livessavedmeter": 0,
        "points": 100,
        "badge": "Enthusiast",
        "volunteer": true,
        "createdAt": "2023-06-01T19:44:10.191Z",
        "updatedAt": "2023-06-06T19:28:20.771Z",
        "__v": 0,
        "lastdonationdate": "2023-06-01T19:49:33.926Z",
        "organRequest": true,
        "causeOfDeath": "Cerebrovascular Accident",
        "creatinine": 1.7,
        "dcd": true,
        "diabetes": false,
        "ethnicity": "Hispanic",
        "hcv": false,
        "height": 183,
        "hypertension": true,
        "weight": 81,
        "kdpi": 68,
        "kdrimed": 1.1970958469566073,
        "feedback": "The Flawless Interface Between Blood and Organ Donation Removes The Complexity, Amazing Website"
        },
        "fromHospital": {
        "_id": "647c55313255a1264aab171e",
        "verificationStatus": "Verified",
        "name": "Pro Med",
        "email": "hospital1@gmail.com",
        "password": "$2b$10$U0/tYM/b422YdyXtiOac0.h7P7qFRrRboNsDLTaUXmcmCfpafVVSm",
        "address": "bglore banashankari",
        "phone": 9999900000,
        "hospitalregnum": "554567123478384294",
        "role": "Hospital",
        "createdAt": "2023-06-04T09:11:13.313Z",
        "updatedAt": "2023-06-04T09:11:37.756Z",
        "__v": 0
        }
        }]);

    useEffect(()=>{
        async function callBloodApi() {
            try {
                await axios
                    .get(`${baseURL}/hospital/emergencyservice`)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            setVolan(response?.data)
                        }
                        else {
                            console.log("response")
                        }
                    })
            }
            catch (e) {
                console.log(e);
               
            }
        }
        callBloodApi()
    },[])

  return (
    
    <div className='main-Cont'>
            <h1 
            style={{color:'#FE472D', fontWeight:'800'}}
            >Available Volunteers List</h1>
            <table className=' tabular'>
                <tr>
                <th>Blood Group</th>
                <th>Name</th>
                <th>Phone number</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Address</th>
                </tr>

                {
                    volan.map((ele, index)=>{
                        return(
                        <tr>
                            <td>{`${ele.bloodgroup}`}
                            </td>
                            <td>{`${ele.fname}`}
                            </td>
                            <td>{`${ele.phone}`}
                            </td>
                            <td>{`${ele.sex}`}
                            </td>
                            <td>{`${ele.age}`}
                            </td>
                            <td>{`${ele.address}`}
                            </td>
                        </tr>
                        )
                    })
                }
            


            </table>
     
    </div>  
  )
}


export default EmergencyService;
