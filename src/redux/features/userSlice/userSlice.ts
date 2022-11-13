import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userRegister {
  username: string;
  password: string;
  picture: string;
}
export const initialUserRegister: userRegister = {
  username: "",
  password: "",
  picture: "",
};

export const userRegisterSlice = createSlice({
  name: "userRegisterName",
  initialState: initialUserRegister,
  reducers: {
    registeruser: (
      initialUserRegister,
      action: PayloadAction<userRegister>
    ) => ({
      ...initialUserRegister,
      ...action.payload,
    }),
  },
});

export const registerReducer = userRegisterSlice.reducer;

export const { registeruser: registerUserActionCreator } =
  userRegisterSlice.actions;
