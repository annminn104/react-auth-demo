import { setUser } from "../redux/slice/auth";
import { AxiosPromise } from "axios";
import { AxiosConfig } from "../utils/axios";
import { AUTH_ENDPOINT } from "../enums/auth";
import { ILoginData, IRegisterData, IToken } from "@interfaces/auth";
import { Cookie } from "../utils/cookie";

class AuthService {
  isLogined: boolean = false;
  async login(data: ILoginData): Promise<AxiosPromise> {
    try {
      const res = await AxiosConfig.post(AUTH_ENDPOINT.LOGIN, data);
      this.isLogined = true;
      setUser(res.data.data);
      if (res.data.code == "SUCCESS") {
        this.setToken(res.data.data);
        console.log(res.data.data);
      }
      return res;
    } catch (error) {
      this.isLogined = false;
      return Promise.reject(error);
    }
  }

  async register(data: IRegisterData): Promise<AxiosPromise> {
    try {
      const res = await AxiosConfig.post(AUTH_ENDPOINT.REGISTER, data);
      // setUser(res.data);
      console.log(res);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  setToken(data: IToken) {
    const expired = new Date(data.accessTokenExpired);
    Cookie.Set("accessToken", data.accessToken, expired);
    Cookie.Set("refreshToken", data.refreshToken);
  }

  refreshToken(): AxiosPromise {
    return AxiosConfig.post(AUTH_ENDPOINT.REFRESH_TOKEN, { refreshToken: Cookie.Get("refreshToken") });
  }

  getAccessToken() {
    return Cookie.Get("accessToken");
  }
}

const authService = new AuthService();
export default authService;
