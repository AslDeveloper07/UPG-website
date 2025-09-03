import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../assets/Assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwipperSlider = () => {
  return (
    <section className="w-full relative pt-[90px] dark:bg-black">
      <div className="container mx-auto pb-[20px]">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-auto"
          >
            <SwiperSlide>
              <img
                src={Slide1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Slide2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Slide3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Slide4}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Slide5}
                alt="Slide 5"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>

          <div className="absolute bottom-4 right-4 flex gap-3 z-10">
            <button className="custom-prev bg-[#0EA5E9] text-white px-4 py-2 rounded-md shadow-md cursor-pointer ">
              <IoIosArrowBack size={25} />
            </button>
            <button className="custom-next bg-[#0EA5E9] text-white px-4 py-3 rounded-md shadow-md cursor-pointer ">
              <IoIosArrowForward size={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwipperSlider;
