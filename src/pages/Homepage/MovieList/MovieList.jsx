import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { movieServ } from "../../../service/movies.service";
import MovieItem from "./MovieItem";
import MovieItems from "./MovieItems";

export default function MovieList(props) {
  let { soTrang, soPhanTuTrenTrang, maNhom } = props.data;
  let [movieList, setMovieList] = useState({});
  let fetchMovieList = async () => {
    let params = { maNhom, soTrang, soPhanTuTrenTrang };
    try {
      let res = await movieServ.getMovieLists({ params });
      setMovieList(res.data.content);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    fetchMovieList({});
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-6 mt-10">
        {movieList.items?.map((item) => {
          return <MovieItems key={item.maPhim} items={item} />;
        })}
      </div>
    </div>
  );
}
