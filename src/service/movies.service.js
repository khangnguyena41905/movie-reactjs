import { https } from "./url.config";

export const movieServ = {
  getBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return https.get(uri);
  },
  getMovieLists: (params) => {
    let uri = "api/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return https.get(uri, params);
  },
  getMovieByTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return https.get(uri);
  },
  getMovies: () => {
    let uri = "api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
    return https.get(uri);
  },
  getTheaterByMovie: (params) => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuPhim";
    return https.get(uri, params);
  },
  getMovieTimeStart: (params) => {
    let uri = "api/QuanLyRap/LayThongTinLichChieuHeThongRap";
    return https.get(uri, params);
  },
};
