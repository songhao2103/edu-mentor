import { useState } from "react";
import icon_google from "../../../public/asset/icons/social-google.svg";
import icon_facebook from "../../../public/asset/icons/Facebook.svg";
import icon_apple from "../../../public/asset/icons/social-apple.svg";
import LoadingFullScreen from "../loading/LoadingFullScreen.tsx";

interface FormLoginSocialProps {
  register: boolean;
}
const FormLoginSocial: React.FC<FormLoginSocialProps> = ({ register }) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) return <LoadingFullScreen />;

  return (
    <div className="flex flex-col gap-y-[12px]">
      <div className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]">
        <img src={icon_google} alt="" />
        <p className=" text-bv-black-16">
          {register ? "Đăng ký bằng Google" : "Đăng nhập bằng Google"}
        </p>
      </div>
      <div className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]">
        <img src={icon_facebook} alt="" />
        <p className="text-bv-black-16">
          {register ? "Đăng ký bằng Facebook" : "Đăng nhập bằng Facebook"}
        </p>
      </div>
      <div className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]">
        <img src={icon_apple} alt="" />
        <p className="text-bv-black-16">
          {register ? "Đăng ký bằng Apple" : "Đăng nhập bằng Apple"}
        </p>
      </div>
    </div>
  );
};

export default FormLoginSocial;
