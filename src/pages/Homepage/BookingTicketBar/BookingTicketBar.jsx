import { Button, message } from "antd";
import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropdownButton from "../../../component/DropdownButton";
import { movieServ } from "../../../service/movies.service";
import { theaterServ } from "../../../service/theaters.service";

export default function BookingTicketBar() {
  let [itemsDrop, setItemsDrop] = useState({
    movie: [],
    theater: [],
    showTime: [],
    maLichChieu: [],
  });
  let [bookingVal, setBookingVal] = useState({
    movie: "Phim",
    theater: "Rạp",
    showTime: "Lịch chiếu",
  });
  let fetchMovieList = async () => {
    try {
      let res = await movieServ.getMovies();
      let { content } = res.data;
      let items = [];
      content.map((item) => {
        // items.push({ label: item.tenPhim, key: item.maPhim });
        items = [...items, { label: item.tenPhim, key: item.maPhim }];
      });
      let itemsDropClone = { ...itemsDrop, movie: items };
      setItemsDrop(itemsDropClone);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const findMovie = (key) => {
    return itemsDrop.movie.filter((e) => {
      return e.key == key;
    });
  };
  const findTheater = (key) => {
    let params = { MaPhim: key };
    theaterServ
      .getTheaterByMovie({ params })
      .then((res) => {
        let { heThongRapChieu } = res.data.content;
        let theater = [];
        heThongRapChieu.map((item) => {
          return item.cumRapChieu.map((item) => {
            theater.push(item);
          });
        });
        let itemsTheater = [];
        theater.map((item) => {
          return (itemsTheater = [
            ...itemsTheater,
            {
              label: item.tenCumRap,
              key: item.maCumRap,
              lichChieuPhim: item.lichChieuPhim,
            },
          ]);
        });
        setItemsDrop({ ...itemsDrop, theater: itemsTheater });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };
  const findShowTime = (theater) => {
    let showTime = [];
    theater[0].lichChieuPhim.map((item) => {
      showTime = [
        ...showTime,
        {
          label: moment(item.ngayChieuGioChieu).format("DD/MM/YYYY - HH:MM"),
          key: item.maLichChieu,
        },
      ];
    });
    setItemsDrop({ ...itemsDrop, showTime });
  };
  return (
    <div className="relative mb-32">
      <div
        style={{
          background: "#202020",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-20 w-3/5 rounded-xl flex justify-center items-center"
      >
        <div className="w-1/4 border-r border-r-rose-500">
          <DropdownButton
            name={bookingVal.movie}
            items={itemsDrop.movie}
            classNameContainer="p-2"
            classNameInput="text-xl text-white"
            onClick={({ key }) => {
              let movie = findMovie(key);
              setBookingVal({ ...bookingVal, movie: movie[0].label });
              findTheater(key);
            }}
          />
        </div>
        <div className="w-1/4 border-r border-r-rose-500">
          <DropdownButton
            name={bookingVal.theater}
            items={itemsDrop.theater}
            classNameContainer="p-2"
            classNameInput="text-xl text-white"
            onClick={({ key }) => {
              let theater = itemsDrop.theater.filter((item) => {
                return item.key == key;
              });
              setBookingVal({ ...bookingVal, theater: theater[0].label });
              findShowTime(theater);
            }}
          />
        </div>
        <div className="w-1/4 ">
          <DropdownButton
            name={bookingVal.showTime}
            classNameContainer="p-2"
            classNameInput="text-xl text-white"
            items={itemsDrop.showTime}
            onClick={({ key }) => {
              let showTime = itemsDrop.showTime.filter((item) => {
                return item.key == key;
              });
              setBookingVal({
                ...bookingVal,
                showTime: showTime[0].label,
                maLichChieu: showTime[0].key,
              });
            }}
          />
        </div>
        <div className="shrink-0">
          <Button
            size="large"
            className="text-white text-xl border-0 bg-rose-700 hover:bg-rose-800 hover:text-white"
            onClick={() => {
              if (bookingVal.maLichChieu) {
                window.open(`/booking/${bookingVal.maLichChieu}`);
              } else {
                message.error("Vui lòng điền đủ thông tin");
              }
            }}
          >
            Mua vé
          </Button>
        </div>
      </div>
    </div>
  );
}
