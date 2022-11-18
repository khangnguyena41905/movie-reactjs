import { CHOOSE_SEATS, COMFIRM_TICKETS } from "../constants/ticketRoomConstant";

export const choose_seats = (payload) => ({
  type: CHOOSE_SEATS,
  payload,
});
export const comfirm_tickets = () => ({
  type: COMFIRM_TICKETS,
});
