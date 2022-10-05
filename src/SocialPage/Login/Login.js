import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialPage from '../SocialPage/SocialPage';


const Login = () => {

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/signup')
    }

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
                    <p className='text-center'>Visited Our website ?
                        <span onClick={navigateRegister}
                            className='btn-navigate text-danger'>Please Register</span></p>
                    <p className='text-center'>Forgett Password?
                        <span
                            className='btn-navigate text-danger'>Reset Password</span></p>

                </Form>
                <SocialPage></SocialPage>
            </div>
        </div>
    );
};

export default Login;