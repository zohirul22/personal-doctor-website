import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialPage from '../SocialPage/SocialPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handelLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/signup')
    }

    let componentsError;
    if (error) {
        componentsError = <p className='text-danger text-center'>Error: {error.message}  </p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please your email')
        }
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='signup'>
            <div className="mx-auto w-50 signup-from ">
                <h1 className='text-center text-success my-4'>Please  Login</h1>
                <Form onSubmit={handelLogin}>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="email" name='email' placeholder="Enter email.." required ref={emailRef} />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Password" required ref={passwordRef} />
                    </Form.Group>
                    {componentsError}
                    <Button variant="primary mb-2 mx-auto d-block w-50 btn-design" type="submit">
                        Login
                    </Button>
                    <p className='text-center'>Visited Our website ?
                        <span onClick={navigateRegister}
                            className='btn-navigate text-danger account'>Please Register</span></p>
                    <p className='text-center'>Forget Password?
                        <span
                            onClick={resetPassword}
                            className='btn-navigate text-danger account'>Reset Password</span></p>

                </Form>
                <SocialPage></SocialPage>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;