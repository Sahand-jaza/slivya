import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ForCustomers from '../components/ForCustomers';
import ForBeautyCenters from '../components/ForBeautyCenters';
import WhySlivyaIsDifferent from '../components/WhySlivyaIsDifferent';
import OurTeam from '../components/OurTeam';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <HowItWorks />
            <ForCustomers />
            <ForBeautyCenters />
            <WhySlivyaIsDifferent />
            <OurTeam />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Home;
