import { Tabs } from "antd";
import React from "react";

export default function Demo() {
  let array;
  return (
    <div className="bg-white container mx-auto py-10">
      <Tabs
        className="border-2 border-blue-500"
        tabPosition="left"
        defaultActiveKey="1"
        tabBarStyle={{ background: "red" }}
      >
        <Tabs.TabPane
          className="khang"
          tab={<p className="example">Haha</p>}
          key="1"
        >
          Content of Tab Pane 1
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
