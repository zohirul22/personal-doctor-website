import React from 'react';
import Bannar from '../Bannar/Bannar';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
        <Bannar></Bannar>
        <Services></Services>
        <Reviews></Reviews>
        <Info></Info>
  
        </div>
    );
};

export default Home;