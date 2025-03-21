import Cookies from "js-cookie";
import { loginApi } from "../../services/authApi";
import { useMutation } from "@tanstack/react-query";
import { ILoginByGoogle } from "../../utils/interface/requestBody";

interface LoginParams {
  endpoint: string;
  credentials: ILoginByGoogle;
}

//hook login
export const useLogin = () => {
  return useMutation({
    mutationFn: ({ endpoint, credentials }: LoginParams) => {
      console.log("đã chạy vào đây!!");
      return loginApi(endpoint, credentials);
    },
    onSuccess: async (data) => {
      console.log("UseLogin, data:", data);
      //Xủ lý tiếp theo
      //thêm vào redux, navigate, toast
    },
    onError: (error) => {
      console.error("Error during login:", error);
      //xử lý lỗi
    },
  });
};
