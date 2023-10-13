import React, { useState, useContext } from "react";
import { BsSunFill, BsCloudsFill, BsMoonFill, BsStars } from "react-icons/bs";
import {
  FaBriefcase,
  FaCog,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { NavContext } from "./context/NavContext";

function NavbarBottom(props) {
  const [isBottomMenu, setIsBottomMenu] = useState("close");

  const handleNavClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
    setIsBottomMenu("close");
  };

  const { activeLinkId } = useContext(NavContext);
  return (
    <div>
      {isBottomMenu === "open" && (
        <div
          className={`h-screen ${
            props.mode === "dark" ? "bg-black" : "bg-white"
          } bg-opacity-80 backdrop-blur-sm w-full fixed bottom-0 z-10 md:hidden`}
          onClick={() => setIsBottomMenu("close")}
        >
          <motion.div
            className={`px-6 py-8 grid grid-cols-3 grid-rows-2 gap-8 absolute bottom-12 w-full text-base md:hidden rounded-t-[15px] shadow-inner ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-700/30 to-gray-900/30 backdrop-blur-md text-gray-50 border-gray-800/30"
                : "bg-gradient-to-b from-gray-100/30 to-gray-200/30 backdrop-blur-md border-gray-400/20"
            }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "tween" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "home" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("home")}
            >
              <div>
                <FaHome />
              </div>
              Home
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "about" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("about")}
            >
              <div>
                <FaUser />
              </div>
              About
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "skills" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("skills")}
            >
              <div>
                <FaFileAlt />
              </div>
              <h1>Skills</h1>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "education" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("education")}
            >
              <div>
                <FaGraduationCap />
              </div>
              <h1>Education</h1>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "work" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("work")}
            >
              <div>
                <FaBriefcase />
              </div>
              <h1>Work</h1>
            </div>
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "contact" ? "text-indigo-500" : ""
              }`}
              onClick={() => handleNavClick("contact")}
            >
              <div>
                <FaPaperPlane />
              </div>
              <h1>Contact</h1>
            </div>
          </motion.div>
        </div>
      )}
      <div
        className={`flex px-6 py-4 fixed w-full bottom-0 md:hidden shadow-2xl shadow-black z-20 rounded-t-xl ${
          props.mode === "dark"
            ? "bg-gradient-to-b from-gray-700/30 to-gray-900/30 backdrop-blur-md text-gray-50 border-gray-800/30"
            : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
        }`}
      >
        <div>
          {isBottomMenu === "open" ? (
            <motion.div whileTap={{ scale: 0.85 }}>
              <FaCog />
            </motion.div>
          ) : (
            <div className={`font-bold`} style={{ fontFamily: "Tilt Prism" }}>
              Harshal
            </div>
          )}
        </div>
        <div className="flex ml-auto gap-6">
          <div
            className={`flex items-center self-center ${
              props.bgColorMode
            } bg-opacity-75 w-12 rounded-full h-5 relative ${
              isBottomMenu === "open" ? "hidden" : ""
            }`}
          >
            <button
              className="flex items-center"
              onClick={() =>
                props.setMode(props.mode === "light" ? "dark" : "light")
              }
            >
              <AnimatePresence>
                {props.mode === "light" ? (
                  <div>
                    <motion.div
                      className="bg-gray-100 border border-black h-6 w-6 rounded-full flex justify-center items-center"
                      initial={{ x: "24px" }}
                      animate={{ x: 0, rotate: 360 }}
                    >
                      <BsSunFill />
                    </motion.div>
                    <motion.div
                      className="absolute left-[28px] top-[3.5px] text-sm"
                      initial={{ y: -5, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      <BsCloudsFill />
                    </motion.div>
                  </div>
                ) : (
                  <AnimatePresence>
                    <motion.div
                      className="bg-gray-800 border border-white h-6 w-6 rounded-full flex justify-center items-center"
                      initial={{ x: 0 }}
                      animate={{ x: "24px", rotate: 360 }}
                    >
                      <BsMoonFill />
                    </motion.div>
                    <motion.div
                      className="absolute top-[3.5px] left-[5px] text-sm"
                      initial={{ y: 5, opacity: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      animate={{ y: 0, opacity: 1 }}
                    >
                      <BsStars />
                    </motion.div>
                  </AnimatePresence>
                )}
              </AnimatePresence>
            </button>
          </div>
          <button
            onClick={() =>
              setIsBottomMenu(isBottomMenu === "open" ? "close" : "open")
            }
          >
            {isBottomMenu === "open" ? <AiOutlineClose /> : <BsGrid />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
