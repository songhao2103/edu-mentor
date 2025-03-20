import { Link } from "react-router-dom";
import imageNavbar from "../../../public/asset/images/imageNavBar.png";

interface IUpgradePackage {
  bgColor: string;
  bgColorButton: string;
  textColor?: string;
  textButton?: string;
}

const UpgradePackage: React.FC<IUpgradePackage> = ({
  bgColor,
  bgColorButton,
  textColor,
  textButton,
}) => {
  return (
    <div
      className="mt-4  px-[21px] py-[18px] rounded-[8px] relative mb-4"
      style={{ backgroundColor: bgColor }}
    >
      <p
        className="text-bv-16 font-[600] leading-[22px]"
        style={{ color: textColor ? textColor : "var(--Text-2)" }}
      >
        Nâng cấp gói cước của bạn
      </p>
      <p
        className="text-bv-14 text-[11px] text-Text2 mt-1"
        style={{ color: textColor ? textColor : "var(--Text-2)" }}
      >
        Bạn sẽ nhận được nhiều lợi ích hơn khi nâng gói cước, bấm vào nâng gói
        cước để tìm hiểu thêm
      </p>
      <Link
        to={"#"}
        className="text-bv-14 font-[600]  text-Text1 leading-[22px] mt-6 inline-flex h-9 w-[120px] justify-center items-center rounded-[8px]"
        style={{
          backgroundColor: bgColorButton,
          color: textButton ? textButton : "var(--Text-1",
        }}
      >
        Nâng gói cước
      </Link>

      <div className="absolute bottom-0 right-0">
        <img src={imageNavbar} alt="" />
      </div>
    </div>
  );
};

export default UpgradePackage;
