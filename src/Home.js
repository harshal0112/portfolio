import React, { useEffect, useState, useRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNav } from "./hooks/useNav";
import SVGComponent from "./SVGComponent";

function Home(props) {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Frontend Developer", "Backend Developer", "Website Designer"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [textIndex, texts.length]);

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.7,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.7,
      y: 0,
    },
  };

  const homeRef = useNav("home");

  const animateX = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  const animateHomeText = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  };

  // profile container 3d movement according to cursor--------------------------

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      const rotateX = (y - height / 2) / 20;
      const rotateY = (x - width / 2) / 20;

      container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      container.style.transform = "";
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  // ------------------------------------------------------------------------------

  return (
    <>
      <section
        ref={homeRef}
        className={`home min-h-screen section snap-center w-full`}
        id="home"
      >
        <div className="container mx-auto px-4 flex items-center justify-center h-[100vh] relative pb-14 md:pb-0">
          <div className=" hidden md:mr-28 lg:block">
            <motion.div
              className={`social-icons flex flex-col gap-5 text-xl ${props.textColorMode}`}
              variants={animateHomeText}
              initial="hidden"
              whileInView="visible"
            >
              <button
                className={`${
                  props.textColorMode
                } hover:text-[#0a66c2] border border-transparent hover:contrast-150 p-1 ${
                  props.mode === "dark"
                    ? "hover:border-gray-600"
                    : "hover:border-gray-400"
                } hover:shadow rounded`}
              >
                <FaLinkedinIn />
              </button>
              <button
                className={`${
                  props.textColorMode
                } border border-transparent hover:contrast-150 p-1 ${
                  props.mode === "dark"
                    ? "hover:border-gray-600 hover:text-white"
                    : "hover:border-gray-400 hover:text-black"
                } hover:shadow rounded`}
              >
                <FaGithub />
              </button>
              <button
                className={`${
                  props.textColorMode
                } hover:text-[#f6076e] border border-transparent hover:contrast-150 p-1 ${
                  props.mode === "dark"
                    ? "hover:border-gray-600"
                    : "hover:border-gray-400"
                } hover:shadow rounded`}
              >
                <FaInstagram />
              </button>
            </motion.div>
          </div>
          <div className="flex items-center flex-col gap-0 md:gap-10 lg:gap-28 md:flex-row">
            <div className="leading-loose tracking-widest order-2">
              <motion.div
                className="text-5xl font-bold lg:flex md:block sm:flex drop-shadow-lg"
                variants={animateHomeText}
                initial="hidden"
                whileInView="visible"
              >
                Hi, I'm&nbsp;
                <div className={`${props.textColorMode}`}>Harshal</div>
              </motion.div>
              <motion.div
                variants={animateHomeText}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div
                  key={texts[textIndex]}
                  className="text-lg font-semibold mt-2 mb-4"
                  variants={sentence}
                  initial={"hidden"}
                  animate={"visible"}
                >
                  {texts[textIndex].split("").map((char, index) => {
                    return (
                      <motion.span
                        key={char + "-" + index}
                        variants={letter}
                        className=""
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
              <motion.div
                className="opacity-70 leading-relaxed max-w-sm"
                variants={animateHomeText}
                initial="hidden"
                whileInView="visible"
              >
                A passionate full-stack developer with a love for coding and
                creating digital solutions.
              </motion.div>
              <br />
              <motion.div
                variants={animateHomeText}
                initial="hidden"
                whileInView="visible"
              >
                <button
                  className={`${props.bgColorMode} group  py-[10px] px-6 rounded-full text-white flex items-center gap-2 shadow-md active:scale-95 transition-all transform hover:contrast-150 ${props.shadowColorMode}`}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <div className="">Contact Me</div>
                  <div className="opacity-0">
                    <AiOutlineSend />
                  </div>
                  <div className="absolute end-6 group-hover:end-5 group-active:end-6 transition-all duration-200">
                    <AiOutlineSend />
                  </div>
                </button>
              </motion.div>
              <br />
              <div className="hidden md:block lg:hidden">
                <motion.div
                  className={`social-icons flex gap-5 text-xl ${props.textColorMode}`}
                  variants={animateHomeText}
                  initial="hidden"
                  whileInView="visible"
                >
                  <button
                    className={`${
                      props.textColorMode
                    } hover:text-[#0a66c2] border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600"
                        : "hover:border-gray-400"
                    } hover:shadow rounded`}
                  >
                    <FaLinkedinIn />
                  </button>
                  <button
                    className={`${
                      props.textColorMode
                    } border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600 hover:text-white"
                        : "hover:border-gray-400 hover:text-black"
                    } hover:shadow rounded`}
                  >
                    <FaGithub />
                  </button>
                  <button
                    className={`${
                      props.textColorMode
                    } hover:text-[#f6076e] border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600"
                        : "hover:border-gray-400"
                    } hover:shadow rounded`}
                  >
                    <FaInstagram />
                  </button>
                </motion.div>
              </div>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={0}
              >
                <button
                  className={`hidden md:flex items-center absolute bottom-10 text-sm p-2 rounded-xl border border-transparent ${
                    props.mode === "dark"
                      ? "hover:bg-slate-800 hover:bg-opacity-50 hover:border-gray-800"
                      : "hover:bg-slate-300 hover:bg-opacity-50 hover:border-gray-300 "
                  }`}
                >
                  <div className={`${props.textColorMode} text-2xl`}>
                    <CgMouse />
                  </div>
                  scroll down
                  <motion.div
                    className={`${props.textColorMode} text-xl`}
                    animate={{ y: [0, -2, 0, 2, 0] }}
                    transition={{
                      duration: 1,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    <BsArrowDownShort />
                  </motion.div>
                </button>
              </Link>
            </div>
            <div className="flex order-1 md:order-last">
              <div className="flex md:hidden items-center container">
                <motion.div
                  className={`social-icons flex flex-col gap-8 text-xl ${props.textColorMode}`}
                  variants={animateHomeText}
                  initial="hidden"
                  whileInView="visible"
                >
                  <button
                    className={`${
                      props.textColorMode
                    } hover:text-[#0a66c2] border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600"
                        : "hover:border-gray-400"
                    } hover:shadow rounded`}
                  >
                    <FaLinkedinIn />
                  </button>
                  <button
                    className={`${
                      props.textColorMode
                    } border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600 hover:text-white"
                        : "hover:border-gray-400 hover:text-black"
                    } hover:shadow rounded`}
                  >
                    <FaGithub />
                  </button>
                  <button
                    className={`${
                      props.textColorMode
                    } hover:text-[#f6076e] border border-transparent hover:contrast-150 p-1 ${
                      props.mode === "dark"
                        ? "hover:border-gray-600"
                        : "hover:border-gray-400"
                    } hover:shadow rounded`}
                  >
                    <FaInstagram />
                  </button>
                </motion.div>
              </div>

              <motion.div
                className=""
                variants={animateX}
                initial="hidden"
                whileInView="visible"
              >
                <div ref={containerRef}>
                  <SVGComponent
                    svgColorMode1={props.svgColorMode1}
                    svgColorMode2={props.svgColorMode2}
                    svgShadow={props.svgShadow}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
