import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import axios from "axios";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzM0UiLCJIZXRIYW5TdHJpbmciOiIxOS8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODE4NjI0MDAwMDAiLCJuYmYiOjE2NTQzNjIwMDAsImV4cCI6MTY4MjAxMDAwMH0.8vVBHKZZpOpTUa6ep4mWe7SQc5U-y_8IFYOnVCJLEgI";

export const BASE_URL = "https://movienew.cybersoft.edu.vn";

export const configHeaders = () => {
  return {
    TokenCybersoft: TOKEN_CYBERSOFT,
  };
};
export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});
