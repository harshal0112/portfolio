import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const handleFooterLinkClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="w-full h-auto bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white flex flex-col gap-14 md:gap-36 pt-10 pb-20 md:pb-10 px-4">
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
          <div className="flex gap-8">
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center text-center text-neutral-400 opacity-70 text-sm">
          © Harshal. All rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
