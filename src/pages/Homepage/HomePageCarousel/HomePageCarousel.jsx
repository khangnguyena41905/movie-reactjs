import { Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { movieServ } from "../../../service/movies.service";
import CarouselDots from "../../../component/CarouselDots";

export default function HomePageCarousel() {
  let [banners, setBanners] = useState([]);
  let ref = useRef();
  const featchBanner = async () => {
    try {
      let res = await movieServ.getBanner();
      setBanners(res.data.content);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    featchBanner();
  }, []);
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-full relative">
      <Carousel
        ref={ref}
        dots={false}
        className="a pt-20"
        afterChange={onChange}
      >
        {banners.map((item) => {
          return (
            <div className="w-full" key={item.maBanner}>
              <img
                className="w-full h-96 object-cover"
                src={item.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>

      <button
        className="text-white absolute left-0 top-1/2"
        onClick={() => {
          ref.current.prev();
        }}
      >
        <LeftOutlined
          className="transition ease-in-out text-stone-300 hover:text-rose-700 hover:scale-150 duration-300"
          style={{ fontSize: "3rem" }}
        />
      </button>
      <button
        className="text-white absolute right-0 top-1/2"
        onClick={() => {
          ref.current.next();
        }}
      >
        <RightOutlined
          className="transition ease-in-out text-stone-300 hover:text-rose-700 hover:scale-150 duration-300"
          style={{ fontSize: "3rem" }}
        />
      </button>
      {/* <CarouselDots data={{ ref: ref, quality: 3 }} /> */}
    </div>
  );
}
