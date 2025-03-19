import Logo from "../../components/common/Logo";
import Buttons from "./buttons/Buttons";

const index = () => {
  return (
    <div>
      <Logo widthImage="100" />
      <p className="mt-2 text-center text-bv-24 text-XanhMobifone">
        Quên mật khẩu
      </p>
      <p className="mt-4 mb-6 text-center text-bv-14 text-LabelSecondary">
        Để lấy lại mật khẩu, quý khách vui lòng nhập số điện thoại của tài khoản
      </p>

      {/* text alert */}

      <Buttons />
    </div>
  );
};

export default index;
