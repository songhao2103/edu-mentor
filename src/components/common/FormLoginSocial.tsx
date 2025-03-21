import { useState } from "react";
import icon_facebook from "../../../public/asset/icons/Facebook.svg";
import icon_apple from "../../../public/asset/icons/social-apple.svg";
import icon_google from "../../../public/asset/icons/social-google.svg";
import { useLogin } from "../../hooks/tanstack-query/auth";
import { loginByGoogle } from "../../services/otherApi";

interface FormLoginSocialProps {
  register: boolean;
}

const FormLoginSocial: React.FC<FormLoginSocialProps> = ({ register }) => {
  const loginMutation = useLogin();
  const [isLoading, setIsLoading] = useState(false);

  //hàm xử lý đăng nhập bằng google
  const handleLoginByGoogle = async () => {
    try {
      setIsLoading(true);
      const googleResult = await loginByGoogle();
      if (!googleResult.success) {
        setIsLoading(false);
        //có thể thông báo 1 alert hoặc toast
        console.log(googleResult.error);
        return;
      }

      console.log(googleResult?.user);
      //đoạn ni em không biết idToken là chi cả anh ạ, em kiểu trong kết quả trả về của gg thì không chộ nên em để accessToken
      const credentials = {
        idToken: googleResult?.user?.accessToken,
        domain: "api.pm-ptdv.com",
      };

      //gọi API tới server
      const response = await loginMutation.mutateAsync({
        endpoint: "account/login-google",
        credentials,
      });

      console.log(response);
    } catch (error) {
      console.log("Lỗi khi gọi API tới google! error: ", error.message);
    }
  };
  return (
    <div className="flex flex-col gap-y-[12px]">
      <div
        onClick={handleLoginByGoogle}
        className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]"
      >
        <img src={icon_google} alt="" />
        <p className=" text-bv-16">
          {register ? "Đăng ký bằng Google" : "Đăng nhập bằng Google"}
        </p>
      </div>
      <div className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]">
        <img src={icon_facebook} alt="" />
        <p className="text-bv-16 text-Text">
          {register ? "Đăng ký bằng Facebook" : "Đăng nhập bằng Facebook"}
        </p>
      </div>
      <div className="flex gap-x-[8px] justify-center items-center w-full border-[1px] border-strokeM rounded-[14px] bg-[#fff] h-[50px]">
        <img src={icon_apple} alt="" />
        <p className="text-bv-16 text-Text">
          {register ? "Đăng ký bằng Apple" : "Đăng nhập bằng Apple"}
        </p>
      </div>
    </div>
  );
};

export default FormLoginSocial;
