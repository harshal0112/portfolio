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
      const rotateX = (y - height / 2) / 40;
      const rotateY = (x - width / 2) / 40;

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
              className={`social-icons flex flex-col gap-8 text-xl ${props.textColorMode}`}
              variants={animateHomeText}
              initial="hidden"
              whileInView="visible"
            >
              <button className={props.textColorMode}>
                <FaLinkedinIn />
              </button>
              <button className={props.textColorMode}>
                <FaGithub />
              </button>
              <button className={props.textColorMode}>
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
                High level experience in web design and development knowledge,
                producing quality work.
              </motion.div>
              <br />
              <motion.div
                variants={animateHomeText}
                initial="hidden"
                whileInView="visible"
              >
                <button
                  className={`${props.bgColorMode} py-[10px] px-3 rounded-lg text-white flex items-center gap-2 shadow-md active:scale-95 transition-all transform hover:contrast-150 ${props.shadowColorMode}`}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me <AiOutlineSend />
                </button>
              </motion.div>
              <br />
              <div className="hidden md:block lg:hidden">
                <motion.div
                  className={`social-icons flex gap-8 text-xl ${props.textColorMode}`}
                  variants={animateHomeText}
                  initial="hidden"
                  whileInView="visible"
                >
                  <button className={props.textColorMode}>
                    <FaLinkedinIn />
                  </button>
                  <button className={props.textColorMode}>
                    <FaGithub />
                  </button>
                  <button className={props.textColorMode}>
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
                  className={`hidden md:flex items-center absolute bottom-10 text-sm p-2 rounded-xl ${
                    props.mode === "dark"
                      ? "hover:bg-gray-700 hover:bg-opacity-50"
                      : "hover:bg-slate-200 hover:bg-opacity-50"
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
                <div className="">
                  <motion.div
                    className={`social-icons flex flex-col gap-8 text-xl ${props.textColorMode}`}
                    variants={animateHomeText}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <button className={props.textColorMode}>
                      <FaLinkedinIn />
                    </button>
                    <button className={props.textColorMode}>
                      <FaGithub />
                    </button>
                    <button className={props.textColorMode}>
                      <FaInstagram />
                    </button>
                  </motion.div>
                </div>
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
