import React from 'react';
import Header from './components/Header/Header.jsx';
import Cookie from './components/Cookie/Cookie.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Guarantee from './components/Guarantee/Guarantee.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import WhyItWorks from './components/WhyItWorks/WhyItWorks.jsx';
import Tariffs from './components/Tariffs/Tariffs.jsx';
import MediaAboutUs from './components/MediaAboutUs/MediaAboutUs.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Footer from './components/Footer/Footer.jsx';

const Landing = () => {
  return (
    <div className="Landing">
      <Header />
      <Cookie />
      <HowItWorks />
      <Guarantee />
      <Presentation />
      <WhyItWorks />
      <Tariffs />
      <MediaAboutUs />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Landing;
