import { UserRegisteredCredentials } from "../types/types";

const useUser = () => {
  const url = process.env.REACT_APP_API_URL;

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
  return { registerUser };
};

export default useUser;
