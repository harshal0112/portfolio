import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function ServicesModal(props) {
  const handleCloseModal = () => {
    props.setIsServicesModal("hidden");
    document.body.style.overflow = "auto";
  };
  const servicesModal = [
    {
      heading: "Ui/Ux Designer",
      text1: "I develope the user interface.",
      text2: "Web page development.",
      text3: "I create ux element interactions.",
      text4: "I position your company brand.",
    },
    {
      heading: "Frontend Developer",
      text1: "I develope the user interface.",
      text2: "Web page development.",
      text3: "I create ux element interactions.",
      text4: "I position your company brand.",
    },
    {
      heading: "Branding Designer",
      text1: "I develope the user interface.",
      text2: "Web page development.",
      text3: "I create ux element interactions.",
      text4: "I position your company brand.",
    },
  ];
  return (
    <div>
      <div
        className={`w-full h-full flex items-center justify-center ${
          props.mode === "dark" ? "bg-black" : "bg-gray-400"
        } bg-opacity-40 backdrop-blur-sm absolute left-0 z-[1000]`}
        onClick={() => handleCloseModal()}
      >
        <motion.div
          className={`px-8 py-8 md:w-[420px] rounded-[15px] flex flex-col gap-10 border-[1px] ${
            props.mode === "dark"
              ? "bg-gradient-to-b from-gray-500/70 to-gray-800/70 backdrop-blur-md text-gray-50 border-gray-800/70"
              : "bg-gradient-to-b from-gray-200/70 to-gray-400/70 backdrop-blur-md border-gray-400/60"
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between text-lg font-bold items-start">
            <div className="w-[50px]">
              {servicesModal[props.number].heading}
            </div>
            <button
              className={`${props.textColorMode}`}
              onClick={() => handleCloseModal()}
            >
              <IoClose />
            </button>
          </div>
          <div className="flex flex-col text-[16px] gap-7 opacity-70">
            <div className="flex">
              <div>
                <BsCheck2Circle />
              </div>
              <div>&nbsp; {servicesModal[props.number].text1}</div>
            </div>
            <div className="flex">
              <div>
                <BsCheck2Circle />
              </div>
              <div>&nbsp; {servicesModal[props.number].text2}</div>
            </div>
            <div className="flex">
              <div>
                <BsCheck2Circle />
              </div>
              <div>&nbsp; {servicesModal[props.number].text3}</div>
            </div>
            <div className="flex">
              <div>
                <BsCheck2Circle />
              </div>
              <div>&nbsp; {servicesModal[props.number].text4}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesModal;
