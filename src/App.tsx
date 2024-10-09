import About from './components/About';
import Discover from './components/Discover';
import Faqs from './components/Faqs';
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
    </>
  );
};

export default App;
