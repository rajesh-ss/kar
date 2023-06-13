import  { Fragment, react } from 'react'
import { Outlet } from 'react-router-dom';
import DonorTopBar from './DonorTopBar/DonorTopBar';

const DonorWrapper = ()=> {
    return (
        <Fragment>
            <DonorTopBar/>
            <Outlet/>
        </Fragment>
    )
}

export default DonorWrapper;
