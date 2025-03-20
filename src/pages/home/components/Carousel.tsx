import image1 from "../../../../public/asset/images/carousel/image1.avif";
import image2 from "../../../../public/asset/images/carousel/image2.avif";
import image3 from "../../../../public/asset/images/carousel/image3.avif";
import image4 from "../../../../public/asset/images/carousel/image4.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const items = [
  {
    image: image1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    textButton: "Odio provident",
  },
  {
    image: image2,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    textButton: "Odio provident",
  },
  {
    image: image3,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    textButton: "Odio provident",
  },
  {
    image: image4,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    textButton: "Odio provident",
  },
];

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={false}
      loop={true}
      slidesPerView={1.2}
      spaceBetween={30}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      className="swiper-container"
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          className="h-[360px] rounded-[24px] shrink-0  relative custom-swiper-slide"
        >
          <img
            src={item.image}
            className="object-cover w-full h-[360px] rounded-[24px]"
          />
          <p className="absolute text-bv-18 text-White bottom-[27px] left-[50%] translate-x-[-50%] w-[250px] text-center">
            {item.desc}
          </p>
          <p className="absolute top-6 left-[17px] text-[10px] px-3 py-1 bg-[#FCCC75] text-White rounded-[50px]">
            {item.textButton}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
