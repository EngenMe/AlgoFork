import About from './components/About';
import Discover from './components/Discover';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <About />
      <Reviews />
      <Faqs />
      <Footer />
    </>
  );
};

export default App;
