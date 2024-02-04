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
import { FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { NavContext } from "./context/NavContext";
import { BiArrowBack } from "react-icons/bi";

function NavbarBottom(props) {
  const [isBottomMenu, setIsBottomMenu] = useState("close");

  const [isThemeChooser, setIsThemeChooser] = useState("X");

  const settingAnimate = {
    noAnim: {
      opacity: 0,
    },
    settingAnimation: {
      x: [-10, -9, 0, 0, 0, 0, 0, -9, -10],
      opacity: [0, 0, 0.5, 0.5, 0.5, 0.5, 0.5, 0, 0],
      transition: { delay: 0.5, duration: 3.5 },
    },
  };

  const settingAnimate2 = {
    noAnim: {
      opacity: 0,
    },
    settingAnimation: {
      x: 0,
      opacity: 0,
    },
  };
  const handleNavClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
    setIsBottomMenu("close");
  };

  const { activeLinkId } = useContext(NavContext);
  return (
    <div>
      {isBottomMenu === "open" && isThemeChooser !== "open" && (
        <div
          className={`h-screen ${
            props.mode === "dark" ? "bg-black" : "bg-white"
          } bg-opacity-80 backdrop-blur-sm w-full fixed bottom-0 z-10 md:hidden`}
          onClick={() => setIsBottomMenu("close")}
        >
          <motion.div
            className={`px-6 py-8 grid grid-cols-3 grid-rows-2 gap-8 absolute bottom-10 pb-10 w-full text-base md:hidden rounded-t-[15px] border-t shadow-inner ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-700/30 to-gray-900/30 backdrop-blur-md text-gray-50 border-gray-600/30"
                : "bg-gradient-to-b from-gray-100/30 to-gray-200/30 backdrop-blur-md border-gray-500/20"
            }`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "tween" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex flex-col items-center justify-center ${
                activeLinkId === "home" ? `${props.textColorMode}` : ""
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
                activeLinkId === "about" ? `${props.textColorMode}` : ""
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
                activeLinkId === "skills" ? `${props.textColorMode}` : ""
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
                activeLinkId === "education" ? `${props.textColorMode}` : ""
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
                activeLinkId === "work" ? `${props.textColorMode}` : ""
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
                activeLinkId === "contact" ? `${props.textColorMode}` : ""
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

      {isThemeChooser === "open" && (
        <div
          className={`h-screen ${
            props.mode === "dark" ? "bg-black/50" : "bg-white/50"
          } bg-opacity-80 backdrop-blur-sm w-full fixed bottom-0 z-20 flex justify-center items-center md:hidden`}
          onClick={() => setIsThemeChooser("close")}
        >
          <motion.div
            className={`px-4 mx-2 py-4 flex flex-col gap-2 text-base md:hidden rounded-[15px] shadow-inner border ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-700/30 to-gray-900/30 backdrop-blur-md text-gray-50 border-gray-400/30"
                : "bg-gradient-to-b from-gray-100/30 to-gray-200/30 backdrop-blur-md border-gray-500/20"
            }`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "tween" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center">
              <BiArrowBack onClick={() => setIsThemeChooser("close")} />
              <div className="select-none">Settings</div>
              <BiArrowBack className="opacity-0 pointer-events-none" />
            </div>
            <div
              className={`pb-1 mb-1 px-2 pointer-events-none select-none border-b-2 whitespace-nowrap overflow-hidden ${
                props.mode === "dark" ? "border-white" : "border-black"
              }`}
            >
              Change Theme
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "indigo"
                  ? `text-indigo-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("indigo")}
            >
              <div>Default</div>
              <div className="bg-indigo-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "indigo"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "red"
                  ? `text-red-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("red")}
            >
              <div>Red</div>
              <div className="bg-red-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "red"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "green"
                  ? `text-green-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("green")}
            >
              <div>Green</div>
              <div className="bg-green-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "green"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "yellow"
                  ? `text-yellow-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("yellow")}
            >
              <div>Yellow</div>
              <div className="bg-yellow-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "yellow"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "sky"
                  ? `text-sky-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("sky")}
            >
              <div>Sky</div>
              <div className="bg-sky-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "sky"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "fuchsia"
                  ? `text-fuchsia-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("fuchsia")}
            >
              <div>Fuchsia</div>
              <div className="bg-fuchsia-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "fuchsia"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
            <div
              className={`flex justify-between items-center overflow-hidden cursor-pointer px-[6px] ${
                props.colorMode === "slate"
                  ? `text-slate-500 ${
                      props.mode === "dark"
                        ? "bg-gray-700/40"
                        : "bg-gray-700/20"
                    } rounded-md`
                  : ""
              }`}
              onClick={() => props.setColorMode("slate")}
            >
              <div>Slate</div>
              <div className="bg-slate-500 h-4 w-4 rounded-[4px]">
                <FiCheck
                  className={`${
                    props.colorMode === "slate"
                      ? "text-white opacity-100 pt-[1px]"
                      : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
      <div
        className={`flex px-6 py-4 fixed w-full bottom-0 md:hidden z-20 rounded-t-xl border-t shadow-inner ${
          props.mode === "dark"
            ? "bg-gradient-to-b from-gray-700/30 to-gray-900/30 backdrop-blur-md text-gray-50 border-gray-600/30"
            : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-300/20"
        }`}
      >
        <div>
          {isBottomMenu === "open" ? (
            <div
              className="flex items-center gap-2"
              onClick={() =>
                setIsThemeChooser(isThemeChooser === "open" ? "close" : "open")
              }
            >
              <motion.div
                animate={{ rotate: [-45, -45, 0, 0, 0, 0, 0, -45, -45] }}
                transition={{ delay: 0.5, duration: 3.5 }}
              >
                <FaCog />
              </motion.div>
              <motion.div
                variants={
                  isThemeChooser === "X" ? settingAnimate : settingAnimate2
                }
                initial="noAnim"
                animate="settingAnimation"
              >
                Settings
              </motion.div>
            </div>
          ) : (
            <div
              className={`font-bold select-none`}
              style={{ fontFamily: "Tilt Prism" }}
            >
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
                  <div key={props.mode}>
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
                  <div key={props.mode}>
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
                  </div>
                )}
              </AnimatePresence>
            </button>
          </div>
          {isThemeChooser !== "open" && (
            <button
              onClick={() =>
                setIsBottomMenu(isBottomMenu === "open" ? "close" : "open")
              }
            >
              {isBottomMenu === "open" ? <AiOutlineClose /> : <BsGrid />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarBottom;
