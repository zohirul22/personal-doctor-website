import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signup'>
          <div className="mx-auto w-50 signup-from ">
          <h1 className='text-center text-primary my-4'>Please Sign Up</h1>
            <Form >
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                  
                    <Form.Control type="text" placeholder="Enter name.." />
                  
                </Form.Group>

                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
                  
                    <Form.Control type="email" placeholder="Enter email.." />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">
               
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary mb-2 mx-auto d-block w-50 btn-design" type="submit">
                    Sign Up
                </Button>
            </Form>
          </div>
        </div>
    );
};

export default SignUp;