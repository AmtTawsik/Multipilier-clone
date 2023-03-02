import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '../Feature/Feature';
import Accordian from '../Accordian/Accordian';
import Carasol from '../Carasol/Carasol';
import CTA from '../CTA/CTA';
import Social from '../Social/Social';
import Prising from '../Prising/Prising';
import ContactUs from '../ContactUs/ContactUs';
import Smarter from '../Smarter/Smarter';
import Money from '../Money/Money';
import Subscribe from '../Subscribe/Subscribe';
import Brands from '../Brands/Brands';
import Every from '../Every/Every';
import Multiplier from '../Multiplier/Multiplier';
import Grow from '../Grow/Grow';
import FaQ from '../FaQ/FaQ';
import Ready from '../Ready/Ready';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Brands></Brands>
            <Feature></Feature>
            <Every></Every>
            <Multiplier></Multiplier>
            <Grow></Grow>
            <Slider></Slider>
            <FaQ></FaQ>
            <Ready></Ready>
        </div>
    );
};

export default Home;