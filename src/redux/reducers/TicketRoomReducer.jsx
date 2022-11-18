import { message } from "antd";
import { ticketServ } from "../../service/tickets.service";
import {
  CHOOSE_SEATS,
  COMFIRM_BOOKING,
  COMFIRM_TICKETS,
} from "../constants/ticketRoomConstant";

const initialState = {
  choosedSeatsArr: [],
  ticketInfor: [],
};

export const TicketRoomReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHOOSE_SEATS: {
      return { ...state, choosedSeatsArr: payload };
    }
    case COMFIRM_TICKETS: {
      return { ...state, choosedSeatsArr: [] };
    }
    default:
      return state;
  }
};
