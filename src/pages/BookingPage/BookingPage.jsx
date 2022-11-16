import { data } from "autoprefixer";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/Header";
import { ticketServ } from "../../service/tickets.service";
import RenderSeats from "./RenderSeats";

export default function BookingPage() {
  let { id } = useParams();
  let [seats, setSeats] = useState([]);
  useEffect(() => {
    ticketServ
      .getTicketRoomList(id)
      .then((res) => {
        console.log("res: ", res.data.content);
        setSeats(res.data.content.danhSachGhe);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: 200 }} className="container mx-auto">
        <RenderSeats seats={seats} />
      </div>
      <div className="mt-4">
        <button className="text-xl bg-teal-500 text-white px-5 py-3">
          Comfirm
        </button>
      </div>
    </div>
  );
}
