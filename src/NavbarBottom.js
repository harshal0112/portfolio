import React, { useState } from "react";
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
import { Link } from "react-scroll";

function NavbarBottom(props) {
  const [isBottomMenu, setIsBottomMenu] = useState("close");
  return (
    <div>
      {isBottomMenu === "open" && (
        <div
          className="h-screen bg-black bg-opacity-40 w-full fixed bottom-0 z-10 md:hidden"
          onClick={() => setIsBottomMenu("close")}
        >
          <motion.div
            className={`px-6 py-8 grid grid-cols-3 grid-rows-2 gap-8 absolute bottom-12 w-full text-base md:hidden ${
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
            <Link to="home" spy={true} smooth={true} duration={500}>
              <div
                className="flex flex-col items-center justify-center "
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaHome />
                </div>
                Home
              </div>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              <div
                className="flex flex-col items-center justify-center "
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaUser />
                </div>
                About
              </div>
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500}>
              <div
                className="flex flex-col items-center justify-center "
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaFileAlt />
                </div>
                <h1>Skills</h1>
              </div>
            </Link>
            <Link
              to="education"
              spy={true}
              duration={500}
              smooth={true}
              offset={40}
            >
              <div
                className="flex flex-col items-center justify-center "
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaGraduationCap />
                </div>
                <h1>Education</h1>
              </div>
            </Link>
            <Link to="work" smooth={true} spy={true} duration={500}>
              <div
                className="flex flex-col items-center justify-center "
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaBriefcase />
                </div>
                <h1>Work</h1>
              </div>
            </Link>
            <Link to="contact" smooth={true} spy={true} duration={500}>
              <div
                className="flex flex-col items-center justify-center"
                onClick={() => setIsBottomMenu("close")}
              >
                <div>
                  <FaPaperPlane />
                </div>
                <h1>Contact</h1>
              </div>
            </Link>
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
