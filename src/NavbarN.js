import React, { useContext, useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { NavContext } from "./context/NavContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { BsCloudsFill, BsMoonFill, BsStars, BsSunFill } from "react-icons/bs";

function Navbar(props) {
  const handleNavClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
  };

  const { activeLinkId } = useContext(NavContext);

  const [settingClick, setSettingClick] = useState("inactive");

  const handleSettingClick = () => {
    if (settingClick === "inactive") {
      setSettingClick("active");
    } else {
      setSettingClick("inactive");
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come Back to Portfolio";
      } else {
        document.title =
          "My Portfolio - " +
          activeLinkId.charAt(0).toUpperCase() +
          activeLinkId.slice(1);
      }
    };

    document.title =
      "My Portfolio - " +
      activeLinkId.charAt(0).toUpperCase() +
      activeLinkId.slice(1);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeLinkId]);

  const navClasses =
    "before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:w-0 before:top-6 hover:before:w-full relative flex justify-center";

  const navClasses2 = `${
    props.colorMode === "red"
      ? "before:bg-red-500"
      : props.colorMode === "green"
      ? "before:bg-green-500"
      : props.colorMode === "yellow"
      ? "before:bg-yellow-500"
      : props.colorMode === "fuchsia"
      ? "before:bg-fuchsia-500"
      : props.colorMode === "slate"
      ? "before:bg-slate-500"
      : props.colorMode === "blue"
      ? "before:bg-blue-500"
      : "before:bg-indigo-500"
  }`;

  return (
    <div className="w-full flex justify-center">
      <div
        className={`hidden md:block top-2 lg:w-9/12 w-11/12 fixed z-10 bg-opacity-95 border-2 rounded-[15px] ${
          props.mode === "dark"
            ? "bg-gradient-to-b from-gray-500/30 to-gray-800/30 backdrop-blur-md text-gray-50 border-gray-800/30"
            : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
        }`}
      >
        <div className="nav flex items-center py-6 justify-center px-4 lg:px-10 xl:px-14">
          <div className="container flex">
            <div
              className="flex items-center font-bold cursor-pointer"
              style={{ fontFamily: "Tilt Prism" }}
              onClick={() => handleNavClick("home")}
            >
              Harshal
            </div>
            <div className="flex ml-auto">
              <div className="flex gap-4 lg:gap-6 xl:gap-8">
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "home" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "home" ? `${props.textColorMode}` : ""
                    }`}
                    onClick={() => handleNavClick("home")}
                  >
                    Home
                  </button>
                </div>
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "about" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "about" ? `${props.textColorMode}` : ""
                    }`}
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </button>
                </div>
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "skills" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "skills" ? `${props.textColorMode}` : ""
                    }`}
                    onClick={() => handleNavClick("skills")}
                  >
                    Skills
                  </button>
                </div>
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "education" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "education"
                        ? `${props.textColorMode}`
                        : ""
                    }`}
                    onClick={() => handleNavClick("education")}
                  >
                    Education
                  </button>
                </div>
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "work" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "work" ? `${props.textColorMode}` : ""
                    }`}
                    onClick={() => handleNavClick("work")}
                  >
                    Work
                  </button>
                </div>
                <div
                  className={`${navClasses} ${navClasses2} ${
                    activeLinkId === "contact" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "contact" ? `${props.textColorMode}` : ""
                    }`}
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact
                  </button>
                </div>
                <div
                  className={`flex items-center self-center ${props.bgColorMode} bg-opacity-75 w-12 rounded-full h-5 relative`}
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
                            className="absolute left-[27.5px] top-[3.5px] text-sm"
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
                            className="absolute top-[3.5px] left-[5.5px] text-sm"
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
                <div className="opacity-40">|</div>
                <div className="flex items-center hover:cursor-pointer relative">
                  <motion.div whileTap={{ scale: 0.9 }}>
                    <FaCog
                      className={`transform transition-transform duration-200 ${
                        settingClick === "active" ? "rotate-90" : "-rotate-90"
                      }`}
                      onClick={() => handleSettingClick()}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {settingClick === "active" && (
                      <motion.div
                        className={`flex flex-col absolute z-50 -end-4 top-7 bg-opacity-95 border-2 border-t-0 rounded-[15px] py-2 px-1 ${
                          props.mode === "dark"
                            ? "bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-md text-gray-50 border-gray-800/50"
                            : "bg-gradient-to-r from-gray-200/50 to-gray-400/50 backdrop-blur-md border-gray-400/20"
                        }`}
                        initial={{
                          opacity: 0,
                          y: "-30px",
                          gap: "0",
                          width: 0,
                          x: "-10px",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          gap: "8px",
                          width: "auto",
                          x: 0,
                        }}
                        transition={{ type: "just", ease: "easeOut" }}
                        exit={{
                          opacity: 0,
                          y: "-20px",
                          gap: "0",
                          width: "100px",
                          x: "-10px",
                        }}
                      >
                        <div
                          className={`h-6 w-6 bg-opacity-95 absolute -z-10 -top-1 rounded-md rotate-45 end-[10px] ${
                            props.mode === "dark"
                              ? "bg-gradient-to-br from-gray-700 via-gray-900/10 to-gray-900/10"
                              : "bg-gradient-to-br from-gray-400 via-gray-300/10 to-gray-100/10"
                          }`}
                        ></div>
                        <div
                          className={`pb-1 mb-1 px-2 pointer-events-none border-b-2 whitespace-nowrap overflow-hidden ${
                            props.mode === "dark"
                              ? "border-white"
                              : "border-black"
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
                            props.colorMode === "blue"
                              ? `text-blue-500 ${
                                  props.mode === "dark"
                                    ? "bg-gray-700/40"
                                    : "bg-gray-700/20"
                                } rounded-md`
                              : ""
                          }`}
                          onClick={() => props.setColorMode("blue")}
                        >
                          <div>Blue</div>
                          <div className="bg-blue-500 h-4 w-4 rounded-[4px]">
                            <FiCheck
                              className={`${
                                props.colorMode === "blue"
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
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
