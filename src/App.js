// ---------------------------------------------------------------------
//                   Packages IMPORTS
// ---------------------------------------------------------------------
import './App.css';
import { Fragment } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ---------------------------------------------------------------------
//                   HOME PAGES IMPORTS
// ---------------------------------------------------------------------

import Home from "./pages/home/Home/Home";
import HomeWrapper from './pages/home/HomeWrapper';
import KnowAbout from './pages/home/knowAbout/KnowAbout';
import OrganDonation from './pages/home/knowAbout/organDonation/OrganDonation';
import AboutUs from './pages/home/aboutUs/AboutUs';
import OurImpact from './pages/home/OurImpact/OurImpact';
import Impact from './pages/donor/impact/Impact';

// ---------------------------------------------------------------------
//                   DONOR IMPORTS
// ---------------------------------------------------------------------
import DonorRegister from './pages/donor/donorRegister/DonorRegister';
import DonorWrapper from './pages/donor/DonorWrapper';
import DonorHome from "./pages/donor/home/DonorHome";
import DonorLogin from './pages/donor/donorLogin/DonorLogin';
import NewBloodDonate from './pages/donor/NewBloodDonate/NewBloodDonate';

// ---------------------------------------------------------------------
//                   BLOODBANK IMPORTS
// ---------------------------------------------------------------------
import BloodDonation from './pages/home/knowAbout/bloodDonation/BloodDonation';
import BloodBAnkWrapper from './pages/BloodBank/BloodBankWrapper';
import { BloodBankRegister } from './pages/BloodBank/BloodBankRegister/BloodBankRegister';
import { BloodBankDetails } from './pages/BloodBank/BloodBankDetails/BloodBankDetails';
import ImpactBlood from './pages/BloodBank/impactBlood/ImpactBlood';
import AppointmentsBlood from './pages/BloodBank/AppointmentsBlood/AppointmentsBlood';
import BloodBankLogin from './pages/BloodBank/BloodBankLogin/BloodBankLogin';
import { Stock } from './pages/BloodBank/Stock/Stock';
import { Terms } from './pages/BloodBank/Stock/Terms';
import { Requests } from './pages/BloodBank/requests/Requests';
import {BloodBankUpdate} from './pages/BloodBank/BloodBankUpdate/BloodBankUpdate';

// ---------------------------------------------------------------------
//                   HOSPITAL IMPORTS
// ---------------------------------------------------------------------


// import HospitalWrapper from './pages/home/HomeWrapper';
import HospitalInsideWrapper from './pages/Hospital/HospitalInsideWrapper';
import { HosDonReg } from './pages/Hospital/HosDonReg/HosDonReg';
import HosBloodRequest from './pages/Hospital/HosBloodRequest/HosBloodRequest';
import { HospitalRegister } from './pages/Hospital/HospitalRegister/HospitalRegister';
import HospitalLogin from "./pages/Hospital/HospitalLogin/HospitalLogin";
import HoscreateBloodRequest from './pages/Hospital/HoscreateBloodRequest/HoscreateBloodRequest';
import HoscreateOrganRequest from './pages/Hospital/HoscreateOrganRequest/HoscreateOrganRequest';
import HospitalMedicalDetails from './pages/Hospital/HospitalMedicalDetails/HospitalMedicalDetails';

// ---------------------------------------------------------------------
//                   ADMIN IMPORTS
// ---------------------------------------------------------------------
import AdminWrapper from './pages/Admin/AdminWrapper';
import AdminRegis from './pages/Admin/AdminRegis/AdminRegis';
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin'



const App = () => {



  return (
    <Fragment>
      <ToastContainer />
      {/* <TopBar/> */}
      <div style={{
        overflowX: "hidden",
        overflowY: "hidden"
      }} className='m0 p-0'>

        <Routes>

          {/* ---------------------------------------------------
                HOME PAGE routes
         ------------------------------------------------------- */}
          {/* <Route path="/login" element={<LoginScreen />} /> */}
          <Route path="/" element={<HomeWrapper />} >
            <Route path='' element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='aboutUs' element={<AboutUs />} />
            <Route path='ourImpact' element={<OurImpact />} />
            <Route path='knowAbout' element={<KnowAbout />}>
              <Route path="organDonation" element={<OrganDonation />} />
              <Route path="bloodDonation" element={<BloodDonation />} />
              <Route path="*" element={<Navigate to='organDonation'/>} />
            </Route>
          </Route>


          {/* ---------------------------------------------------
                Donor Routes
         ------------------------------------------------------- */}
          <Route path='donor' element={<DonorWrapper />}>
            <Route path='' element={<Navigate to="./login" />} />
            <Route path="register" element={<DonorRegister />} />
            <Route path="donorHome" element={<DonorHome />} />
            <Route path="impact" element={<Impact />} />
            <Route path='login' element={<DonorLogin />} />
            <Route path='blood-donate' element={<NewBloodDonate/>}/>
            <Route path='*' element={<Navigate to="./404" />} />
          </Route>

          {/* ---------------------------------------------------
                Blood Bank Routes
         ------------------------------------------------------- */}
          <Route path='bloodBank' element={<BloodBAnkWrapper />}>
            <Route path='' element={<Navigate to="./login" />} />
            <Route path='register' element={<BloodBankRegister />} />
            <Route path='login' element={<BloodBankLogin />} />
            <Route path='details' element={<BloodBankDetails />} />
            <Route path="impact" element={<ImpactBlood />} />
            <Route path="appoint" element={<AppointmentsBlood />} />
            <Route path="stock" element={<Stock />} />
            <Route path='terms' element={<Terms />} />
            <Route path='request' element={<Requests />} />
            <Route path='updateDet' element={<BloodBankUpdate/>}/>
            <Route path='*' element={<Navigate to="./login" />} />
          </Route>

          {/* ---------------------------------------------------
               Hospital Routes
         ------------------------------------------------------- */}

          <Route path='hospital' element={<HospitalInsideWrapper />}>
          <Route path='' element={<Navigate to="./login" />} />
            <Route path='register' element={<HospitalRegister />} />
            <Route path='login' element={<HospitalLogin/>} />
            <Route path='request' element={<HosBloodRequest />} />
            <Route path='donorReg' element={<HosDonReg />} />
            <Route path='blood-request' element={<HoscreateBloodRequest />} />
            <Route path='organ-request' element={<HoscreateOrganRequest />} />
            <Route path='hos-don-det' element={<HospitalMedicalDetails/>}/>
            <Route path='*' element={<Navigate to="./register" />} />
          </Route>

          {/* ---------------------------------------------------
               Admin Routes
         ------------------------------------------------------- */}


          <Route path='/admin/' element={<AdminWrapper />}>
            <Route path='' element={<Navigate to="./login" />} />
            <Route path='login' element={<AdminLogin/>}/>
            <Route path='regis' element={<AdminRegis />} />
          </Route>
          <Route path='*' element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
