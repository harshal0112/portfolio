import React, { useState } from "react";
import { BsBraces } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from "framer-motion";

function Skills(props) {
  const [accordion, setAccordion] = useState("frontend");
  return (
    <div>
      <div
        className={`w-full min-h-screen flex justify-center items-center py-20 text-6xl snap-center ${
          props.mode === "dark" ? "bg-gray-800 text-gray-50" : ""
        }`}
        id="skills"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-5xl font-bold">Skills</h1>
          <p className="text-base opacity-60">My technical level</p>
          <div className="flex flex-col md:flex-row gap-0 md:gap-20 mt-10 md:mt-20">
            <div className=" h-auto w-96 flex flex-col items-center px-5 text-base md:p-5">
              <div
                className="w-full font-bold text-lg flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setAccordion("frontend")}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl text-indigo-600">
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
                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      HTML<div>90%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "90%" }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      CSS<div>80%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "80%" }}
                        transition={{ delay: 0.05 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      JavaScript<div>60%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.1 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      React<div>85%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "85%" }}
                        transition={{ delay: 0.15 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="w-full font-bold text-lg flex justify-between items-center mt-2 mb-4 cursor-pointer"
                onClick={() => setAccordion("backend")}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl text-indigo-600">
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
                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      PHP<div>80%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "80%" }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Node Js<div>70%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "70%" }}
                        transition={{ delay: 0.05 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Firebase<div>60%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.1 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Python<div>55%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "55%" }}
                        transition={{ delay: 0.15 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="h-auto w-96 px-5 md:p-5 flex flex-col items-center text-base">
              <div
                className="w-full font-bold text-lg flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setAccordion("website")}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl text-indigo-600">
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
                <div className="w-full flex flex-col gap-2 mb-4">
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Figma<div>90%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "90%" }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full justify-between gap-1">
                    <div className="flex justify-between w-full">
                      Sketch<div>80%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "80%" }}
                        transition={{ delay: 0.1 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1">
                    <div className="flex justify-between w-full">
                      Phtoshop<div>75%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <motion.div
                        whileInView={{ width: "75%" }}
                        transition={{ delay: 0.2 }}
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "0%" }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="flex w-full justify-between flex-col gap-1 opacity-0 pointer-events-none">
                    <div className="flex justify-between w-full">
                      React<div>85%</div>
                    </div>
                    <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-indigo-800 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              {/* ------ Hidden Part ------- */}
              <div
                className="w-full font-bold text-lg flex justify-between items-center mt-2 mb-4 cursor-pointer pointer-events-none opacity-0"
                onClick={() => setAccordion("")}
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl text-indigo-600">
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
                      <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-indigo-800 h-2 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex flex-col w-full justify-between gap-1">
                      <div className="flex justify-between w-full">
                        Node Js<div>70%</div>
                      </div>
                      <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-indigo-800 h-2 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between flex-col gap-1">
                      <div className="flex justify-between w-full">
                        Firebase<div>60%</div>
                      </div>
                      <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-indigo-800 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex w-full justify-between flex-col gap-1">
                      <div className="flex justify-between w-full">
                        Python<div>55%</div>
                      </div>
                      <div className="w-full bg-indigo-200 rounded-full h-2 mb-4">
                        <div
                          className="bg-indigo-800 h-2 rounded-full"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* ------ Hidden Part ------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
