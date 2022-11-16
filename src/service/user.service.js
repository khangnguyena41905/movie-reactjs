import axios from "axios";
import { BASE_URL, configHeaders } from "./url.config";
import { https } from "./url.config";
export const userServ = {
  postLogin: (dataUser) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataUser,
      headers: configHeaders(),
    });
  },
  postSignUp: (dataUser) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return https.post(uri, dataUser);
  },
};
