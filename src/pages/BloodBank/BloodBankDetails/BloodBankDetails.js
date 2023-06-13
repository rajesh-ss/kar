
import {ReactComponentElement, Fragment} from 'react'
import classes from "./BloodBankDetails.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const BloodBankDetails = ()=> {

  return (
    <Fragment>
         <div className={classes['dis-det']}>
            <h3>BLOOD BANK REGISTRATION</h3>
            <Form className='border  w-lg-75 w-sm-100 rounded p-3 w-75'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter you name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Blood Bank register No.</Form.Label>
                    <Form.Control type="number" placeholder="register No" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>PHONE No.</Form.Label>
                    <Form.Control type="number" placeholder="PH NO." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>EMAIL ID</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>address</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="address" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    update
                </Button>

            </Form>
            </div>
    </Fragment>
  )

}
