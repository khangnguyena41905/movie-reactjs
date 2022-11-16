import { Tabs } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { movieServ } from "../../../service/movies.service";
import MovieTabItem from "./MovieTabItem";
import "../../../asset/scss/main.scss";
export default function MovieTabs() {
  let [theaterBranch, setTheaterBranch] = useState([]);
  const featchTheater = async () => {
    try {
      let res = await movieServ.getMovieByTheater();
      setTheaterBranch(res.data.content);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    featchTheater();
  }, []);

  const renderTheaterBranch = () => {
    return theaterBranch.map((theaterBranch, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-20 h-20" src={theaterBranch.logo} />}
          key={index}
        >
          <div className="h-100">
            <Tabs
              style={{ height: "100%" }}
              tabPosition="left"
              defaultActiveKey="0"
            >
              {theaterBranch.lstCumRap.map((theater, index) => {
                return (
                  <Tabs.TabPane
                    key={index}
                    tab={
                      <p className="text-lg text-white hover:text-purple-600">
                        {theater.tenCumRap}
                      </p>
                    }
                  >
                    <div className="movie-tabs__contents h-100 overflow-hidden p-3">
                      <div className="h-full overflow-auto">
                        {theater.danhSachPhim.map((movie) => {
                          return (
                            <MovieTabItem movie={movie} key={movie.maPhim} />
                          );
                        })}
                      </div>
                    </div>
                  </Tabs.TabPane>
                );
              })}{" "}
            </Tabs>
          </div>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div className="py-10">
      <div className="movie-tabs container mx-auto my-10 h-100  overflow-hidden">
        <div
          style={{
            border: "1px solid",
          }}
          className="w-full h-full"
        >
          <Tabs tabPosition="left" defaultActiveKey="0">
            {renderTheaterBranch()}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
