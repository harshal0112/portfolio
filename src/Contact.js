import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useNav } from "./hooks/useNav";

function Contact(props) {
  const contactRef = useNav("contact");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div>
      <div
        ref={contactRef}
        className={`w-full min-h-screen flex items-center justify-center text-6xl snap-center`}
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
              <form
                className="w-auto h-full flex flex-col gap-6 text-base"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="bd31cde1-0890-4213-824b-454415d3efa8"
                />
                <input type="hidden" name="subject" value={subject} />
                <input
                  type="hidden"
                  name="from_name"
                  value={`Portfolio - ${name}`}
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />

                <div className="">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                    required
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    className="rounded-md h-16 bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600"
                    required
                  />
                </div>
                <div className="">
                  <textarea
                    type="text"
                    name="Message"
                    placeholder="Message"
                    className="rounded-md bg-indigo-100 w-full appearance-none border-2 border-indigo-200 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-600 resize-none"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  className={`bg-indigo-800 p-4 flex justify-center items-center rounded-lg text-white active:scale-95 transition-all shadow-lg hover:contrast-150 ${
                    props.mode === "dark" ? "shadow-black" : "shadow-gray-600"
                  }`}
                  type="submit"
                >
                  <div className="flex items-center gap-2">
                    Send Message <AiOutlineSend />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
