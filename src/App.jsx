import Contacts from './components/Contacts/Contacts.jsx';
import Header from './components/Header/Header.jsx';
import HowItWorks from './components/HowItWorks/HowItWorks.jsx';
import Guarantee from './components/Guarantee/Guarantee.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import WhyItWorks from './components/WhyItWorks/WhyItWorks.jsx';
import Tariffs from './components/Tariffs/Tariffs.jsx';
import MediaAboutUs from './components/MediaAboutUs/MediaAboutUs.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <HowItWorks />
      <Guarantee />
      <Presentation />
      <WhyItWorks />
      <Tariffs />
      <MediaAboutUs />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
