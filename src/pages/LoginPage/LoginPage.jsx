import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import Lottie from "lottie-react";
import bg_login from "../../asset/animation/bg_login.json";
import { useNavigate } from "react-router-dom";
import { userServ } from "../../service/user.service";
import { userInfoLocal } from "../../service/local.service";
import { useEffect } from "react";
import { setLoginActionService } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  let dispath = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    let userInfor = userInfoLocal.get();
    if (userInfor) {
      navigate("/");
    }
  });
  const onFinish = (values) => {
    console.log("Success:", values);
    // userServ
    //   .postLogin(values)
    //   .then((res) => {
    //     message.success(res.data.message);
    //     userInfoLocal.set(res.data.content);
    //     setTimeout(() => {
    //       navigate("/");
    //     }, 1000);
    //   })
    //   .catch((err) => {
    //     setTimeout(() => {
    //       message.error(err.response.data.content);
    //     }, 1000);
    //   });
    let handleSuccess = () => {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    };
    dispath(setLoginActionService(values, handleSuccess));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="w-screen h-screen fixed"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-halloween-frame-template_23-2149083045.jpg?w=1800&t=st=1666864367~exp=1666864967~hmac=6491a9af8641cb40572996c96fd562e28d48b54a7c0ae17d53b485299610caff)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center w-full h-full">
        <div className="container flex flex-col justify-center items-center max-w-3xl">
          <div className="w-1/2 p-10 ">
            {/* animation */}
            <Lottie className="w-full " animationData={bg_login}></Lottie>
          </div>
          <div className="w-1/2 flex justify-center items-center p-10">
            <Form
              className="w-full"
              layout="vertical"
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Tài khoản"
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Tài khoản không được để trống!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu không được để trống!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 16,
                }}
              >
                <Button className="bg-orange-700" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
