import { Button, Card, Modal } from "antd";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import ModalMovie from "./ModalMovie";
const { Meta } = Card;
export default function MovieItem(props) {
  let { tenPhim, maPhim, hinhAnh, moTa, trailer } = props.items;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="group w-full">
        <div className="w-full h-88 relative">
          <img
            className="img w-full h-full object-cover"
            src={hinhAnh}
            alt=""
          />
          <div
            style={{
              background: "linear-gradient(to top,#000,transparent 100%)",
            }}
            onClick={() => {
              window.open(`/detail/${maPhim}`);
            }}
            className="bg-hover cursor-pointer absolute inset-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 ease-in-out"
          ></div>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 ease-in-out"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABvFBMVEUAAABPT08AAAAAAABFRUX////+/v5RUVFLS0s/Pz9NTU3///8KCgpKSkr5+fn+/v7////////////////////////8/Pz///////9paWlXV1eWlpYQEBD7+/v///+6uroqKirX19eVlZWIiIhQUFAfHx/////19fX39/f////////////////////////n5+fZ2dnj4+O4uLiNjY09PT3///////////////////////////+zs7P///8VFRX///9HR0cxMTH////////////p6en////n5+fb29vq6urU1NTAwMCnp6d5eXlxcXFzc3NeXl5qamoeHh5BQUE4ODj////8/Pzt7e3a2trQ0ND///////+9vb3Pz8/GxsacnJyYmJiUlJSmpqZ2dnb////////////+/v7x8fH09PT///+5ubnU1NSsrKyhoaGJiYmcnJxaWlqRkZE4ODj////x8fHn5+f////////U1NTIyMj///+/v7+1tbWJiYn///+fn5////9BQUEyMjJgYGD////////s7Ozc3NzJycna2tq/v7+GhoZCQkIWFhb///////////////////8kNpXEAAAAk3RSTlNrawBnaPz6a2pmagZraPP8KRY59PIM9M+ti22La/PMnWu3hoCAawLx6+aomoZZGsrJxq+dawT2xLaxo5yciW5ra2toXAre1tXOzcajl5SQi4V0c2trTfbc1MXBvrSvpqShm4x5ZE9A7Onj1Lewq6aaj4aDeDjezsm9sqygoJ+cl5J/enZvQyLj1MC7tIt7Z04kIw15AUOJAAAFPElEQVRYw6XZd3/SQBgH8NBcEgKEQJiitIW2tBXpslRrl917L23VWq177733Hr837KnVEAOXEJ//+X6eu+dy44GrYIY3GMj1xGONYUEIN8biPblA0Mv+BcfStK0H5wUYQjj/YEvzOgG9gT2VYQokbzWnjnVPPX061X0s1XwrKQDhyj0Bb5ng0HI8BPhHj56YT0gehRBZJkTxSIn5E0dH/UAovjxUBpjPrQHi+KMaRSYelyE8RCY1j8ZFYC2XtwtqnQL8remErhnCTeREutUPoVOzBTZlQ1hJ1RC3WdPzdJOa1ApC2SZrULsDtTmtEJdFECXdrOKOZgFmts6goUrRx8rIkihVDTizlWGBkSfA6nXZZTPk66vAk0hpMLgb6r2XxGU7yMt7KnYHS4Gv15GcVNyuMsKtTCax/ro4GLyLaJVp9ixnsiqKu8FiYGQ3og8V6pUpKg+j2B0pAmZpfgyPIdIcs2awD+okcbschJtMquj7FzwdxkVWPdiVuYjwaSPYFENrgnoOxUQrYk2FYKYLDSeJy3GQkw3oyhSAN0WxSveciFWiqOmgdz+a9fE6G3Uz9nv/gjkhmib/B5J0VMj9ASP7kCKe/+EkyaWksC+yDS6r/hriHKPjXVzq/zxXry7/BjNxtBKnmbkPtlfX7fJxHMcfRjzzCwyExLTbmdbeX7eL2w5+TgwFfoF7MJ7wMD8td7GBupcoVhi+Mez5CQ5VoltmeAdPXjdVjOZWTTVj8HtROUTBmyF2SeSrZ+4niGGoi7pWCNbWh25ScACjiocF7gRu18j6WBerfbpiEA9hoILzHsBR2cUERdCT0PV7IunMUa4E2IYDXi54XjhBLEGI7+dlml17ndnRwVl1JMgFhOi8xxoEVneSRZodKxb8QoA7hXMJlx0Qyfu9PMeOVeS4ZxiX7IHAWK2F2IIeLo6Uxy6Ihg2ORfJH0MnFcEyxDUJ9d4NngJcR4xrRTeyDwPAMXxp8jEYujKmyQKx8WCgJTiPMAVdllifJHwUY4xJfCpwBrEDp4K4dRtC/0csxQKsht+/ijeDoDp5jDpldlCUfZwBXLtHFzSwKe9n0+zgD+GaaZ67DDcQYC1ty0X2qEBQmTIvQvLBZn141xxWCDZs+6ll+evrmYPYM4Fv6IVvFMAYN25fJ08GoXg2L7Ss4QjfYEp4ODs/q1WBvsCWOAKnfp4O0Gi8MHPMI+HlImQ/edh+ng+eumKrBOKQqNPMxKi0WbvUvPrE44zGq6Qe98fu1A5Q66OlV5LbxKuKuc8DpV5GKQIfxsiRVO/L4a2JH4BeYN17npCWfM5Be5/LFLpysCWSXRP1ScCXWrzd1nDPwAr0SF7m0S/0OvbmkMGh6VrBXDBts0Z8VNLTth4/zAW+KolbkaSa1O/RunEVX3vx4lNwOB+ybQKypyPPW47QibQifLvYAlx0u6Q3R/ACvyGSRnOKdbQpJZDNFmxj+47wD77i/eBOjIrgO/16+/Pz8WA8WbwR9W2PkyMhv7SujVSW2+fgyOF+byGhV0XnMAhPPedve8wkg+53V7sv3hXF2k+dtcfzmWYT78hYNyVeVUFvmKGnJzbWoqHxlo2Xa1YHkhVpKMrnaC0l0dDXZa+ruF1B/+FovNUtovdcO10PYr9ltO3sH9wHi2N5a3mzyNLm9YyKwb9BbRmM8cireAdQfaptd8FFkO+i2sjDbdqge6Iifijho3YcA1T/ccuTylemZmekrl4+0DPtVIFRm6143tYEDI/gnRg4MMP9csP77Y7CnM9YYAkKNsc6eQcu/P34ANod6sZ/pavoAAAAASUVORK5CYII="
            alt=""
            onClick={showModal}
          />
          <button
            onClick={() => {
              window.open("/booking");
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 py-3 px-5 bg-rose-600"
          >
            Mua vé
          </button>
        </div>
        <div className="text-left">
          <p className="text-gray-100 text-xl">{tenPhim.substr(0, 10)}</p>
          <p className="text-gray-600 text-sm">{moTa.substr(0, 25) + "..."}</p>
        </div>
      </div>
      <ModalMovie
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        video={trailer}
      />
    </div>
  );
}
