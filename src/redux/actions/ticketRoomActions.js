import { CHOOSE_SEATS, COMFIRM_BOOKING } from "../constants/ticketRoomConstant";

export const choose_seats = (payload) => ({
  type: CHOOSE_SEATS,
  payload,
});
