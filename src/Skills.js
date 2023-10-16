import React, { useState } from "react";
import { BsBraces } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import { useNav } from "./hooks/useNav";

function Skills(props) {
  const skillsRef = useNav("skills");
  const [accordion, setAccordion] = useState("frontend");
  const textAnimate = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.3 },
    },
    visible2: {
      opacity: 0.6,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <div>
      <div
        ref={skillsRef}
        className={`w-full min-h-screen flex justify-center items-center pb-12 md:pb-0 text-6xl snap-center`}
        id="skills"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <motion.h1
            className="text-5xl font-bold"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible"
          >
            Skills
          </motion.h1>
          <motion.p
            className="text-base opacity-60"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible2"
          >
            My technical level
          </motion.p>
          <div className="flex flex-col md:flex-row gap-0 md:gap-2 lg:gap-16 mt-10 md:mt-12">
            <motion.div
              className=" h-auto w-96 flex flex-col items-center px-5 text-base md:p-5"
              variants={textAnimate}
              initial="hidden"
              whileInView="visible"
            >
              <div
                className="w-full font-bold text-lg flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setAccordion("frontend")}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-3xl ${props.textColorMode}`}>
                    <BsBraces />
                  </div>
                  <div className="flex flex-col">
                    Frontend Developer{" "}
                    <div className="text-sm font-normal opacity-60">
                      More than 3 years
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full flex items-center justify-center ${
                    accordion === "frontend" ? "rotate-180" : ""
                  }`}
                >
                  <HiChevronDown />
                </div>
              </div>
              {accordion === "frontend" && (
                <motion.div
                  className="w-full flex flex-col gap-2 mb-4"
                  initial={{ opacity: 0, gap: 0 }}
                  animate={{ opacity: 1, gap: "8px" }}
                >
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      HTML<div>90%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "90%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      CSS<div>80%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "80%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      JavaScript<div>60%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      React<div>85%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "85%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div
                className="w-full font-bold text-lg flex justify-between items-center mt-2 mb-4 cursor-pointer"
                onClick={() => setAccordion("backend")}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-3xl ${props.textColorMode}`}>
                    <FiDatabase />
                  </div>
                  <div className="flex flex-col">
                    Backend Developer{" "}
                    <div className="text-sm font-normal opacity-60">
                      More than 3 years
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full flex items-center justify-center ${
                    accordion === "backend" ? "rotate-180" : ""
                  }`}
                >
                  <HiChevronDown />
                </div>
              </div>
              {accordion === "backend" && (
                <motion.div
                  className="w-full flex flex-col gap-2 mb-4"
                  initial={{ opacity: 0, gap: 0 }}
                  animate={{ opacity: 1, gap: "8px" }}
                >
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      PHP<div>80%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "80%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Node Js<div>70%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "70%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Firebase<div>60%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Python<div>55%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "55%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
            <motion.div
              className="h-auto w-96 px-5 md:p-5 flex flex-col items-center text-base"
              variants={textAnimate}
              initial="hidden"
              whileInView="visible"
            >
              <div
                className="w-full font-bold text-lg flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setAccordion("website")}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-3xl ${props.textColorMode}`}>
                    <MdOutlineDesignServices />
                  </div>
                  <div className="flex flex-col">
                    Website Designer{" "}
                    <div className="text-sm font-normal opacity-60">
                      More than 3 years
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full flex items-center justify-center ${
                    accordion === "website" ? "rotate-180" : ""
                  }`}
                >
                  <HiChevronDown />
                </div>
              </div>
              {accordion === "website" && (
                <motion.div
                  className="w-full flex flex-col gap-2 mb-4"
                  initial={{ opacity: 0, gap: 0 }}
                  animate={{ opacity: 1, gap: "8px" }}
                >
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Figma<div>90%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "90%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Sketch<div>80%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "80%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Phtoshop<div>75%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <motion.div
                        whileInView={{ width: "75%" }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1 opacity-0 pointer-events-none">
                    <div className="flex justify-between w-full">
                      React<div>85%</div>
                    </div>
                    <div
                      className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                    >
                      <div
                        className={`${props.bgColorMode} h-2 rounded-full`}
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}
              {/* ------ Hidden Part ------- */}
              <div
                className="w-full font-bold text-lg flex justify-between items-center mt-2 mb-4 cursor-pointer pointer-events-none opacity-0"
                onClick={() => setAccordion("")}
              >
                <div className="flex items-center gap-3">
                  <div className={`text-3xl ${props.textColorMode}`}>
                    <FiDatabase />
                  </div>
                  <div className="flex flex-col">
                    Developer{" "}
                    <div className="text-sm font-normal opacity-60">
                      More than 3 years
                    </div>
                  </div>
                </div>
                <div
                  className={`h-full flex items-center justify-center ${
                    accordion === "" ? "rotate-180" : ""
                  }`}
                >
                  <HiChevronDown />
                </div>
              </div>
              {accordion !== "website" && (
                <div className="hidden md:block">
                  <div className="w-full flex flex-col gap-2 mb-4 opacity-0 pointer-events-none">
                    <div className="flex flex-col w-full justify-between gap-1">
                      <div className="flex justify-between w-full">
                        PHP<div>80%</div>
                      </div>
                      <div
                        className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                      >
                        <div
                          className={`${props.bgColorMode} h-2 rounded-full`}
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full justify-between gap-1">
                      <div className="flex justify-between w-full">
                        Node Js<div>70%</div>
                      </div>
                      <div
                        className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                      >
                        <div
                          className={`${props.bgColorMode} h-2 rounded-full`}
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between flex-col gap-1">
                      <div className="flex justify-between w-full">
                        Firebase<div>60%</div>
                      </div>
                      <div
                        className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                      >
                        <div
                          className={`${props.bgColorMode} h-2 rounded-full`}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between flex-col gap-1">
                      <div className="flex justify-between w-full">
                        Python<div>55%</div>
                      </div>
                      <div
                        className={`w-full ${props.bgColorMode2} rounded-full h-2 mb-4`}
                      >
                        <div
                          className={`${props.bgColorMode} h-2 rounded-full`}
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ------ Hidden Part ------- */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
