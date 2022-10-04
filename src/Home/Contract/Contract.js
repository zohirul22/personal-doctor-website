import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../src/img/about/bannar/bannar-1.png'

const Contract = () => {
    return (
        <div>

            {/* carusol setup */}
            <div className="">
                <Carousel>
                    <Carousel.Item>
                        <img

                            style={{ height: '450px' }}
                            className="d-block w-100"
                            src={bannar1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className='text-info'>Contact Us </h3>
                            <p className='text-primary'>Submit an enquiry, request a call-back or book a consultation at our any clinic locations. !!!...</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* carusol setup */}

            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h2>Get In Touch</h2>
                        <div className="">
                            <form  className='d-block'>
                                <label  for="fname">First Name</label>
                                <input className='d-block mt-2' type="text" id="fname" name="firstname" placeholder="Your name.." />

                                <label for="lname">Last Name</label>
                                <input className='d-block mt-2' type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                <label for="appointment">
                                    Appointment For*</label>
                                <select id="appointment" name="appointment" className='d-block mt-2'>
                                    <option value="Endoscopy">Endoscopy</option>
                                    <option value="Coloscopy">Coloscopy</option>
                                    <option value="Reflux">Acid Reflux</option>
                                    <option value="Disease">Liver Disease</option>
                                </select>

                                <input className='mt-3'  type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6"></div>
                </div>
            </div>


            <div className=""></div>
            <div className=""></div>
        </div>
    );
};

export default Contract;