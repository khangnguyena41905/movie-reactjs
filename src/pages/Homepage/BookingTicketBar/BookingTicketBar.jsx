import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropdownButton from "../../../component/DropdownButton";
import { movieServ } from "../../../service/movies.service";

export default function BookingTicketBar() {
  let [itemsShowTime, setItemsShowTime] = useState([]);
  let [itemsDrop, setItemsDrop] = useState({
    movie: [],
    theater: [],
    showTime: [],
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
    movieServ
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
        let itemsDropClone = { ...itemsDrop, theater: itemsTheater };
        setItemsDrop(itemsDropClone);
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
    setItemsShowTime(showTime);
  };
  return (
    <div className="aaa h-20 w-full bg-white flex justify-center items-center">
      <div className="w-1/3 border-r border-r-rose-500">
        <DropdownButton
          name={bookingVal.movie}
          items={itemsDrop.movie}
          classNameContainer="p-2"
          classNameInput="text-xl text-rose-700"
          onClick={({ key }) => {
            let movie = findMovie(key);
            setBookingVal({ ...bookingVal, movie: movie[0].label });
            findTheater(key);
          }}
        />
      </div>
      <div className="w-1/3 border-r border-r-rose-500">
        <DropdownButton
          name={bookingVal.theater}
          items={itemsDrop.theater}
          classNameContainer="p-2"
          classNameInput="text-xl text-rose-700"
          onClick={({ key }) => {
            let theater = itemsDrop.theater.filter((item) => {
              return item.key == key;
            });
            setBookingVal({ ...bookingVal, theater: theater[0].label });
            findShowTime(theater);
          }}
        />
      </div>
      <div className="w-1/3 border-r border-r-rose-500">
        <DropdownButton
          name={bookingVal.showTime}
          classNameContainer="p-2"
          classNameInput="text-xl text-rose-700"
          items={itemsShowTime}
          onClick={({ key }) => {
            let showTime = itemsShowTime.filter((item) => {
              return item.key == key;
            });
            setBookingVal({ ...bookingVal, showTime: showTime[0].label });
          }}
        />
      </div>
    </div>
  );
}