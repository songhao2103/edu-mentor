import { Link } from "react-router-dom";
import FormLogin from "../../components/common/FormLogin";
import FormLoginSocial from "../../components/common/FormLoginSocial";
import Logo from "../../components/common/Logo";

const index = () => {
  return (
    <div>
      <Logo widthImage="100" />

      <p className="mt-6 mb-4 text-bv-xanh-24 ">Đăng nhập</p>
      <FormLoginSocial register={true} />
      <div className="flex items-center gap-2 mt-4 mb-4">
        <div className="h-[1px] w-full bg-strokeM"></div>
        <p className="text-bv-gray-16 text-strokeM">hoặc</p>
        <div className="h-[1px] w-full bg-strokeM"></div>
      </div>
      <FormLogin />

      <div className="mt-3 text-center">
        <Link
          to={"/recover-password"}
          className="text-bv-dark-violet-14 text-XanhMobifone"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <p className="mt-3 text-center text-bv-dark-violet-14">
        Bạn chưa có tài khoản?
        <Link to="/register" className="underline text-XanhMobifone">
          Đăng ký
        </Link>
      </p>
    </div>
  );
};

export default index;
