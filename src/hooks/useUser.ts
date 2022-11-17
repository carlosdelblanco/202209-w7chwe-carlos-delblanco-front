import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../redux/hooks";
import {
  JwtCustomPayload,
  UserCredentials,
  UserRegisteredCredentials,
} from "../types/types";
import decodeToken from "../utils/decodeToken";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisteredCredentials) => {
    try {
      const responseData = await fetch(`${url}/users/signup`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!responseData.ok) {
        throw new Error("Error!");
      }
    } catch (error: unknown) {
      throw new Error(`Error fatal${(error as Error).message}`);
    }
  };

  const loginUser = async (loginData: UserCredentials) => {
    try {
      const loginResponse = await fetch(`${url}/users/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "content-type": "application/json",
        },
      });

      const { token } = await loginResponse.json();
      const loggedUser: JwtCustomPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ ...loggedUser, token }));
      localStorage.setItem("token", token);
    } catch (error: unknown) {
      throw new Error(`login error: ${(error as Error).message}`);
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
