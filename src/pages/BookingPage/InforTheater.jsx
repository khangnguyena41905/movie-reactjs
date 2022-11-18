import React from "react";

export default function InforTheater({ movieInfor, tickets }) {
  let { tenCumRap, tenPhim, tenRap, diaChi, hinhAnh, ngayChieu, gioChieu } =
    movieInfor;
  let handleMoney = () => {
    let tongTien = 0;
    tickets.map((item) => {
      tongTien += item.giaVe * 1;
    });
    return tongTien.toLocaleString();
  };
  return (
    <div className="p-5 h-4/5">
      <p className="text-white text-3xl mb-6">{tenPhim}</p>
      <div className="flex flex-col justify-between h-4/5">
        <p className="text-white text-xl flex justify-between items-start">
          <span>Tên cụm rạp:</span>
          <span className="w-3/5 text-right">{tenCumRap}</span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Địa chỉ:</span>
          <span className="w-3/5 text-right">{diaChi}</span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Ngày chiếu:</span>
          <span className="w-3/5 text-right">{ngayChieu}</span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Giờ chiếu:</span>
          <span className="w-3/5 text-right">{gioChieu}</span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Tên rạp</span>
          <span className="w-3/5 text-right">{tenRap}</span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Ghế:</span>
          <span className="w-3/5 text-right">
            {tickets.map((item) => {
              return <span key={item.maGhe}>[-{item.tenGhe}-].</span>;
            })}
          </span>
        </p>
        <p className="text-white text-xl flex justify-between items-start">
          <span>Tổng tiền</span>
          <span className="w-3/5 text-right">{handleMoney()}VND</span>
        </p>
      </div>
    </div>
  );
}
