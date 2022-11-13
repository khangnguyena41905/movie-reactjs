import React from "react";

export default function CarouselDots(props) {
  let { ref, quality } = props.data;
  let arr = Array.from(Array(quality).keys());
  return (
    <div className="dots">
      {arr.map((item, index) => {
        return (
          <button
            key={index}
            className="p-2 rounded-full bg-red-500 mx-2"
            onClick={() => {
              ref.current.goTo(item + 1);
            }}
          ></button>
        );
      })}
    </div>
  );
}
