import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar(props) {
  const handleNavClick = (event) => {
    document.getElementById(event).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={`hidden md:block shadow-xl top-0 w-full fixed z-10 bg-opacity-95 ${
        props.mode === "dark" ? "bg-gray-900 text-gray-50" : "bg-white"
      }`}
    >
      <div className="nav flex items-center py-4 overflow-x-hidden justify-center px-4 xl:px-24">
        <div className="container flex">
          <div
            className="flex items-center font-bold"
            style={{ fontFamily: "Tilt Prism" }}
          >
            Harshal
          </div>
          <div className="flex ml-auto">
            <div className="flex gap-4 lg:gap-8">
              <div className="hover:text-indigo-600 hover:contrast-150">
                <button onClick={() => handleNavClick("home")}>Home</button>
              </div>
              <div className="hover:text-indigo-600 hover:contrast-150">
                <button onClick={() => handleNavClick("about")}>About</button>
              </div>
              <div>
                <button onClick={() => handleNavClick("skills")}>Skills</button>
              </div>
              <div>
                <button onClick={() => handleNavClick("education")}>
                  Education
                </button>
              </div>
              <div>
                <button onClick={() => handleNavClick("work")}>Work</button>
              </div>
              <div>
                <button onClick={() => handleNavClick("contact")}>
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
  );
}

export default Navbar;
