import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";

function YouHaveAProject(props) {
  const cardAnimate = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  };
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center py-6">
        <motion.div
          className={`flex flex-col sm:flex-row md:rounded-xl px-8 py-10 md:py-4 bg-gradient-to-r ${props.picBgColorMode} w-full md:w-auto overflow-hidden items-center`}
          variants={cardAnimate}
          initial="hidden"
          whileInView="visible"
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6 text-white">
            <h1 className="text-xl font-bold">You have a new project</h1>
            <div className="max-w-[400px]">
              Contact me now and get a 30% discount on your new project.{" "}
            </div>
            <button
              className={`bg-gray-100 ${props.textColorMode} group py-3 px-6 rounded-full flex items-center gap-2  shadow-md active:scale-95 transition-all transform hover:contrast-150`}
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <div>Contact Me</div>
              <div className="opacity-0">
                <AiOutlineSend />
              </div>
              <div className="absolute end-6 group-hover:end-5 transition-all duration-200">
                <AiOutlineSend />
              </div>
            </button>
          </div>
          <div className="relative top-10">
            <img
              src="https://i.ibb.co/XYkjm5k/ad.png"
              alt=""
              className=" h-60 "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default YouHaveAProject;
