import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { motion } from "framer-motion";
import { useNav } from "./hooks/useNav";

function Education(props) {
  const educationRef = useNav("education");

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
        ref={educationRef}
        className={`min-h-screen pb-20 md:pb-0 w-full flex justify-center items-center text-6xl snap-start`}
        id="education"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <motion.h1
            className="text-5xl font-bold"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible"
          >
            Education
          </motion.h1>
          <motion.p
            className="text-base opacity-60"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible2"
          >
            My educational journey
          </motion.p>
          <div className="flex flex-col md:flex-row mt-24">
            <div className=" h-[350px] w-auto flex items-center justify-center px-5">
              <motion.div
                className={`h-full w-[1px] ${props.bgColorMode} flex flex-col items-center justify-between relative`}
                variants={textAnimate}
                initial="hidden"
                whileInView="visible"
              >
                <div
                  className={`w-4 h-4 ${props.bgColorMode} rounded-full flex items-center`}
                >
                  <motion.div
                    className="h-24 w-40 absolute right-1"
                    initial={{ x: 100, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <div className="font-bold text-lg">SSC</div>
                    <div className="text-base opacity-70">MSBSHSE Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2014 - 2015
                    </div>
                  </motion.div>
                </div>
                <div
                  className={`w-4 h-4 ${props.bgColorMode} rounded-full flex items-center`}
                >
                  <motion.div
                    className="h-24 w-40 absolute left-8"
                    initial={{ x: -130, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <div className="font-bold text-lg">HSC</div>
                    <div className="text-base opacity-70">MSBSHSE Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2016 - 2017
                    </div>
                  </motion.div>
                </div>
                <div
                  className={`w-4 h-4 ${props.bgColorMode} rounded-full flex items-center`}
                >
                  <motion.div
                    className="h-24 w-40 absolute right-1"
                    initial={{ x: 100, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <div className="font-bold text-lg">Comp. Eng. Dip.</div>
                    <div className="text-base opacity-70">MSBTE Mumbai</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2017 - 2020
                    </div>
                  </motion.div>
                </div>
                <div
                  className={`w-4 h-4 ${props.bgColorMode} rounded-full flex items-center`}
                >
                  <motion.div
                    className="h-24 w-40 absolute left-8"
                    initial={{ x: -130, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <div className="font-bold text-lg">B. Tech (ENTC)</div>
                    <div className="text-base opacity-70">SPPU Pune</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2021 - 2025
                    </div>
                  </motion.div>
                </div>
                <div
                  className={`w-4 h-4 ${props.bgColorMode} rounded-full flex items-center`}
                >
                  <motion.div
                    className="h-24 w-40 absolute right-1"
                    initial={{ x: 100, opacity: 0, scale: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <div className="font-bold text-lg">MCA</div>
                    <div className="text-base opacity-70">IGNOU</div>
                    <div className="text-base opacity-70 flex items-center gap-2">
                      <CiCalendarDate /> 2023 - 2025
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
