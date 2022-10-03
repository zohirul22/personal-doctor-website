import React from 'react';
import './Info.css'
import imginfo from '../../../src/img/info/info.png'

const Info = () => {
    return (
        <div className='container  '>
            <h1 className='my-5 text-center text-primary'>Welcome to Gastroenterology Clinic</h1>
            <div className="row info-details">
                <div className="col-sm-12 col-md-6 col-lg-6 g-5  part-1">
                    <h2 className='text-info mt-5'>Dr. Edward Johnston</h2>
                    <p><small className='text-Secondary'>GASTROENTEROLOGY & BIOPHOTONICS</small></p>
                    <h3 className='text-success'>Edward Johnston was won a prestigious research award to take intercalated .</h3>
                    <p>He is expertise in Heartburn, indigestion and acid reflux & treatment of patients with oesophageal strictures and Achalasia.Lorem ipsum simple.treatment of patients with oesophageal strictures and Achalasia.Lorem ipsum simple.</p>
                    <button type="button" className="btn btn-outline-info text-danger">View Profile</button>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 g-5">
                    <img style={{ width: "100%" }} src={imginfo} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Info;