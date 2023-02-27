import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { motion } from "framer-motion";

function Education(props) {
  return (
    <div>
      <div
        className={`min-h-screen py-16 w-full flex justify-center items-center text-6xl snap-start ${
          props.mode === "dark" ? "bg-gray-800 text-gray-50" : ""
        }`}
        id="education"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-5xl font-bold">Education</h1>
          <p className="text-base opacity-60">My educational journey</p>
          <div className="flex flex-col md:flex-row mt-24">
            <div className=" h-[350px] w-auto flex items-center justify-center px-5">
              <div className="h-full w-[1px] bg-indigo-800 flex flex-col items-center justify-between relative">
                <div className="w-4 h-4 bg-indigo-800 rounded-full flex items-center">
                  <motion.div
                    className="h-24 w-40 absolute right-1"
                    initial={{ x: 100, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    <div className="font-bold text-lg">SSC</div>
                    <div className="text-base opacity-70">MSBSHSE Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2014 - 2015
                    </div>
                  </motion.div>
                </div>
                <div className="w-4 h-4 bg-indigo-800 rounded-full flex items-center">
                  <motion.div
                    className="h-24 w-40 absolute left-8"
                    initial={{ x: -130, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    <div className="font-bold text-lg">HSC</div>
                    <div className="text-base opacity-70">MSBSHSE Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2016 - 2017
                    </div>
                  </motion.div>
                </div>
                <div className="w-4 h-4 bg-indigo-800 rounded-full flex items-center">
                  <motion.div
                    className="h-24 w-40 absolute right-1"
                    initial={{ x: 100, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    <div className="font-bold text-lg">Comp. Eng. Dip.</div>
                    <div className="text-base opacity-70">MSBTE Mumbai</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2017 - 2020
                    </div>
                  </motion.div>
                </div>
                <div className="w-4 h-4 bg-indigo-800 rounded-full flex items-center">
                  <motion.div
                    className="h-24 w-40 absolute left-8"
                    initial={{ x: -130, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.5 }}
                  >
                    <div className="font-bold text-lg">B. Tech (ENTC)</div>
                    <div className="text-base opacity-70">SPPU Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2020 - 2024
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
