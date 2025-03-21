import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../utils/interface/users";

interface IUserState {
  userInfo: object;
}

const initialState: IUserState = {
  userInfo: {
    name: "hào",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //payload là 1 object chứa thông tin user
    updateUserInfo: (state, action: PayloadAction<IUser>) => {
      state.userInfo = action.payload;
    },
  },
});

// export const {"actions"} = userSlice.actions

export default userSlice.reducer;
