import axios from "axios";
import { BASE_URL, configHeaders } from "./url.config";

export const userServ = {
  postLogin: (dataUser) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataUser,
      headers: configHeaders(),
    });
  },
};
