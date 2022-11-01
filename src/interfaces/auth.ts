export interface ILoginData {
  email: string;
  password: string;
  remember: boolean;
}

export interface IRegisterData {
  email: string;
  password: string;
}

export interface IToken {
  accessToken: string;
  accessTokenExpired: string;
  email: string;
  phone: string;
  refreshToken: string;
  userId: string;
  userName: string;
}
