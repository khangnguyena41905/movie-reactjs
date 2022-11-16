import { https } from "./url.config";

export const theaterServ = {
  getTheaterByMovie: (params) => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuPhim";
    return https.get(uri, params);
  },
  getMovieSchedule: (id) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`;
    return https.get(uri);
  },
};
