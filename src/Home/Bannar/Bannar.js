import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannar1 from '../../../src/img/bannar/bannar-1.jpg'
import bannar2 from '../../../src/img/bannar/bannar-2.jpg'
import bannar3 from '../../../src/img/bannar/bannar-3.jpg'

const Bannar = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info'>Who Is Doctor </h3>
                        <p className='text-primary'>A doctor is someone who is experienced and certified to practice medicine to help maintain or restore physical and mental health. A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury !!!...</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>Vital Role in Society</h3>
                        <p className='text-warning'>The most pivotal social work is ensuring the healthcare that the doctors in a country serve. In any of our ailments, we go for the consult of a doctor.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '450px' }}
                        className="d-block w-100"
                        src={bannar1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-info'>Noble Profession</h3>
                        <p className='text-primary'>Doctors are a noble profession, and the child dreams of being a doctor. Student sometimes determines their aim in life to be a doctor.....</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Bannar;