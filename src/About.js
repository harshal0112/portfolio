import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

function About(props) {
  return (
    <div>
      <div
        className={`min-h-screen flex justify-center items-center py-10 w-full text-6xl snap-start ${
          props.mode === "dark" ? "bg-gray-800 text-gray-50" : ""
        }`}
        id="about"
      >
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-base opacity-60">My introduction</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 md:mt-20">
            <div className=" h-80 w-96 flex items-center px-5">
              <img
                src="https://i.ibb.co/vzn0MrD/about.jpg"
                alt=""
                className="rounded-md"
              />
            </div>
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
                  className={`flex items-center p-4 bg-indigo-800 rounded-lg shadow-lg active:scale-95 hover:contrast-150 ${
                    props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                  }`}
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
