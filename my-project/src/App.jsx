import { useState } from 'react'
import './App.css'
<link href="/src/style.css" rel="stylesheet"></link>
import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
    <div className="bg-black text-white font-sans bg-gradient-to-b from-black to-zinc-900">
      <Navbar />
      <Home />
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
