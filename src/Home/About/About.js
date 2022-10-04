import React from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css'
import bannar1 from '../../../src/img/about/bannar/bannar-1.png'
import img1 from '../../../src/img/about/about-img.jpg';
import imgFrist from '../../../src/img/about/services/frist.png'
import imgSecond from '../../../src/img/about/services/second.png'
import imgFourth from '../../../src/img/about/services/fourth.png'

const About = () => {
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
                            <h3 className='text-info'>About Us </h3>
                            <p className='text-primary'>We are the largest full-service gastroenterology group in India!!.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* carusol setup */}


            {/* Ours services start */}

            <div className="container mt-5">
                <div className="row g-5   ">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h3 className='mb-4 text-success'>Welcome to Gastroenterology Clinic</h3>
                        <p className='mb-5'>We can arrange procedures such as endoscopy, colonscopy, and gastrointestinal treatments at some of the top hospitals in the india. Wherever you are being treated.</p>
                        <img style={{ width: "100%" }} src={img1} alt="" />

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h3 className='mb-4 text-success'>Our Core values</h3>
                        <p className='mb-4'>Suspendisse honcus porta imperdieroin convallis ligula utnisl pretium faucibus. Aliquamuis justoneue dictum scelerisque sitametuis veliecenas malesuada justovel lobortis utnisl pretium faucibus justoneue.</p>

                        <div className="d-flex">
                            <div className="">
                                <img src={imgFrist} alt="" />
                            </div>

                            <div className="ms-5">
                                <h4>Patient as Care Point</h4>
                                <p>Nescnulla consectetur facitiam sedrisus sed metusnare accumsanet egestas massa quis elementum aecenas commodo.</p>

                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex">
                            <div className="">
                                <img src={imgSecond} alt="" />
                            </div>

                            <div className="ms-2">
                                <h4>National & Ethical Medical Practice</h4>
                                <p>Crasnec risusnec nulla consectetur facitiam sedrisus sed metusnare accumsanet egestas massa quis elementum faucibue.

                                </p>

                            </div>
                        </div>

                        {/* <hr /> */}
                        <div className="d-flex">
                            <div className="">
                                <img src={imgFourth} alt="" />
                            </div>

                            <div className="ms-5">
                                <h4>Research</h4>
                                <p>Dacitiam sedrisus sednec nulla consectetur metusnare accumsanet egestas massa quis elementum faucibuse.</p>

                            </div>
                        </div>
                        {/* <hr /> */}





                    </div>
                </div>

            </div>
            {/* Ours services End */}

            {/* Ours services mission  start */}
            <div className=" vission-mission container mt-5">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-6 ">
                        <h2>Our Vision</h2>
                        <p>We are committed to the care and improvement of human life. We will strive to deliver high quality cost effective healthcare in communities we serve. We trust our valuable members of our healthcare team and we pledge to treat each other with loyalty and respect.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <h2>Our Mission</h2>
                        <p>Early detection and treatment of gastrointestinal diseases to minimize suffering and improve quality of life. Done inrdum turpisvele dapibuset hendrerit sapien tinciduntras velorci eu massa varius maxi rabitur sedpharetra arcues.</p>
                    </div>
                </div>

            </div>
            {/* Ours services mission  End */}


        </div>
    );
};

export default About;