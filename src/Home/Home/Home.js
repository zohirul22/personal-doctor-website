import React from 'react';
import Bannar from '../Bannar/Bannar';
import Info from '../Info/Info';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Footer from '../Footer/Footer'
import TittlePage from '../../TittlePage/TittlePage';

const Home = () => {
   
    return (
        <div>
        <Bannar></Bannar>
        <Services></Services>
        <Reviews></Reviews>
        <Info></Info>
        <Footer></Footer>
        <TittlePage title="Home"></TittlePage>
        </div>
    );
};

export default Home;