import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar(props) {
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
                <Link
                  to="home"
                  activeClass="active font-bold text-indigo-600"
                  spy
                  smooth
                  isDynamic
                  offset={0}
                  duration={500}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  to="about"
                  smooth
                  isDynamic
                  activeClass="active font-bold text-indigo-600"
                  spy
                  offset={0}
                  duration={500}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="skills"
                  smooth
                  isDynamic
                  activeClass="active font-bold text-indigo-600"
                  spy
                  offset={0}
                  duration={500}
                >
                  Skills
                </Link>
              </div>
              <div>
                <Link
                  to="education"
                  activeClass="active font-bold text-indigo-600"
                  smooth
                  spy
                  isDynamic
                  duration={500}
                  offset={0}
                >
                  Education
                </Link>
              </div>
              <div>
                <Link
                  to="work"
                  activeClass="active font-bold text-indigo-600"
                  smooth
                  spy
                  isDynamic
                  duration={500}
                >
                  Work
                </Link>
              </div>
              <div>
                <Link
                  to="contact"
                  activeClass="active font-bold text-indigo-600"
                  smooth
                  isDynamic
                  spy
                  duration={500}
                >
                  Contact
                </Link>
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
