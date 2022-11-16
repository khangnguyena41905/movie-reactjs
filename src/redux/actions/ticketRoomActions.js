import { CHOOSE_SEATS } from "../constants/ticketRoomConstant";

export const choose_seats = (payload) => ({
  type: CHOOSE_SEATS,
  payload,
});
