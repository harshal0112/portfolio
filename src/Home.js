import React, { useEffect, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CgMouse } from "react-icons/cg";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useNav } from "./hooks/useNav";

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

  return (
    <>
      <section
        ref={homeRef}
        className={`home min-h-screen section snap-center w-full`}
        id="home"
      >
        <div className="container mx-auto px-4 flex items-center justify-center h-[100vh] relative pb-14 md:pb-0">
          <div className=" hidden md:mr-28 lg:block">
            <div className="social-icons flex flex-col gap-8 text-xl text-indigo-400 ">
              <button className="hover:text-indigo-500">
                <FaLinkedinIn />
              </button>
              <button className="hover:text-indigo-500">
                <FaGithub />
              </button>
              <button className="hover:text-indigo-500">
                <FaInstagram />
              </button>
            </div>
          </div>
          <div className="flex items-center flex-col gap-0 md:gap-10 lg:gap-28 md:flex-row">
            <div className="flex md:hidden items-center container">
              <div className="">
                <div className="social-icons flex flex-col gap-8 text-xl text-indigo-400">
                  <button className="hover:text-indigo-500">
                    <FaLinkedinIn />
                  </button>
                  <button className="hover:text-indigo-500">
                    <FaGithub />
                  </button>
                  <button className="hover:text-indigo-500">
                    <FaInstagram />
                  </button>
                </div>
              </div>
              <div
                className={`h-[340px] w-[350px] pic-bg bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500 overflow-hidden flex items-center justify-center shadow-xl scale-75 md:scale-100 md:hidden ${
                  props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                }`}
              >
                <img
                  src="https://i.ibb.co/ph5w74q/pnge.png"
                  alt="/"
                  className="imageLink"
                />
              </div>
            </div>
            <div className="leading-loose tracking-widest">
              <div className="text-5xl font-bold lg:flex md:block sm:flex">
                Hi, I'am&nbsp;<div className="text-indigo-400">Harshal</div>
              </div>
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
              <div className="opacity-70 leading-relaxed max-w-sm">
                High level experience in web design and development knowledge,
                producing quality work.
              </div>
              <br />
              <div>
                <button
                  className={`bg-indigo-500 py-[10px] px-3 rounded-lg text-white flex items-center gap-2 shadow-lg active:scale-95 transition-all transform hover:contrast-150 ${
                    props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                  }`}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me <AiOutlineSend />
                </button>
              </div>
              <br />
              <div className="hidden md:block lg:hidden">
                <div className="social-icons flex gap-8 text-xl text-indigo-400">
                  <button className="hover:text-indigo-500">
                    <FaLinkedinIn />
                  </button>
                  <button className="hover:text-indigo-500">
                    <FaGithub />
                  </button>
                  <button className="hover:text-indigo-500">
                    <FaInstagram />
                  </button>
                </div>
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
                  <div className="text-indigo-400 text-2xl">
                    <CgMouse />
                  </div>
                  scroll down
                  <motion.div
                    className="text-indigo-400 text-xl"
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
            <div className="hidden md:block">
              <div
                className={`h-[340px] w-[350px] pic-bg bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500 overflow-hidden flex items-center justify-center shadow-xl scale-75 md:scale-100 ${
                  props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                }`}
              >
                <img
                  src="https://i.ibb.co/ph5w74q/pnge.png"
                  alt="/"
                  className="imageLink"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
