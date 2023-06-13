import  { Fragment, react } from 'react'
import { Outlet } from 'react-router-dom';
import HomeTopBar from './HomeTopBar/HomeTopBar';

const HomeWrapper = ()=> {
    return (
        <Fragment>
            <HomeTopBar/>
            <Outlet/>
        </Fragment>
    )
}

export default HomeWrapper;

