// App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForCustomers from './components/ForCustomers';
import ForBeautyCenters from './components/ForBeautyCenters';
import WhySlivyaIsDifferent from './components/WhySlivyaIsDifferent';
import OurTeam from './components/OurTeam';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/animations.css';

const App = () => {
    return (
        <div className="bg-gradient-to-br w-full overflow-x-hidden  from-gray-900 via-purple-900 to-gray-900 min-h-screen text-white">
            <Header />
            <Hero />
            <HowItWorks />
            <ForCustomers />
            <ForBeautyCenters />
            <WhySlivyaIsDifferent />
            <OurTeam />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default App;