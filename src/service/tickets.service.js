import { https } from "./url.config";

export const ticketServ = {
  getTicketRoomList: (id) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`;
    return https.get(uri);
  },
  confirmBooking: (ticketList) => {
    let uri = "/api/QuanLyDatVe/DatVe";
    return https.post(uri, ticketList);
  },
};
