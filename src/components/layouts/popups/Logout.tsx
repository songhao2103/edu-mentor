import ButtonCommon from "../../common/ButtonCommon";
import LayoutPopup from "./LayoutPopup";

interface ILogoutProps {
  hiddenLogout: boolean;
  handleHiddenLogout: (value: boolean) => void;
}
const Logout: React.FC<ILogoutProps> = ({
  hiddenLogout,
  handleHiddenLogout,
}) => {
  return (
    <LayoutPopup
      bgcPopup="rgba(0,0,0,0.4)"
      hiddenPopup={hiddenLogout}
      handleHiddenPopup={handleHiddenLogout}
    >
      <div className="absolute z-30 p-12 right-[50%] translate-x-[50%] bg-White rounded-[8px] px-6 py-[15px] top-[200px] w-[300px] h-[212px]">
        <p className="font-semibold text-bv-18 leading-[28px] text-Text text-center">
          Thông báo đăng xuất
        </p>
        <p className="text-center text-bv-14 text-TextSubtext">
          Bạn chắc chắn muốn đăng xuất
        </p>
        <div className="flex flex-col mt-6 gap-y-3">
          <ButtonCommon
            message="Đăng xuất"
            bgcColor="#D92D20"
            borderRadius="8px"
          />

          <ButtonCommon
            message="Thoát"
            bgcColor="White"
            borderRadius="8px"
            onclick={() => handleHiddenLogout(false)}
          />
        </div>
      </div>
    </LayoutPopup>
  );
};

export default Logout;
