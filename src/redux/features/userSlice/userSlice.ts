import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginData } from "../../../types/types";

export interface userRegister {
  username: string;
  password: string;
  picture: string;
  isLogged: boolean;
}

export const initialUserRegister: userRegister = {
  username: "",
  password: "",
  picture: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserRegister,
  reducers: {
    registerUser: (
      initialUserRegister,
      action: PayloadAction<userRegister>
    ) => ({
      ...initialUserRegister,
      ...action.payload,
    }),
    loginUser: (currentUserState, action: PayloadAction<UserLoginData>) => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const { registerUser: registerUserActionCreator } = userSlice.actions;
export const { loginUser: loginUserActionCreator } = userSlice.actions;
