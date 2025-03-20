import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface IItem {
  title: string;
  desc: string;
  image: string;
  id: string;
}

interface IListItemsProps {
  listItems: IItem[];
}

const ListItems: React.FC<IListItemsProps> = ({ listItems }) => {
  const newListItems = useMemo(() => {
    const tmpList = [];
    for (let i = 0; i < listItems.length; i += 3) {
      tmpList.push(listItems.slice(i, i + 3));
    }
    return tmpList;
  }, [listItems]);

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        grabCursor={true}
        centeredSlides={false}
        loop={false}
        centeredSlidesBounds={true} // Thêm thuộc tính này
        slidesPerView={"auto"}
        watchOverflow={true} // Kiểm tra khi không đủ slide
        slidesOffsetAfter={30}
        className="w-[100vw]"
      >
        {newListItems.map((items, index) => (
          <SwiperSlide key={index} className="" style={{ width: "85vw" }}>
            <div className="flex flex-col mr-4 gap-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center p-2 rounded-[8px] bg-White"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[50px] h-[50px] object-cover rounded-[8px] mr-3"
                  />
                  <div>
                    <p className="font-semibold text-bv-14 text-Text1">
                      {item.title}
                    </p>
                    <p className="text-bv-11 text-Text2">{item.desc}</p>
                  </div>

                  <p
                    className="ml-auto text-bv-10 text-XanhMobifone w-[50px] h-[20px] bg-[#C3E2FF80] flex items-center
                  justify-center rounded-[4px]"
                  >
                    Ôn ngay
                  </p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListItems;
