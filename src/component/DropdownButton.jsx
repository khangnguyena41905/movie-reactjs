import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, message } from "antd";
import React from "react";

export default function DropdownButton({
  name = "name",
  classNameInput = "",
  classNameItems = "",
  classNameContainer = "",
  items = [],
  onClick = (e) => {
    // console.log("key", e);
  },
}) {
  if (items.length == 0) {
    items = [{ label: "", key: "" }];
  }
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  const menu = (
    <Menu onClick={onClick}>
      {items.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <p className={classNameItems}>{item.label}</p>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div className={`flex justify-center items-center ${classNameContainer}`}>
        <span className={` grow cursor-pointer ${classNameInput}`}>{name}</span>
        <span className="w-1/5 cursor-pointer">
          <DownOutlined />
        </span>
      </div>
    </Dropdown>
  );
}
