import Icon from "../../components/common/Icon";
import MainComponent from "./components/MainComponent";

const index = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 rounded-[12px] bg-White">
        <p className="font-medium leading-normal text-bv-14 text-Text">
          Thi trắc nghiệm
        </p>
        <div className="flex items-center gap-x-2">
          <Icon name="House" color="#004390" />
          <Icon name="ChevronRight" color="#4B5565" />
          <p className="font-medium leading-normal text-bv-12 text-Text">
            Thi trắc nghiệm
          </p>
        </div>
      </div>

      <MainComponent />
    </div>
  );
};

export default index;
