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
      : colorMode === "sky"
      ? "text-sky-500"
      : colorMode === "fuchsia"
      ? "text-fuchsia-500"
      : colorMode === "slate"
      ? "text-slate-500"
      : "text-indigo-500"
  }`;

  const svgColorMode1 = `${
    colorMode === "red"
      ? "stop-red-500"
      : colorMode === "green"
      ? "stop-green-500"
      : colorMode === "yellow"
      ? "stop-yellow-500"
      : colorMode === "sky"
      ? "stop-sky-500"
      : colorMode === "fuchsia"
      ? "stop-fuchsia-500"
      : colorMode === "slate"
      ? "stop-slate-500"
      : "stop-indigo-500"
  }`;

  const svgColorMode2 = `${
    colorMode === "red"
      ? "stop-red-400"
      : colorMode === "green"
      ? "stop-green-400"
      : colorMode === "yellow"
      ? "stop-yellow-400"
      : colorMode === "sky"
      ? "stop-sky-400"
      : colorMode === "fuchsia"
      ? "stop-fuchsia-400"
      : colorMode === "slate"
      ? "stop-slate-400"
      : "stop-indigo-400"
  }`;

  const svgShadow = `${
    colorMode === "red"
      ? "drop-shadow-[0_6px_6px_rgba(127,29,29,1)]"
      : colorMode === "green"
      ? "drop-shadow-[0_6px_6px_rgba(20,83,45,1)]"
      : colorMode === "yellow"
      ? "drop-shadow-[0_6px_6px_rgba(113,63,18,1)]"
      : colorMode === "sky"
      ? "drop-shadow-[0_6px_6px_rgba(12,74,110,1)]"
      : colorMode === "fuchsia"
      ? "drop-shadow-[0_6px_6px_rgba(112,26,117,1)]"
      : colorMode === "slate"
      ? "drop-shadow-[0_6px_6px_rgba(15,23,42,1)]"
      : "drop-shadow-[0_6px_6px_rgba(49,46,129,1)]"
  }`;

  const bgColorMode = `${
    colorMode === "red"
      ? "bg-red-500"
      : colorMode === "green"
      ? "bg-green-500"
      : colorMode === "yellow"
      ? "bg-yellow-500"
      : colorMode === "sky"
      ? "bg-sky-500"
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
      : colorMode === "sky"
      ? "bg-sky-100"
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
      : colorMode === "sky"
      ? "from-sky-500 via-sky-400 to-sky-500"
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
      : colorMode === "sky"
      ? "shadow-sky-900"
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
          } duration-200`}
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
            svgColorMode1={svgColorMode1}
            svgColorMode2={svgColorMode2}
            svgShadow={svgShadow}
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
            textColorMode={textColorMode}
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
