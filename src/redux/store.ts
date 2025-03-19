import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice.ts";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

//store.getState trả về toàn bộ state của store
//ReturnType<typeof store.getState> sử dụng utility type để tự động suy ra kiểu dữ liệu của state từ hàm getState
export type RootState = ReturnType<typeof store.getState>;

//store.dispatch là hàm dùng để gửi các action tới store
//typeof store.dispatch dùng để lấy kiểu của hàm dispatch từ store
export type AppDispatch = typeof store.dispatch;

export default store;
