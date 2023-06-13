import  { Fragment, react } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import HospitalTopBar from "./HospitalTopBar/HospitalTopBar";

const HospitalInsideWrapper = ()=> {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Fragment>
            {
                localStorage.getItem('hospital_is_logged') && <HospitalTopBar/>
                // location.pathname === '/bloodbank/register') ? <BloodBankTopBar/>:''
            }
            <Outlet/>
            
        </Fragment>
    )
}

export default HospitalInsideWrapper;
