import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebaseConfig";

//Đăng nhập bằng google
export const loginByGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result?.user; // Thông tin người dùng
    if (!user) {
      return {
        success: false,
        error: `Lỗi khi gọi API tới google để đăng nhập! result: ${result}`,
      };
    }
    return { success: true, user };
  } catch (error) {
    console.error("Error during Google Login:", error);
    return {
      success: false,
      error: `Error during Google Login! error: ${error}`,
    };
  }
};
