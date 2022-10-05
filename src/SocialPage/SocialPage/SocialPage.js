import React from 'react';
import './SocialPage.css'
import google from '../../../src/img/social/google1 (1).png'
import github from '../../../src/img/social/GitHub-Mark (1).png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';


const SocialPage = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();


    let componentsError;
    if (googleError || githubError) {
        componentsError = <p className='text-danger text-center'>Error: {googleError?.message} {githubError?.message} </p>
    }

    if (googleUser || githubUser) {
        navigate('/home')
    }



    return (
        <div>
            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-info w-50"></div>
                <p className='px-2 mt-1'>Or</p>
                <div style={{ height: "1px" }} className="bg-info w-50"></div>
            </div>
            {componentsError}
            <div className="text-center">

                {/*google button */}
                <button
                    onClick={() => signInWithGoogle()}
                    type="button" 
                    className="btn btn-outline-primary  d-block mx-auto w-50 mb-2">
                    <img className='btn-img' src={google} alt="" /> <span>Google</span>
                </button>
                {/*google button */}



                {/*github button */}
                <button 
                onClick={()=>signInWithGithub()}
                type="button" 
                className="btn btn-outline-primary  d-block mx-auto w-50 mb-2">
                    <img className='btn-img' src={github} alt="" /> <span>Github</span>
                </button>
                {/*github button */}
            </div>


        </div>
    );
};

export default SocialPage;