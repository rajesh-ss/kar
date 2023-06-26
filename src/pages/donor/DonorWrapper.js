import  { Fragment, react } from 'react'
import { Outlet } from 'react-router-dom';
import DonorTopBar from './DonorTopBar/DonorTopBar';
import { useLocation } from 'react-router-dom';

const DonorWrapper = ()=> {

    const location = useLocation();
    console.log(location)
    return (
        <Fragment>
            {
                location.pathname === '/donor/login' || 
                location.pathname === '/donor/register'?<></> : <DonorTopBar/>
            }
           
            <Outlet/>
        </Fragment>
    )
}

export default DonorWrapper;
