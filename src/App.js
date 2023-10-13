import "./App.css";
import Navbar from "./NavbarN";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
// import Work from "./Work";
import Contact from "./Contact";
import NavbarBottom from "./NavbarBottom";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavProvider from "./context/NavContext";
import Services from "./Services";
import YouHaveAProject from "./YouHaveAProject";
import Testimonial from "./Testimonial";
import WorkX from "./WorkX";

function App() {
  const getActiveMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || "light";
  };

  const getActiveColorMode = () => {
    return JSON.parse(localStorage.getItem("colormode")) || "indigo";
  };

  const [mode, setMode] = useState(getActiveMode);
  const [isVisible, setIsVisible] = useState(false);
  const [colorMode, setColorMode] = useState(getActiveColorMode);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
    localStorage.setItem("colormode", JSON.stringify(colorMode));
    if (mode === "light") {
      document.body.style.backgroundColor = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#111827";
    }
  }, [mode, colorMode]);

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

  const textColorMode = `${
    colorMode === "red"
      ? "text-red-500"
      : colorMode === "green"
      ? "text-green-500"
      : colorMode === "yellow"
      ? "text-yellow-500"
      : colorMode === "blue"
      ? "text-blue-500"
      : colorMode === "fuchsia"
      ? "text-fuchsia-500"
      : colorMode === "slate"
      ? "text-slate-500"
      : "text-indigo-500"
  }`;

  const bgColorMode = `${
    colorMode === "red"
      ? "bg-red-500"
      : colorMode === "green"
      ? "bg-green-500"
      : colorMode === "yellow"
      ? "bg-yellow-500"
      : colorMode === "blue"
      ? "bg-blue-500"
      : colorMode === "fuchsia"
      ? "bg-fuchsia-500"
      : colorMode === "slate"
      ? "bg-slate-500"
      : "bg-indigo-500"
  }`;

  const bgColorMode2 = `${
    colorMode === "red"
      ? "bg-red-100"
      : colorMode === "green"
      ? "bg-green-100"
      : colorMode === "yellow"
      ? "bg-yellow-100"
      : colorMode === "blue"
      ? "bg-blue-100"
      : colorMode === "fuchsia"
      ? "bg-fuchsia-100"
      : colorMode === "slate"
      ? "bg-slate-100"
      : "bg-indigo-100"
  }`;

  const picBgColorMode = `${
    colorMode === "red"
      ? "from-red-500 via-red-400 to-red-500"
      : colorMode === "green"
      ? "from-green-500 via-green-400 to-green-500"
      : colorMode === "yellow"
      ? "from-yellow-500 via-yellow-400 to-yellow-500"
      : colorMode === "blue"
      ? "from-blue-500 via-blue-400 to-blue-500"
      : colorMode === "fuchsia"
      ? "from-fuchsia-500 via-fuchsia-400 to-fuchsia-500"
      : colorMode === "slate"
      ? "from-slate-500 via-slate-400 to-slate-500"
      : "from-indigo-500 via-indigo-400 to-indigo-500"
  }`;

  const shadowColorMode = `${
    colorMode === "red"
      ? "shadow-red-900"
      : colorMode === "yellow"
      ? "shadow-yellow-900"
      : colorMode === "green"
      ? "shadow-green-900"
      : colorMode === "blue"
      ? "shadow-blue-900"
      : colorMode === "fuchsia"
      ? "shadow-fuchsia-900"
      : colorMode === "slate"
      ? "shadow-slate-900"
      : "shadow-indigo-900"
  }`;

  return (
    <>
      <NavProvider>
        <div
          className={`${
            mode === "dark"
              ? "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-gray-50"
              : "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
          }`}
        >
          <Navbar
            mode={mode}
            setMode={setMode}
            colorMode={colorMode}
            setColorMode={setColorMode}
            textColorMode={textColorMode}
            bgColorMode={bgColorMode}
          />
          <Home
            mode={mode}
            colorMode={colorMode}
            textColorMode={textColorMode}
            bgColorMode={bgColorMode}
            shadowColorMode={shadowColorMode}
            picBgColorMode={picBgColorMode}
          />
          <About
            mode={mode}
            colorMode={colorMode}
            bgColorMode={bgColorMode}
            shadowColorMode={shadowColorMode}
          />
          <Skills
            mode={mode}
            colorMode={colorMode}
            bgColorMode={bgColorMode}
            textColorMode={textColorMode}
            bgColorMode2={bgColorMode2}
          />
          <Education
            mode={mode}
            colorMode={colorMode}
            bgColorMode={bgColorMode}
          />
          {/* <Work mode={mode} /> */}
          <WorkX bgColorMode={bgColorMode} shadowColorMode={shadowColorMode} />
          <Services
            mode={mode}
            colorMode={colorMode}
            textColorMode={textColorMode}
          />
          <YouHaveAProject
            textColorMode={textColorMode}
            picBgColorMode={picBgColorMode}
          />
          <Testimonial textColorMode={textColorMode} />
          <Contact
            mode={mode}
            colorMode={colorMode}
            textColorMode={textColorMode}
            bgColorMode={bgColorMode}
            shadowColorMode={shadowColorMode}
            bgColorMode2={bgColorMode2}
          />
          <Footer picBgColorMode={picBgColorMode} />
          <NavbarBottom
            mode={mode}
            setMode={setMode}
            colorMode={colorMode}
            setColorMode={setColorMode}
            bgColorMode={bgColorMode}
          />
          {isVisible && (
            <Link to="home" smooth={true} spy={true} duration={500}>
              <button
                className={`fixed text-white p-3 rounded-md ${bgColorMode} right-2 bottom-16 md:bottom-10 md:right-6 hover:contrast-150 active:scale-95 bg-opacity-50`}
              >
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
      </NavProvider>
    </>
  );
}

export default App;
