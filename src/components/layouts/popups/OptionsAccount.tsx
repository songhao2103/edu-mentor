import { memo } from "react";
import LayoutPopup from "./LayoutPopup";
import { useSelector } from "react-redux";
import UpgradePackage from "../../common/UpgradePackage";
import { Link } from "react-router-dom";
import Icon from "../../common/Icon";

interface IOptionsAccountProps {
  handleHiddenOptionsAccount: (value: boolean) => void;
  handleHiddenLogout: (value: boolean) => void;
  hiddenOptionsAccount: boolean;
}
const OptionsAccount: React.FC<IOptionsAccountProps> = ({
  handleHiddenOptionsAccount,
  handleHiddenLogout,
  hiddenOptionsAccount,
}) => {
  const userInfo = useSelector((state: any) => state.user.userInfo);

  return (
    <LayoutPopup
      bgcPopup="transparent"
      hiddenPopup={hiddenOptionsAccount}
      handleHiddenPopup={handleHiddenOptionsAccount}
    >
      <div className="absolute z-30 p-12 top-[85px] right-1 bg-White rounded-[8px] px-6 py-[15px] w-[80vw] shadow-xanhMB">
        <p className="py-4 font-medium border-b text-bv-20 text-Text1">
          Xin chào&nbsp;
          <span className="font-bold text-XanhMobifone">
            {userInfo?.displayName || "Song Hào"}
          </span>
        </p>
        <div className="pb-4 border-b">
          <UpgradePackage bgColor="#FFF8E1" bgColorButton="#FFE57F" />
        </div>

        <div className="flex flex-col mt-4">
          <Link to={"#"} className="flex items-center gap-x-4 py-[13px] px-4">
            <Icon name="Settings" size={25} />
            <p className="text-bv-14 text-Text1">Cài đặt tài khoản</p>
          </Link>
          <Link to={"#"} className="flex items-center gap-x-4 py-[13px] px-4">
            <Icon name="MessageCircle" size={25} />
            <p className="text-bv-14 text-Text1">Nhắn tin với giáo viên</p>
          </Link>
          <div
            className="flex items-center gap-x-4 py-[13px] px-4"
            onClick={() => {
              handleHiddenLogout(true);
              handleHiddenOptionsAccount(false);
            }}
          >
            <div className="scale-x-[-1]">
              <Icon name="LogOut" size={25} />
            </div>
            <p className="text-bv-14 text-Text1">Đăng xuất</p>
          </div>
        </div>
      </div>
    </LayoutPopup>
  );
};

export default memo(OptionsAccount);
