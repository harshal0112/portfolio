import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer(props) {
  const handleFooterLinkClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
  };

  const [isSocialHovered, setIsSocialHovered] = useState("Na");

  function socialHovered(e) {
    setIsSocialHovered(e);
  }

  function socialNotHovered() {
    setIsSocialHovered("Na");
  }

  const socialAnimate = {
    hover: {
      rotateY: 360,
    },
    initial: {
      rotateX: 0,
    },
  };

  return (
    <>
      <section
        className={`w-full h-auto bg-gradient-to-r ${props.picBgColorMode} text-white flex flex-col gap-14 md:gap-36 pt-10 pb-20 md:pb-10 px-4`}
      >
        <div className="h-auto flex flex-col md:flex-row justify-center container mx-auto md:items-start gap-10 md:gap-20 lg:gap-36">
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-bold">Harshal</div>
            <div className="text-base opacity-60">Frontend Developer</div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div
              className="cursor-pointer"
              onClick={() => handleFooterLinkClick("services")}
            >
              Services
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleFooterLinkClick("")}
            >
              Portfolio
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleFooterLinkClick("contact")}
            >
              Contact me
            </div>
          </div>
          <div className="flex gap-8 text-xl">
            <div
              onMouseEnter={() => socialHovered("facebook")}
              onMouseLeave={socialNotHovered}
              className="hover:text-[#0866ff] cursor-pointer p-1 rounded-full hover:bg-white"
            >
              <motion.div
                variants={socialAnimate}
                animate={isSocialHovered === "facebook" ? "hover" : "initial"}
                transition={{ duration: 0.5 }}
              >
                <FaFacebook />
              </motion.div>
            </div>
            <div
              onMouseEnter={() => socialHovered("instagram")}
              onMouseLeave={socialNotHovered}
              className="cursor-pointer hover:text-[#f6076e] p-1 rounded-md hover:bg-white"
            >
              <motion.div
                variants={socialAnimate}
                animate={isSocialHovered === "instagram" ? "hover" : "initial"}
                transition={{ duration: 0.5 }}
              >
                <FaInstagram />
              </motion.div>
            </div>
            <div
              onMouseEnter={() => socialHovered("twitter")}
              onMouseLeave={socialNotHovered}
              className="cursor-pointer hover:text-[#1da1f2] p-1 rounded-full hover:bg-white"
            >
              <motion.div
                variants={socialAnimate}
                animate={isSocialHovered === "twitter" ? "hover" : "initial"}
                transition={{ duration: 0.5 }}
              >
                <FaTwitter />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center text-center text-neutral-500 opacity-90 text-sm">
          © Harshal. All rights Reserved
        </div>
      </section>
    </>
  );
}

export default Footer;
