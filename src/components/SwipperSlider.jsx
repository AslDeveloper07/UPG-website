import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../assets/Assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwipperSlider = () => {
  return (
    <section className="w-full h-full relative mt-[50px]">
      <div className="container mx-auto pb-[20px]">
        <div className="relative">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true} // default nav tugmalarini qo'shdim
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-146"
          >
            <SwiperSlide>
              <img src={Slide1} alt="Slide 1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt="Slide 2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide3} alt="Slide 3" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide4} alt="Slide 4" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide5} alt="Slide 5" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwipperSlider;
