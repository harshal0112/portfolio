import React, { useContext, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavContext } from "./context/NavContext";

function Navbar(props) {
  const handleNavClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
  };

  const { activeLinkId } = useContext(NavContext);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Come Back to Portfolio";
      } else {
        document.title =
          "My Portfolio - " +
          activeLinkId.charAt(0).toUpperCase() +
          activeLinkId.slice(1);
      }
    };

    document.title =
      "My Portfolio - " +
      activeLinkId.charAt(0).toUpperCase() +
      activeLinkId.slice(1);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeLinkId]);
  return (
    <div className="w-full flex justify-center">
      <div
        className={`hidden md:block top-2 lg:w-9/12 w-11/12 fixed z-10 bg-opacity-95 border-2 rounded-[15px] ${
          props.mode === "dark"
            ? "bg-gradient-to-b from-gray-500/30 to-gray-800/30 backdrop-blur-md text-gray-50 border-gray-800/30"
            : "bg-gradient-to-b from-gray-200/30 to-gray-400/30 backdrop-blur-md border-gray-400/20"
        }`}
      >
        <div className="nav flex items-center py-6 overflow-x-hidden justify-center px-4 lg:px-10 xl:px-14">
          <div className="container flex">
            <div
              className="flex items-center font-bold cursor-pointer"
              style={{ fontFamily: "Tilt Prism" }}
              onClick={() => handleNavClick("home")}
            >
              Harshal
            </div>
            <div className="flex ml-auto">
              <div className="flex gap-4 lg:gap-6 xl:gap-8">
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "home" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "home" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("home")}
                  >
                    Home
                  </button>
                </div>
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "about" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "about" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("about")}
                  >
                    About
                  </button>
                </div>
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "skills" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "skills" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("skills")}
                  >
                    Skills
                  </button>
                </div>
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "education" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "education" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("education")}
                  >
                    Education
                  </button>
                </div>
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "work" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "work" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("work")}
                  >
                    Work
                  </button>
                </div>
                <div
                  className={`before:h-[2px] before:transform before:duration-300 before:transition-width before:absolute before:bg-indigo-500 before:w-0 before:top-6 hover:before:w-full relative flex justify-center ${
                    activeLinkId === "contact" ? "before:w-full" : ""
                  }`}
                >
                  <button
                    className={`${
                      activeLinkId === "contact" ? "text-indigo-500" : ""
                    }`}
                    onClick={() => handleNavClick("contact")}
                  >
                    Contact
                  </button>
                </div>
                <button
                  className="flex items-center"
                  onClick={() =>
                    props.setMode(props.mode === "light" ? "dark" : "light")
                  }
                >
                  {props.mode === "light" ? <FaMoon /> : <FaSun />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
