import { Button, Card } from "antd";
import React from "react";
const { Meta } = Card;
export default function MovieItem(props) {
  const { tenPhim, hinhAnh, moTa, trailer } = props.items;
  return (
    <div className="h-88 bg-stone-800 rounded-2xl p-3">
      <img
        className=" object-cover w-full h-2/3  rounded-2xl"
        src={hinhAnh}
        alt=""
      />
      <div className="content flex flex-col justify-between items-start overflow-hidden w-full text-left">
        <div className="flex flex-col justify-between items-start overflow-hidden w-full">
          <p className="text-2xl text-white whitespace-nowrap ">{tenPhim}</p>
          <p className="text-lg text-white whitespace-nowrap my-2">{moTa}</p>
        </div>
        <button className="bg-rose-700 text-white px-6 py-2 rounded-md text-xl hover:bg-rose-800">
          Đặt vé
        </button>
      </div>
    </div>
  );
}
