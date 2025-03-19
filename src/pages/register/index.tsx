import { Link } from "react-router-dom";
import FormLoginSocial from "../../components/common/FormLoginSocial";
import FormRegister from "../../components/common/FormRegister";
import Logo from "../../components/common/Logo";

const index = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Logo widthImage="100" />
      </div>

      <p className="mt-6 mb-4 text-center text-bv-24 text-XanhMobifone ">
        Đăng ký
      </p>

      <FormLoginSocial register={true} />

      <div className="flex items-center gap-2 mt-4 mb-4">
        <div className="h-[1px] w-full bg-strokeM"></div>
        <p className="text-bv-gray-16 text-strokeM">hoặc</p>
        <div className="h-[1px] w-full bg-strokeM"></div>
      </div>
      <FormRegister />

      <p className="mt-3 text-center text-bv-14 text-Text1">
        Bạn đã có tài khoản?&nbsp;
        <Link to="/login" className="underline text-XanhMobifone font-[500]">
          Đăng nhập
        </Link>
      </p>

      <p className="mt-3 text-center text-bv-14 text-Text1">
        Bằng cách đăng ký, bạn chấp nhận&nbsp;
        <a href="#" className=" text-XanhMobifone font-[500]">
          Bạn chấp nhận điều khoản sử dụng&nbsp;
        </a>
        và&nbsp;
        <a href="#" className=" text-XanhMobifone font-[500]">
          Chính sách quyền riêng tư&nbsp;
        </a>
        của chúng tôi
      </p>
    </div>
  );
};

export default index;
