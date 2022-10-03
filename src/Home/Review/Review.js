import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({ review }) => {
    const { img, name, application } = review;
    return (
        <div className='service'>
            <img className=' review ' src={img} alt="" />
            <h2 className=' name'>{name}</h2>
            <p>{application} </p>
            <p> <span>Rating : </span>
                <span><FontAwesomeIcon className='text-danger' icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='text-danger' icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='text-danger' icon={faStar}></FontAwesomeIcon></span>
                <span><FontAwesomeIcon className='text-danger' icon={faStar}></FontAwesomeIcon></span>


            </p>
        </div>
    );
};

export default Review;