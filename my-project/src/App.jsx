import { useState } from 'react'
import './App.css'
import './index.css'
<link href="/src/style.css" rel="stylesheet"></link>
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import LearnMore from "./assets/pages/LearnMore";
import Gallery from "./assets/pages/gallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black text-black font-sans bg-gradient-to-b from-black to-zinc-900">
      
      <Navbar />

      <Routes>
        {/* HOME PAGE (ALL SECTIONS) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Car />
              <Team />
              <Sponsors />
              <Contact />
            </>
          }
        />

        {/* LEARN MORE PAGE */}
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;