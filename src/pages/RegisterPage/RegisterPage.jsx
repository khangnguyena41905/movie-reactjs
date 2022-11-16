import { Button, Checkbox, Form, Input, message, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userServ } from "../../service/user.service";
import "../../asset/scss/main.scss";

export default function RegisterPage() {
  let navigate = useNavigate();
  const maNhom = [
    { lable: "GP01", value: "GP01" },
    { lable: "GP02", value: "GP02" },
    { lable: "GP03", value: "GP03" },
    { lable: "GP04", value: "GP04" },
    { lable: "GP05", value: "GP05" },
    { lable: "GP06", value: "GP06" },
    { lable: "GP07", value: "GP07" },
    { lable: "GP08", value: "GP08" },
    { lable: "GP09", value: "GP09" },
    { lable: "GP10", value: "GP10" },
  ];
  const onFinish = (values) => {
    console.log("Success:", values);
    userServ
      .postSignUp(values)
      .then((res) => {
        console.log("res: ", res);
        message.success(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log("err: ", err);
        message.error(err.response.data.content);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://cdna.artstation.com/p/assets/images/images/002/809/630/large/michael-pryor-venom-vs-spider-man-4012-x-2482.jpg?1465975732)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-screen flex justify-center items-center"
    >
      <div
        style={{
          background: "rgba( 255, 255, 255, 0.2 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 2px )",
          WebkitBackdropFilter: "blur( 2px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        className="w-2/5 mx-auto text-white py-6 px-5"
      >
        <div>
          <p className="text-gray-200 text-5xl mb-3">SIGN UP</p>
        </div>
        <Form
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 0,
          }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Form.Item
                label={<p className="text-gray-300 text-xl">Họ tên</p>}
                name="hoTen"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="bg-transparent border-gray-500 hover:border-red-800 focus:border-red-700 focus:shadow-lg focus:shadow-red-500" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={<p className="text-gray-300 text-xl">Mã nhóm</p>}
                name="maNhom"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Select
                  className="select-input"
                  style={{ background: "rgb(82 82 82)" }}
                  showSearch
                  options={maNhom}
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Form.Item
                label={<p className="text-gray-300 text-xl">Tài khoản</p>}
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="bg-transparent border-gray-500 hover:border-red-800 focus:border-red-700 focus:shadow-lg focus:shadow-red-500" />
              </Form.Item>
            </div>
            <div>
              {" "}
              <Form.Item
                label={<p className="text-gray-300 text-xl">Mật khẩu</p>}
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  type="password"
                  className="bg-transparent border-gray-500 hover:border-red-800 focus:border-red-700 focus:shadow-lg focus:shadow-red-500"
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Form.Item
                label={<p className="text-gray-300 text-xl">Email</p>}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="bg-transparent border-gray-500 hover:border-red-800 focus:border-red-700 focus:shadow-lg focus:shadow-red-500" />
              </Form.Item>
            </div>
            <div>
              <Form.Item
                label={<p className="text-gray-300 text-xl">Số điện thoại</p>}
                name="soDt"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="bg-transparent border-gray-500 hover:border-red-800 focus:border-red-700 focus:shadow-lg focus:shadow-red-500" />
              </Form.Item>
            </div>
          </div>

          <Form.Item>
            <button
              className="transition bg-gradient-to-r from-red-500 to-black border-0 rounded-full px-10 py-2 text-lg text-gray-400 hover:scale-125 hover:text-white duration-300 ease-linear"
              type="primary"
              htmlType="submit"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
