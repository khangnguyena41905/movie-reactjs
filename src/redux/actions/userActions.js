import { message } from "antd";
import { userInfoLocal } from "../../service/local.service";
import { userServ } from "../../service/user.service";
import { SET_LOGIN } from "../constants/userConstant";

export const setLoginActionService = (values, onSuccess) => {
  return (dispath) => {
    userServ
      .postLogin(values)
      .then((res) => {
        message.success(res.data.message);
        userInfoLocal.set(res.data.content);
        onSuccess();
        dispath({
          type: SET_LOGIN,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };
};
