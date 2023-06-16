import  { Fragment, react } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import HospitalTopBar from "./HospitalTopBar/HospitalTopBar";

const HospitalInsideWrapper = ()=> {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Fragment>
            {
                
            location.pathname !== '/hospital/login' &&  <HospitalTopBar/>     
            
            }
            <Outlet/>
            
        </Fragment>
    )
}

export default HospitalInsideWrapper;
