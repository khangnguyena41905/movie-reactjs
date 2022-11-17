import { message } from "antd";
import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import { comfirm_booking } from "../../redux/actions/ticketRoomActions";
import { ticketServ } from "../../service/tickets.service";
import RenderSeats from "./RenderSeats";

export default function BookingPage() {
  let { id } = useParams();
  let [seats, setSeats] = useState([]);
  let callSeatsData = () => {
    ticketServ
      .getTicketRoomList(id)
      .then((res) => {
        setSeats(res.data.content.danhSachGhe);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  let choosedSeatsArr = useSelector((state) => {
    return state.TicketRoomReducer.choosedSeatsArr;
  });
  useEffect(() => {
    callSeatsData();
  }, []);
  let handleComfirm = () => {
    let ticketListInfor = {
      maLichChieu: id,
      danhSachVe: [...choosedSeatsArr],
    };
    ticketServ
      .confirmBooking(ticketListInfor)
      .then((res) => {
        message.success(res.data.content);
        setSeats([]);
        callSeatsData();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div>
      <Header />
      <div style={{ paddingTop: 200 }} className="container mx-auto">
        <RenderSeats seats={seats} choosedSeatsArr={choosedSeatsArr} />
      </div>
      <div className="mt-4">
        <button
          onClick={handleComfirm}
          className="text-xl bg-teal-500 text-white px-5 py-3"
        >
          Comfirm
        </button>
      </div>
    </div>
  );
}
