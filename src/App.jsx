import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Mission from './components/Mission';
import CoreValues from './components/CoreValue';
import Founders from './components/Founder';
import Client from './components/Client';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Hero />
      <About/>
      <Gallery/>
      <Mission/>
      <CoreValues/>
      <Founders/>
      <Client/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
