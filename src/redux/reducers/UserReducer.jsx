import { userInfoLocal } from "../../service/local.service";
import { SET_LOGIN } from "../constants/userConstant";

const initialState = {
  userInfor: userInfoLocal.get(),
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN: {
      state.userInfor = payload;
      console.log("payload: ", payload);
      return { ...state };
    }
    default:
      return state;
  }
};
