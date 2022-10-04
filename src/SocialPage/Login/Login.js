import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='signup'>
            <div className="mx-auto w-50 signup-from ">
                <h1 className='text-center text-success my-4'>Please  Login</h1>
                <Form >
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="email" placeholder="Enter email.." />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                 
                    <Button variant="primary mb-2 mx-auto d-block w-50 btn-design" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;