import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h2 className='text-light'>Contact Info</h2>
                        <p className=''>4958 Norman Street Los Angeles, CA 90042</p>
                        <p className=''>+00 (800) 123-4567</p>
                        <p className=''>codershain84@gmail.com</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h2 className='text-light d-block'>Quick Links</h2>
                        <a className='text-dark d-block' href="#">Home</a>
                        <a className='text-dark d-block' href="#">About</a>
                        <a className=' text-dark d-block' href="#">Help?</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h2 className='text-light'>Treatments</h2>
                        <p>Endoscopy</p>
                        <p>Colonscopy</p>
                        <p>Acid Reflux</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <h2 className='text-light'>Subscribe Newsletter</h2>
                        <p>Subscribe to our newsletter to get the latest news right to your inbox.</p>
                        <input style={{ height: '50px' }} type="text" name="" id="" placeholder='Please submit..' />
                        <button type="button" className="btn mt-2 p-2 btn-outline-danger text-light">Submitted</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;