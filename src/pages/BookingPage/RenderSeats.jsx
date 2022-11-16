import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { choose_seats } from "../../redux/actions/ticketRoomActions";

const Input = styled.input`
   {
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      display: block;
      width: 120%;
      height: 120%;
      top: 100%;
      border-radius: 15%;
      background-color: whitesmoke;
      border: 0.3rem solid #ff9900;
      inset: 0;
      cursor: pointer;
    }
    &:checked {
      &::after {
        background-color: red;
      }
    }
    &:disabled {
      &::after {
        background-color: #696969;
        border-color: #696969;
      }
    }
  }
`;

export default function RenderSeats({ seats }) {
  let dispatch = useDispatch();
  let choosedSeatsArr = useSelector((state) => {
    console.log("mấy cái ghế", state.TicketRoomReducer.choosedSeatsArr);
    return state.TicketRoomReducer.choosedSeatsArr;
  });
  let handleChange = (e) => {
    let isChecked = e.target.checked;
    let seat = { maGhe: e.target.name, giaVe: e.target.value };
    if (isChecked) {
      dispatch(choose_seats([...choosedSeatsArr, seat]));
    } else {
      let newList = choosedSeatsArr.filter((item) => {
        return item.maGhe != seat.maGhe;
      });
      dispatch(choose_seats(newList));
    }
  };
  let renderSeats = () => {
    return seats.map((item) => {
      return (
        <div key={item.maGhe}>
          <Input
            onChange={handleChange}
            type="checkbox"
            name={item.maGhe}
            value={item.giaVe}
            disabled={item.daDat}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className="grid grid-cols-20 gap-4 bg-black p-8">
        {renderSeats()}
      </div>
    </div>
  );
}
