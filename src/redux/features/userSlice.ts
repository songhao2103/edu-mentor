import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

// export const {"actions"} = userSlice.actions

export default userSlice.reducer;
