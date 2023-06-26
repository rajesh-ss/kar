import { React, Fragment, useState } from 'react';
import classes from "./LoginScreen.module.css";
import {toast} from "react-toastify";
import {envs} from "../../../utils/endpoint";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL = envs.endpoint;

const HospitalLogin = (props) => {

    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const navigate = useNavigate();


    const handleLogin = (e)=>{

        e.preventDefault();
        
        const form= {
            'email':email,
            'password':psw
        }
        console.log(form)
        async function callApi() {
            try {
                await axios
                    .post(`${baseURL}/hospital/login`,form)
                    .then((response) => {
                        console.log(response.status)
                        if (response.status === 200) {
                            localStorage.setItem('hospital_id', response?.data._id)
                            localStorage.setItem('hospital_name',response?.name)
                            localStorage.setItem('hospital_is_logged',true);
                            toast.success("Logging in  :)", {
                                toastId: 'hospital success'
                            })
                            setTimeout(navigate('/hospital/request'), 8000);
                        }
                        else {
                            console.log("response")
                            toast.error(response?.data, {
                                toastId: 'hospital error'
                            })
                            // throw Error;
                        }
                    })
            }
            catch (e) {
                console.log(e);
                console.log(e.response)
                toast.error(e.response.data, {
                    toastId: 'Hospital login'
                })
            }
        }
        callApi();
    }


    const navRegister =  ()=>{
        navigate('hospital/register')
    }   

    const handleGoingHome = () =>{
        navigate('/home')

    }

    return (
        <Fragment>
            <div className={`row ${classes['outer-container']}`}>
                <div className={`col-lg ${classes['left-container']}`}>
                    <div className={` ${classes['form-cont']}`}>
                        <div className={`my-3 ${classes['form-heading']}`} onClick={handleGoingHome}>
                            KARNA
                        </div>

                        <form className={`d-flex flex-column ${classes['form-sty']}`}>
                            <p className={`mt-4 ${classes['login-type']}`}>Hospital LOGIN</p>
                            <label className='mt-2'
                            htmlFor='getEmail'>Email</label>
                            <input
                                className='my-1'
                                type='email'
                                id='getEmail'
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <label className='mt-4' 
                            htmlFor='getPsw'>Password</label>
                            <input
                                className='my-1'
                                type='password'
                                id="getPsw"
                                onChange={(e)=> setPsw(e.target.value)}
                            />
                            <button className='mt-5' onClick={handleLogin}>Log IN</button>
                        
                            <h5 className="mt-5"
                             onClick={navRegister} 
                             style={{cursor:'pointer'}}
                             >NEW USER? CLICK HERE TO REGISTER</h5>
                        
                        </form>

                    </div>
                    
                </div>
                <div className={`col-sm d-none d-lg-block ${classes['right-container']}`}>

                </div>
            </div>

        </Fragment>
    )
}


export default HospitalLogin;
