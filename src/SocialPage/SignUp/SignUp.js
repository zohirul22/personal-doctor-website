import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { navigate, useNavigate } from 'react-router-dom';
import SocialPage from '../SocialPage/SocialPage';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const handelSubmittedLogin = () => {
        navigate('/login')
    }


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
                    <p className='text-center'>Already account ?
                        <span onClick={handelSubmittedLogin}
                            className='btn-navigate text-danger'>Please Login</span></p>
                    <p className='text-center'>Forget Password?
                        <span
                            className='btn-navigate text-danger'>Reset Password</span></p>
                </Form>
                <SocialPage></SocialPage>
            </div>
        </div>
    );
};

export default SignUp;