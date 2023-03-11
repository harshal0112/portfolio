import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import data from "./Projects.json";
import { useNav } from "./hooks/useNav";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const WorkX = () => {
  const renderBullet = (index, className) => {
    return `<span class="${className}" style="background-color: #6366f1"></span>`;
  };

  const workRef = useNav("work");

  return (
    <section ref={workRef} id="work">
      <div className="mx-auto max-w-screen-lg px-4 py-36 sm:px-6 lg:px-8">
        <div className="text-center text-5xl font-bold mb-2">Projects</div>
        <div className="text-center opacity-70 mb-10">My recent work</div>
        <Swiper
          className="!overflow-hidden"
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true, renderBullet }}
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
                  <a href={product.href} target="_blank" rel="noreferrer">
                    <button className="py-3 px-4 bg-indigo-500 w-fit rounded-md">
                      <div className="flex items-center text-white text-base font-semibold">
                        Demo &nbsp;
                        <HiArrowSmRight />
                      </div>
                    </button>
                  </a>
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
