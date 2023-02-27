import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

function Contact(props) {
  return (
    <div>
      <div
        className={`w-full min-h-screen flex items-center justify-center text-6xl snap-center ${
          props.mode === "dark" ? "bg-gray-800 text-gray-50" : ""
        }`}
        id="contact"
      >
        <div className="h-auto py-5 md:py-20 w-full text-6xl snap-start">
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <h1 className="text-5xl font-bold">Contact Me</h1>
            <p className="text-base opacity-60">Get in touch</p>
            <div className="h-auto w-auto mt-10 flex flex-col md:flex-row gap-10 mb-14 md:mb-0">
              <div className="w-1/2 h-full flex flex-col gap-10">
                <div className="w-full flex items-center gap-4">
                  <div className="text-3xl text-indigo-600">
                    <BsTelephone />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">Call Me</div>
                    <div className="text-base opacity-70">9988776655</div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-4">
                  <div className="text-3xl text-indigo-600">
                    <MdOutlineMail />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">Email</div>
                    <div className="text-base opacity-70">
                      harshalabcdef@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-4">
                  <div className="text-3xl text-indigo-600">
                    <SlLocationPin />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-bold">Location</div>
                    <div className="text-base opacity-70">
                      Alandi - Pune 412105
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto h-full flex flex-col gap-6 text-base">
                <div className="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="project"
                    placeholder="Project"
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div className="">
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Message"
                    className="rounded-md bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 resize-none"
                    rows={4}
                  ></textarea>
                </div>
                <button
                  className={`bg-indigo-800 p-4 flex justify-center items-center rounded-lg text-white active:scale-95 transition-all shadow-lg hover:contrast-150 ${
                    props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    Send Message <AiOutlineSend />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
