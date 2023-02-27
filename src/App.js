import "./App.css";
import Navbar from "./NavbarX";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";
import NavbarBottom from "./NavbarBottom";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [isVisible, setIsVisible] = useState(false);
  console.log(mode);

  const listenToScroll = () => {
    let HeightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > HeightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <div className="h-screen w-full snap-y snap-mandatory">
        <Navbar mode={mode} setMode={setMode} />
        <Home mode={mode} />
        <About mode={mode} />
        <Skills mode={mode} />
        <Education mode={mode} />
        <Work mode={mode} />
        <Contact mode={mode} />
        <Footer />
        <NavbarBottom mode={mode} setMode={setMode} />
        {isVisible && (
          <Link to="home" smooth={true} spy={true} duration={500}>
            <button className="fixed text-white p-3 rounded-md bg-indigo-600 right-2 bottom-16 md:bottom-10 md:right-6 hover:contrast-150 active:scale-95 bg-opacity-80">
              <motion.div
                animate={{ y: [0, -2, 0, 2, 0] }}
                transition={{
                  duration: 1,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <FaArrowUp />
              </motion.div>
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default App;
