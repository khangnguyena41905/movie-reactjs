import { message } from "antd";
import { ticketServ } from "../../service/tickets.service";
import { CHOOSE_SEATS, COMFIRM_BOOKING } from "../constants/ticketRoomConstant";

const initialState = {
  choosedSeatsArr: [],
};

export const TicketRoomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_SEATS: {
      return { ...state, choosedSeatsArr: payload };
    }
    default:
      return state;
  }
};
