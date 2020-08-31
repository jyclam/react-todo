import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

const TASK_LISTS = [
  {
    _id: "001",
    title: "task list 1",
    pinned: false,
    archived: false,
    lastUpdated: "date",
  },
  {
    _id: "002",
    title: "task list 2",
    pinned: false,
    archived: false,
    lastUpdated: "date",
  },
  {
    _id: "003",
    title: "task list 3",
    pinned: false,
    archived: false,
    lastUpdated: "date",
  },
  {
    _id: "004",
    title: "task list 4",
    pinned: false,
    archived: false,
    lastUpdated: "date",
  },
];
const MenuTaskList = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
      {TASK_LISTS.map((list) => (
        <Menu.Item key={list._id}>{list.title}</Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuTaskList;
