import UpgradePackage from "../../components/common/UpgradePackage";
import Carousel from "./components/Carousel";
import CarouselTeacher from "./components/CarouselTeacher";
import ListItems from "./components/ListItems";
import TitleSection from "./components/TitleSection";
import { listItems } from "./fakeData";

const index = () => {
  return (
    <div className="">
      <p className="mb-4 text-center text-bv-22 text-XanhMobifone">
        Tin mới nổi bật
      </p>
      <Carousel />
      <div className="mt-4">
        <TitleSection
          title="Danh sách bộ đề thi"
          desc="Do AI đề xuất cho bạn"
        />
      </div>
      <div className="mt-[13px]">
        <ListItems listItems={listItems} />
      </div>

      <div className="mt-4">
        <TitleSection
          title="Danh sách bộ đề thi"
          desc="Do AI đề xuất cho bạn"
        />
      </div>

      <div className="mt-[13px]">
        <ListItems listItems={listItems} />
      </div>

      <div className="mt-4 mb-2">
        <TitleSection
          title="Danh sách giáo viên"
          desc="Do AI đề xuất cho bạn"
        />
      </div>
      <CarouselTeacher />

      <div>
        <UpgradePackage
          bgColor="#004390"
          bgColorButton="#fff"
          textColor="#fff"
          textButton="#000"
        />
      </div>
    </div>
  );
};

export default index;
