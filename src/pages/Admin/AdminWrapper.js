import  { Fragment, react } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import AdminTopBar from "./AdminTopBar/AdminTopBar";


const AdminWrapper = ()=> {
    const location = useLocation();
    console.log(location)
    return (
        <Fragment>
            {
                location.pathname !=='/admin/login' && <AdminTopBar/>
            }
            <Outlet/>
        </Fragment>
    )
}

export default AdminWrapper;
