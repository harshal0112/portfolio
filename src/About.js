import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useNav } from "./hooks/useNav";
import { motion } from "framer-motion";

function About(props) {
  const aboutRef = useNav("about");

  const handleDownload = () => {
    // Replace the file URL below with your own file URL
    const fileUrl =
      "https://drive.google.com/uc?export=download&id=1fNZTqa8MV47ITw1gwEyq7hwNurOVZCJ5";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Cv.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const aboutImgAnimate = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <div
        ref={aboutRef}
        className={`min-h-screen flex justify-center items-center py-10 w-full text-6xl snap-start`}
        id="about"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-base opacity-60">My introduction</p>
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-2 lg:gap-16 md:mt-20">
            <motion.div
              className="w-80 sm:w-96 flex justify-center items-center px-5"
              variants={aboutImgAnimate}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src="https://i.ibb.co/vzn0MrD/about.jpg"
                alt=""
                className="rounded-md"
              />
            </motion.div>
            <div className="h-[350px] w-96 p-5 flex flex-col justify-between">
              <div className="text-base opacity-70">
                Web developer with extensive knowledge and years of experience,
                working in web technologies and Ui/Ux design, delivering quality
                work.
              </div>
              <div className="grid text-base grid-cols-3">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold">08+</div>
                  <div className="opacity-70">Years experience</div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="opacity-70">Completed projects</div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold">05+</div>
                  <div className="opacity-70 text-base">Companies worked</div>
                </div>
              </div>
              <div className="text-base text-white">
                <button
                  className={`flex items-center p-4 bg-indigo-500 rounded-lg shadow-lg active:scale-95 hover:contrast-150 ${
                    props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                  }`}
                  onClick={() => handleDownload()}
                >
                  Download CV&nbsp;
                  <AiOutlineDownload />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
