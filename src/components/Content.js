import React, { useState } from "react";
import { Layout, Collapse } from "antd";

import Task from "./Task";

const { Content: AntdContent } = Layout;

const tasks = [
  {
    _id: "01",
    title: "Task 1",
    completed: false,
    dueDate: new Date(),
    details: "Task 1 details",
  },
  {
    _id: "02",
    title: "Task 2",
    completed: false,
    dueDate: new Date(),
    details: "Task 2 details",
  },
  {
    _id: "03",
    title: "Task 3",
    completed: false,
    dueDate: new Date(),
    details: "Task 3 details",
  },
  {
    _id: "04",
    title: "Task 4",
    completed: false,
    dueDate: new Date(),
    details: "Task 4 details",
  },
  {
    _id: "054",
    title: "Task 5",
    completed: false,
    dueDate: new Date(),
    details: "Task 5 details",
  },
  {
    _id: "06",
    title: "Task 6",
    completed: false,
    dueDate: new Date(),
    details: "Task 6 details",
  },
];

const Content = () => {
  return (
    <AntdContent>
      <Collapse>
        {tasks.map((task) => (
          <Task {...task} />
        ))}
      </Collapse>
    </AntdContent>
  );
};

export default Content;
