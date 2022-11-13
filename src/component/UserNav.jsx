import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SET_LOGIN } from "../redux/constants/userConstant";
import { userInfoLocal } from "../service/local.service";

export default function UserNav() {
  let dispath = useDispatch();
  let userInfor = useSelector((state) => {
    return state.UserReducer.userInfor;
  });
  let handleLogout = () => {
    userInfoLocal.remove();
    dispath({
      type: SET_LOGIN,
      payload: null,
    });
  };
  let renderContent = () => {
    if (userInfor) {
      return (
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <div className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-rose-700">
            {userInfor.hoTen}
          </div>
          <button
            onClick={handleLogout}
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-rose-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-800"
          >
            Log out{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <NavLink
            to="/login"
            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-rose-700"
          >
            Sign in
          </NavLink>
          <NavLink
            to="/register"
            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Sign up
          </NavLink>
        </div>
      );
    }
  };
  return <>{renderContent()}</>;
}
