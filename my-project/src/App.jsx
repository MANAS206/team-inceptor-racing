import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import LearnMore from "./components/LearnMore";
import Gallery from "./components/gallery";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans bg-gradient-to-b from-black to-zinc-900 min-h-screen flex flex-col">
      
      {/* PERSISTENT GLOBAL NAVIGATION */}
      <Navbar />

      {/* CORE ROUTING EXECUTION ENGINE */}
      <main className="flex-grow">
        <Routes>
          {/* HOME PAGE (ALL ARCHITECTURAL SECTIONS STACKED ON ONE ROUTE) */}
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

          {/* STANDALONE SUB-ROUTES */}
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* PERSISTENT GLOBAL FOOTER */}
      <Footer />
      
    </div>
  );
}