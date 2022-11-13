import { Modal } from "antd";
import React from "react";
import ReactPlayer from "react-player";

export default function ModalMovie({ isModalOpen, handleCancel, video }) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      width={1000}
      footer={null}
      bodyStyle={{ background: "gray" }}
    >
      <ReactPlayer url={video} />
    </Modal>
  );
}
