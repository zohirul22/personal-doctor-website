import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import TittlePage from '../../TittlePage/TittlePage';
import SocialPage from '../SocialPage/SocialPage';
import './SignUp.css'

const SignUp = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const handelSubmittedLogin = () => {
        navigate('/login')
    }


    const handelSignUp = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')
    }



    return (
        <div className='signup'>
            <div className="mx-auto w-50 signup-from ">
                <h1 className='text-center text-primary my-4'>Please Sign Up</h1>
                <Form onSubmit={handelSignUp}>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">

                        <Form.Control type="text" name='name' placeholder="Enter name.." required />

                    </Form.Group>

                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="email" name='email' placeholder="Enter email.." required />
                    </Form.Group>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group
                        className="mb-3 w-75 mx-auto" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setAgree(!agree)}
                            className={agree ? 'text-primary' : 'text-danger'}
                            type="checkbox"
                            label="Terms and Condition" />
                    </Form.Group>
                    <Button
                        disabled={!agree}
                        variant="primary mb-2 mx-auto d-block w-50 btn-design"
                        type="submit">
                        Sign Up
                    </Button>
                    <p className='text-center account'>Already account ?
                        <span onClick={handelSubmittedLogin}
                            className='btn-navigate text-danger '> Please Login</span></p>

                </Form>
                <SocialPage></SocialPage>
                <TittlePage title="SignUp"></TittlePage>
            </div>
        </div>
    );
};

export default SignUp;