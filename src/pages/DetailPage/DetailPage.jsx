import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { theaterServ } from "../../service/theaters.service";

export default function DetailPage() {
  let [movieSchedule, setMovieSchedule] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    console.log("id: ", id);

    theaterServ
      .getMovieSchedule(id)
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);
  return <div>DetailPage</div>;
}
