import jwtDecode from "jwt-decode";
import { JwtCustomPayload } from "../types/types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtCustomPayload = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
