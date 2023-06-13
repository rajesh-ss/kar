
import React, { Fragment } from 'react'
import women from "../../assests/woman.png"

 const TestMonial = (props)=> {

  return (
  <Fragment>
    <div className='row rounded my-2 p-2 w-100 d-md-block d-flex justify-content-center align-items-center' 
    style={{ boxShadow:"0px 0px 10px #00000069"}}>
        <div className='col-lg-2  my-3'>
            <div className='px-3'>
                <img src={props.ima} alt='profile-pic' style={{width: "70px", height: "70px"}}></img>
                <h4>{props.name? props.name:" "}</h4>
            </div>
        </div>
        <div className='col-lg-10  my-3'>
            <p className='test-justify display-7'>
            {props.feed? props.feed : ""}
            </p>
        </div>

    </div>
  </Fragment>  
  );
}

export default TestMonial;
