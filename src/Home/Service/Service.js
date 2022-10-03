import React from 'react';
import './Service.css'

const Service = (props) => {
    const {img , name , application} = props.service;
    return (
        <div className='service '>
           <img className='img-db roundedCircle ' src={img} alt="" />
            <h2 className=' name'>{name}</h2>
            <p>{application} <span className='text-warning'>details..</span></p> 

        </div>
    );
};

export default Service;