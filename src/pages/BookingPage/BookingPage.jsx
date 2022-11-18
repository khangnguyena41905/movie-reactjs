import { message } from "antd";
import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import {
  comfirm_booking,
  comfirm_tickets,
} from "../../redux/actions/ticketRoomActions";
import { ticketServ } from "../../service/tickets.service";
import InforTheater from "./InforTheater";
import RenderSeats from "./RenderSeats";

export default function BookingPage() {
  let dispatch = useDispatch();
  let { id } = useParams();
  let [movieInfor, setMovieInfor] = useState([]);
  let [seats, setSeats] = useState([]);
  let callSeatsData = () => {
    ticketServ
      .getTicketRoomList(id)
      .then((res) => {
        setMovieInfor(res.data.content.thongTinPhim);
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
    let danhSachVe = [];
    choosedSeatsArr.map((item) => {
      return danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
    });
    let ticketListInfor = {
      maLichChieu: id,
      danhSachVe,
    };
    console.log("danhSachVe: ", danhSachVe);
    ticketServ
      .confirmBooking(ticketListInfor)
      .then((res) => {
        message.success(res.data.content);
        dispatch(comfirm_tickets());
        callSeatsData();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  return (
    <div
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://i.pinimg.com/originals/b6/a5/07/b6a507c98668c924739a19c9c243ab6e.jpg)",
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div
        style={{ paddingTop: 200 }}
        className="container w-full h-4/5 mx-auto flex justify-between items-center"
      >
        <div className="w-3/5">
          <RenderSeats seats={seats} choosedSeatsArr={choosedSeatsArr} />
        </div>

        <div
          style={{
            background: "rgba( 0, 0, 0, 0.1 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: " blur( 10px )",
            WebkitBackdropFilter: "blur( 10px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
          className="ml-10 w-2/5 h-full"
        >
          <InforTheater movieInfor={movieInfor} tickets={choosedSeatsArr} />
          <div className="mt-4">
            <button
              onClick={handleComfirm}
              className="text-xl bg-teal-500 text-white px-5 py-3"
            >
              Comfirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
