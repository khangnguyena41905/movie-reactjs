import { CHOOSE_SEATS } from "../constants/ticketRoomConstant";

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
