import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { movieServ } from "../../../service/movies.service";
import MovieList from "./MovieList";
import { useRef } from "react";
export default function MovieSlide() {
  let [slideQuality, setSlideQuality] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="h-3 w-3 rounded-full bg-slate-300 cursor-pointer"></div>
    ),
  };
  const fetchslideQuality = async (params) => {
    try {
      let res = await movieServ.getMovieLists(params);
      let { totalPages } = res.data.content;
      setSlideQuality(Array.from(Array(totalPages).keys()));
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    let params = {
      soTrang: 1,
      soPhanTuTrenTrang: 12,
      maNhom: "GP01",
    };
    fetchslideQuality({ params });
  }, []);
  const renderMovieList = () => {
    return slideQuality.map((soTrang) => {
      return (
        <div key={soTrang}>
          <MovieList
            data={{
              soTrang: soTrang + 1,
              soPhanTuTrenTrang: 12,
              maNhom: "GP01",
            }}
          />
        </div>
      );
    });
  };
  renderMovieList();
  return (
    <div>
      <Carousel {...settings}>{renderMovieList()}</Carousel>
    </div>
  );
}
