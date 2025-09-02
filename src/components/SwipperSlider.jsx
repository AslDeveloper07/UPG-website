import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../assets/Assets";

const SwipperSlider = () => {
  return (
    <section className="w-full h-full relative">
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
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper w-full h-96"
          >
            <SwiperSlide>
              <img src={Slide1} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide2} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide3} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide4} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slide5} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwipperSlider;
