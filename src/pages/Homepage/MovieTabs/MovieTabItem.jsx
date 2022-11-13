import { Button } from "antd";
import moment from "moment";
import React from "react";

export default function MovieTabItem({ movie }) {
  let { tenPhim, maPhim, lstLichChieuTheoPhim, hinhAnh } = movie;
  return (
    <div className="flex justify-center items-center w-full p-3">
      <div className="w-1/3 h-60 flex items-center">
        <img className="w-full object-cover" src={hinhAnh} alt="" />
      </div>
      <div className="w-2/3 h-60 text-left">
        <p className="text-2xl text-indigo-300 ml-1 mb-2">
          {" "}
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-rose-500 text-white rounded-xl px-2 py-1">
            C18
          </span>{" "}
          {tenPhim}
        </p>
        <div className="h-1/2 overflow-auto">
          {lstLichChieuTheoPhim.slice(0, 5).map((lichChieu) => {
            return (
              <Button className="mt-1 mx-1 bg-transparent text-white border-0 hover:bg-gradient-to-r hover:from-rose-400 hover:to-blue-500 hover:text-white transition duration-300 ease-in-out">
                {moment(lichChieu.ngayChieuGioChieu).format(
                  "DD/MM/YYYY - HH:MM"
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
