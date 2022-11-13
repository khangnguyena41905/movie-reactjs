import React from "react";
import { data, dataAppSocial } from "./data";
export default function Footer() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center w-full py-20 text-left">
        <div className="w-1/3">
          <h1 className="text-white mb-2 text-lg">TIX</h1>
          <div className="flex justify-between text-gray-400 text-sm">
            <div className="">
              <p>FAQ</p>
              <p>Brand Guidelines</p>
            </div>
            <div className="">
              <p>Thỏa thuận sử dụng</p>
              <p>Chính sách bảo mật</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 mx-6">
          <div className="w-full">
            <h1 className="text-white text-lg mb-2">Đối tác:</h1>
            <div className="grid grid-cols-4 gap-4 w-full">
              {data.map((item) => {
                return (
                  <img
                    className="w-10 h-10 rounded-full cursor-pointer block mx-auto"
                    src={item.img}
                    key={item.id}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="w-full flex justify-between">
            <div className="app">
              <h1 className="text-white text-lg mb-2">Mobile App</h1>
              <div className="flex">
                {dataAppSocial.app.map((item) => {
                  return (
                    <img
                      className="w-10 h-10 mr-2"
                      src={item.img}
                      key={item.id}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
            <div className="social">
              <h1 className="text-white text-lg mb-2">Social</h1>
              <div className="flex">
                {dataAppSocial.social.map((item) => {
                  return (
                    <img
                      className="w-10 h-10 mr-2"
                      src={item.img}
                      key={item.id}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
