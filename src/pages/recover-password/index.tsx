import Logo from "../../components/common/Logo";
import Buttons from "./buttons/Buttons";

const index = () => {
  return (
    <div>
      <Logo widthImage="100" />
      <p className="mt-2 text-center text-bv-xanh-24">Quên mật khẩu</p>
      <p className="mt-4 mb-6 text-bv-label-secondary-14">
        Để lấy lại mật khẩu, quý khách vui lòng nhập số điện thoại của tài khoản
      </p>
      {/* text thông báo */}

      <Buttons />
    </div>
  );
};

export default index;
