import React, { useState, useContext } from "react";
import {
  FaBriefcase,
  FaFileAlt,
  FaGraduationCap,
  FaHome,
  FaMoon,
  FaPaperPlane,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
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
          className="h-screen bg-black bg-opacity-40 backdrop-blur-sm w-full fixed bottom-0 z-10 md:hidden"
          onClick={() => setIsBottomMenu("close")}
        >
          <motion.div
            className={`px-6 py-8 grid grid-cols-3 grid-rows-2 gap-8 absolute bottom-12 w-full text-base md:hidden rounded-t-lg ${
              props.mode === "dark"
                ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-50"
                : "bg-white"
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
        className={`flex px-6 py-4 fixed w-full bottom-0 md:hidden shadow-2xl shadow-black z-20 ${
          props.mode === "dark" ? "bg-gray-900 text-gray-50" : "bg-white"
        }`}
      >
        <div
          className={`${isBottomMenu === "open" ? "hidden" : ""} font-bold`}
          style={{ fontFamily: "Tilt Prism" }}
        >
          Harshal
        </div>
        <div className="flex ml-auto gap-6">
          <button
            className={`${isBottomMenu === "open" ? "hidden" : ""}`}
            onClick={() =>
              props.setMode(props.mode === "dark" ? "light" : "dark")
            }
          >
            {props.mode === "light" ? <FaMoon /> : <FaSun />}
          </button>
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
