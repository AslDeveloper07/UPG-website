import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
  Slider6,
} from "../../assets/Assets";

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
              <img src={Slider1} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider4} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider5} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider6} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SwipperSlider;
