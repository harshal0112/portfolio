import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import data from "./Projects.json";
import { useNav } from "./hooks/useNav";
import { motion } from "framer-motion";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const WorkX = (props) => {
  const renderBullet = (index, className) => {
    return `<span class="${className}" style="background-color: #71717a"></span>`;
  };

  const workRef = useNav("work");

  const textAnimate = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.3 },
    },
    visible2: {
      opacity: 0.6,
      y: 0,
      transition: { type: "tween", delay: 0.3, duration: 0.3 },
    },
  };

  return (
    <section ref={workRef} id="work">
      <div className="mx-auto max-w-screen-lg px-4 py-16 md:py-36 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-5xl font-bold mb-2"
          variants={textAnimate}
          initial="hidden"
          whileInView="visible"
        >
          Projects
        </motion.div>
        <motion.div
          className="text-center opacity-70 mb-10"
          variants={textAnimate}
          initial="hidden"
          whileInView="visible2"
        >
          My recent work
        </motion.div>
        <Swiper
          className="!overflow-hidden"
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, renderBullet, dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {data.projects.map((product) => (
            <SwiperSlide key={product.id}>
              <blockquote className="p-8 cursor-grabbing mb-2 flex flex-col items-center md:flex-row justify-around gap-10">
                <div className="max-w-44 sm:w-96 rounded-lg overflow-hidden">
                  <img src={product.imageSrc} alt="" />
                </div>
                <div className="max-w-44 md:w-96 flex flex-col justify-center gap-3">
                  <div className="text-xl font-bold">{product.name}</div>
                  <div className="text-base opacity-70">
                    {product.description}
                  </div>
                  <div>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit"
                    >
                      <button
                        className={`group py-[10px] px-6 rounded-full text-white flex items-center gap-2 shadow-md active:scale-95 transition-all transform hover:contrast-150 ${props.bgColorMode} ${props.shadowColorMode}`}
                      >
                        Demo
                        <div className="absolute end-6  group-hover:end-5 transition-all duration-200">
                          <HiArrowSmRight />
                        </div>
                        <div className="opacity-0">
                          <HiArrowSmRight />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WorkX;
