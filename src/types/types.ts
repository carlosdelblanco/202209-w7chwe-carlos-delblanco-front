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
