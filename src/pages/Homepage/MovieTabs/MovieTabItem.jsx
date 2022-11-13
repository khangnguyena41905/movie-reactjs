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
      <div className="w-2/3 h-60">
        <p className="text-lg text-white">{tenPhim}</p>
        <p className="text-sm text-white">{maPhim}</p>
        <div className="h-1/2 overflow-auto">
          {lstLichChieuTheoPhim.map((lichChieu) => {
            return (
              <span className="mx-1">
                <Button type="primary" danger>
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "DD/MM/YYYY - HH:MM"
                  )}
                </Button>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
