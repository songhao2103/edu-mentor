import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const items = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    teacherName: "Teacher",
    desc: "Giáo viên bộ môn Toán - Giáo viên bộ môn Toán- ",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    teacherName: "Teacher",
    desc: "Giáo viên bộ môn Toán - Giáo viên bộ môn Toán- ",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    teacherName: "Teacher",
    desc: "Giáo viên bộ môn Toán - Giáo viên bộ môn Toán- ",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    teacherName: "Teacher",
    desc: "Giáo viên bộ môn Toán - Giáo viên bộ môn Toán- ",
  },
];

const CarouselTeacher = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={1.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="swiper-container"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded-[24px] shrink-0  relative custom-swiper-slide "
          >
            <div className="flex h-[352px] w-[288px] items-center justify-center flex-col px-4 py-6 bg-White rounded-[24px]">
              <img
                src={item.image}
                alt=""
                className="w-[128px] h-[128px] rounded-full object-cover"
              />
              <p className="text-bv-16 font-[700] leading-[24px] text-Text1 mt-4">
                {item.teacherName}
              </p>
              <p className="text-bv-14 tracking-[-0.4px] text-center mt-1">
                {item.desc}
              </p>

              <Link
                to={"#"}
                className="shadow-xanhBold w-[108px] mt-4 rounded-[4px] h-[46px] flex items-center justify-center bg-[#C3E2FF80] text-bv-14 font-[600] leading-[26px] text-XanhMobifone"
              >
                Nhắn tin
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTeacher;
