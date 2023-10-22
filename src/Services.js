import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";
import { RiCollageLine } from "react-icons/ri";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import ServicesModal from "./ServicesModal";
import { motion } from "framer-motion";

const Services = (props) => {
  const [isServicesModal, setIsServicesModal] = useState("hidden");
  const [cardNumber, setCardNumber] = useState(0);
  const handleCardClick = (visible, cardNum) => {
    setIsServicesModal(visible);
    setCardNumber(cardNum);
    document.body.style.overflow = "hidden";
  };

  const servicesAnimate = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <div
        className={`min-h-screen py-16 w-full flex flex-col justify-center items-center text-6xl snap-start gap-10 px-2`}
        id="services"
      >
        <div className="w-full text-5xl font-bold text-center">Services</div>
        <div className="grid gap-5 sm:gap-10 grid-cols-2 lg:grid-cols-3">
          {isServicesModal === "visible" && (
            <div className="fixed top-0 w-full h-full left-0 z-[1000]">
              <ServicesModal
                setIsServicesModal={setIsServicesModal}
                number={cardNumber}
                mode={props.mode}
                textColorMode={props.textColorMode}
              />
            </div>
          )}
          <motion.div
            className={`sm:min-w-[250px] sm:min-h-[320px] rounded-[15px] shadow-lg overflow-hidden border-2 ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-500/30 to-gray-800/30 backdrop-blur-md text-gray-50 border-gray-800/30"
                : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
            }`}
            variants={servicesAnimate}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <div className="pl-4 pr-12 sm:px-8 py-4">
              <div
                className={`font-bold text-4xl ${props.textColorMode} mb-7 mt-24 h-8`}
              >
                <RiCollageLine />
              </div>
              <div className="text-2xl max-w-[100px] font-bold">
                Ui/Ux Designer
              </div>
              <div
                className={`text-sm ${props.textColorMode} flex items-center mt-6 font-bold cursor-pointer md:hover:gap-1`}
                onClick={() => handleCardClick("visible", 0)}
              >
                View More &nbsp; &nbsp;
                <HiArrowSmRight />
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`sm-min-w-[250px] sm-min-h-[320px] rounded-[15px] overflow-hidden border-2 shadow-lg ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-500/30 to-gray-800/30 backdrop-blur-md text-gray-50 border-gray-800/30"
                : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
            }`}
            variants={servicesAnimate}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <div className="pl-4 pr-12 sm:px-8 py-4">
              <div
                className={`font-bold text-4xl ${props.textColorMode} mb-7 mt-24 flex items-center h-8 px-0`}
              >
                <BiChevronLeft />
                <BiChevronRight />
              </div>
              <div className="text-2xl max-w-[100px] font-bold">
                Frontend Developer
              </div>
              <div
                className={`text-sm ${props.textColorMode} flex items-center mt-6 font-bold cursor-pointer md:hover:gap-1`}
                onClick={() => handleCardClick("visible", 1)}
              >
                View More &nbsp; &nbsp;
                <HiArrowSmRight />
              </div>
            </div>
          </motion.div>
          <motion.div
            className={`sm-min-w-[250px] sm-min-h-[320px] rounded-[15px] overflow-hidden border-2 shadow-lg ${
              props.mode === "dark"
                ? "bg-gradient-to-b from-gray-500/30 to-gray-800/30 backdrop-blur-md text-gray-50 border-gray-800/30"
                : "bg-gradient-to-b  from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
            }`}
            variants={servicesAnimate}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: "tween",
              duration: 0.7,
            }}
          >
            <div className="pl-4 pr-12 sm:px-8 py-4">
              <div
                className={`font-bold text-3xl ${props.textColorMode} mb-7 mt-24 h-8`}
              >
                <BsPencil />
              </div>
              <div className="text-2xl max-w-[100px] font-bold">
                Branding Designer
              </div>
              <div
                className={`text-sm ${props.textColorMode} flex items-center mt-6 font-bold cursor-pointer md:hover:gap-1`}
                onClick={() => handleCardClick("visible", 2)}
              >
                View More &nbsp; &nbsp;
                <HiArrowSmRight />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
