import { initializeApp } from "firebase/app"; //khởi tạo một ứng dụng Firebase với cấu hình cụ thể của bạn.

//Hàm này giúp khởi tạo Firebase Authentication để xử lý việc đăng nhập, đăng xuất, xác thực người dùng.
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "edu-mentor-6bc9c.firebaseapp.com",
  projectId: "edu-mentor-6bc9c",
  storageBucket: "edu-mentor-6bc9c.firebasestorage.app",
  messagingSenderId: "918408010971",
  appId: "1:918408010971:web:caa01ba9c7e4afa78340fe",
  measurementId: "G-WJR2XHW0RX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
