import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import About from "./components/About";
import PathFlow from "./components/PathFlow"; // Journey Section
import Gallery from "./components/Gallery";
import Mission from "./components/Mission";
import CoreValues from "./components/CoreValue";
import Founders from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// New Pages
import Dashboard from "./pages/Dashboard";
import Story from "./pages/Story";
import Vision from "./pages/Vision";

function App() {
  return (
    <Router>


      {/* Routes */}
      <Routes>
        {/* Home page keeps all old sections */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#0a0a0a] text-white">
              <Hero />
              <About />
              <PathFlow />
              <Gallery />
              <Mission />
              <CoreValues />
              <Founders />
              <Contact />
            </div>
          }
        />

        {/* New Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/story" element={<Story />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
                    <Footer />

    </Router>
    
  );
}

export default App;
