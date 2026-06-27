import { useState } from 'react'
import './App.css'
<link href="/src/style.css" rel="stylesheet"></link>
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Car from "./components/Car";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Car />
      <Team />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
