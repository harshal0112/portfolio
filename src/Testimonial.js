import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Testimonial = (props) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const renderBullet = (index, className) => {
    return `<span class="${className}" style="background-color: #71717a"></span>`;
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-lg px-4 py-36 sm:px-6 lg:px-8">
          <div className="text-center text-5xl font-bold">Testimonial</div>
          <div className="text-center opacity-70 mb-10">My client saying</div>
          <Swiper
            className="!overflow-hidden"
            spaceBetween={50}
            slidesPerView={windowSize > 720 ? 2 : 1}
            loop={true}
            pagination={{ clickable: true, renderBullet, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <blockquote className="p-8 cursor-grabbing mb-2">
                <div className="flex items-center gap-4">
                  <img
                    alt="Dog"
                    src="https://source.unsplash.com/random/220x220/?person"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-semibold">Bark Dagleish</p>
                    <p className="mt-1 opacity-70">Client</p>
                  </div>
                  <div className={`ml-auto flex ${props.textColorMode}`}>
                    <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar />{" "}
                    <IoMdStarHalf />
                  </div>
                </div>

                <p className="relative mt-4 text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  assumenda officiis sit amet itaque eveniet accusantium
                  corporis tempora, soluta perspiciatis rerum, ratione animi
                  nemo inventore repellat, commodi in esse quisquam.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="p-8 cursor-grabbing">
                <div className="flex items-center gap-4">
                  <img
                    alt="Dog"
                    src="https://source.unsplash.com/random/220x221/?person"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-semibold">Lonny Wyatt</p>
                    <p className="mt-1 opacity-70">Client</p>
                  </div>
                  <div className={`ml-auto flex ${props.textColorMode}`}>
                    <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar />{" "}
                    <IoMdStarOutline />
                  </div>
                </div>

                <p className="relative mt-4 text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  assumenda officiis sit amet itaque eveniet accusantium
                  corporis tempora, soluta perspiciatis rerum, ratione animi
                  nemo inventore repellat, commodi in esse quisquam.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote className="p-8 cursor-grabbing">
                <div className="flex items-center gap-4">
                  <img
                    alt="Dog"
                    src="https://source.unsplash.com/random/221x220/?person"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-semibold">Neva Howard</p>
                    <p className="mt-1 opacity-70">Client</p>
                  </div>
                  <div className={`ml-auto flex ${props.textColorMode}`}>
                    <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar />{" "}
                    <IoMdStarHalf />
                  </div>
                </div>

                <p className="relative mt-4 text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  assumenda officiis sit amet itaque eveniet accusantium
                  corporis tempora, soluta perspiciatis rerum, ratione animi
                  nemo inventore repellat, commodi in esse quisquam.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote className="p-8 cursor-grabbing">
                <div className="flex items-center gap-4">
                  <img
                    alt="Dog"
                    src="https://source.unsplash.com/random/220x222/?person"
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="text-sm">
                    <p className="font-semibold">Louie Rocha</p>
                    <p className="mt-1 opacity-70">Client</p>
                  </div>
                  <div className={`ml-auto flex ${props.textColorMode}`}>
                    <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar />{" "}
                    <IoMdStarOutline />
                  </div>
                </div>

                <p className="relative mt-4 text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  assumenda officiis sit amet itaque eveniet accusantium
                  corporis tempora, soluta perspiciatis rerum, ratione animi
                  nemo inventore repellat, commodi in esse quisquam.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
