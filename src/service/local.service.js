let USER_INFOR = "USER_INFOR";
export const userInfoLocal = {
  set: (userInfor) => {
    // chuyển đổi thành chuỗi json
    let json = JSON.stringify(userInfor);
    // lưu xuống local storage
    localStorage.setItem(USER_INFOR, json);
  },
  get: () => {
    // lấy dữ liệu từ json
    let json = localStorage.getItem(USER_INFOR);
    // parse chuổi json
    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_INFOR);
  },
};
