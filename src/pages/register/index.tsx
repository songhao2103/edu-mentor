import { Link } from "react-router-dom";
import FormLoginSocial from "../../components/common/FormLoginSocial";
import FormRegister from "../../components/common/FormRegister";
import Logo from "../../components/common/Logo";

const index = () => {
  return (
    <div>
      <Logo widthImage="100" />
      <p className="mt-6 mb-4 text-bv-xanh-24 ">Đăng ký</p>
      <FormLoginSocial register={true} />
      <div className="flex items-center gap-2 mt-4 mb-4">
        <div className="h-[1px] w-full bg-strokeM"></div>
        <p className="text-bv-gray-16 text-strokeM">hoặc</p>
        <div className="h-[1px] w-full bg-strokeM"></div>
      </div>
      <FormRegister />

      <p className="mt-3 text-center text-bv-dark-violet-14">
        Bạn đã có tài khoản?
        <Link to="/login" className="underline text-XanhMobifone">
          Đăng nhập
        </Link>
      </p>

      <p className="mt-3 text-center text-bv-dark-violet-14">
        Bằng cách đăng ký, bạn chấp nhận
        <a href="#" className=" text-XanhMobifone">
          Bạn chấp nhận điều khoản sử dụng
        </a>
        và
        <a href="#" className=" text-XanhMobifone">
          Chính sách quyền riêng tư
        </a>
        của chúng tôi
      </p>
    </div>
  );
};

export default index;
