import { Button } from "antd";
import React from "react";
import { ItemOverlay } from "../../../component/ItemOverlay";

export default function MovieItems(props) {
  let { tenPhim, hinhAnh, moTa } = props.items;

  return (
    <ItemOverlay>
      <img className="image" src={hinhAnh} alt="" />
      <div className="overlay1 p-3">
        <div
          className="div w-full h-full overflow-hidden flex flex-col justify-center items-center text-left
        "
        >
          <p className="text-2xl text-white whitespace-nowrap">{tenPhim}</p>
          <p className="text-lg text-white whitespace-nowrap my-2">{moTa}</p>
          <Button type="primary" danger size="large">
            Đặt vé
          </Button>
        </div>
      </div>
      <div className="overlay2"></div>
    </ItemOverlay>
  );
}
