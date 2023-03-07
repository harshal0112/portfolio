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
        className="w-full h-full flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm absolute left-0 z-[1000]"
        onClick={() => handleCloseModal()}
      >
        <motion.div
          className={`px-8 py-8 rounded-lg flex flex-col gap-10 ${
            props.mode === "dark" ? "bg-gray-800" : "bg-gray-50"
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
              className="text-indigo-600"
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
