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
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
  };

  const textAnimate = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.5 },
    },
    visible2: {
      opacity: 0.6,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.5 },
    },
  };

  return (
    <>
      <section
        ref={aboutRef}
        className={`min-h-screen flex justify-center items-center pb-16 md:pb-0 w-full text-6xl snap-start`}
        id="about"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <motion.h1
            className="text-5xl font-bold"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible"
          >
            About Me
          </motion.h1>
          <motion.p
            className="text-base opacity-60"
            variants={textAnimate}
            initial="hidden"
            whileInView="visible2"
          >
            My introduction
          </motion.p>
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
              <motion.div
                className="text-base opacity-70"
                variants={textAnimate}
                initial="hidden"
                whileInView="visible2"
              >
                I am a dedicated full-stack developer with a passion for
                crafting user-friendly digital solutions. Join me on my journey
                through the world of technology as we turn ideas into reality.
              </motion.div>
              <motion.div
                className="grid text-base grid-cols-3"
                variants={textAnimate}
                initial="hidden"
                whileInView="visible"
              >
                {/* <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold">08+</div>
                  <div className="opacity-70">Years experience</div>
                </div> */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className=" text-2xl font-bold">20+</div>
                  <div className="opacity-70">Completed projects</div>
                </div>
                {/* <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold">05+</div>
                  <div className="opacity-70 text-base">Companies worked</div>
                </div> */}
              </motion.div>
              <motion.div
                className="text-base text-white"
                variants={textAnimate}
                initial="hidden"
                whileInView="visible"
              >
                <button
                  className={`${props.bgColorMode} group py-3 px-6 rounded-full text-white flex items-center gap-1 shadow-md active:scale-95 transition-all transform hover:contrast-150 ${props.shadowColorMode}`}
                  onClick={() => handleDownload()}
                >
                  Download CV&nbsp;
                  <div className="opacity-0">
                    <AiOutlineDownload />
                  </div>
                  <div className="absolute end-6 group-hover:animate-bounce group-hover:bottom-[14px] transition-all duration-200">
                    <AiOutlineDownload />
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
