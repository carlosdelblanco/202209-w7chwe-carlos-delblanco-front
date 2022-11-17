export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisteredCredentials extends UserCredentials {
  email: string;
}

export interface UserRegister {
  username: string;
  password: string;
  email: string;
}

export interface JwtCustomPayload {
  id: string;
  username: string;
}

export interface UserLoginData {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}
