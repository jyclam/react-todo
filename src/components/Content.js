import React, { useState } from "react";
import { Layout, Collapse, PageHeader } from "antd";
import styled from "styled-components";

import Task from "./Task";
import { SvgWrapper, SvgContainer, SvgIcon } from "./StyledSvg";

import { ReactComponent as MenuOpenIcon } from "../assets/icons/menu_open.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

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

const Header = styled(PageHeader)`
  padding: 1.3rem;
`;

const Content = ({ handleClick, collapsed }) => {
  return (
    <AntdContent>
      <Header
        title={
          <SvgWrapper>
            <SvgContainer className="trigger" onClick={handleClick}>
              {collapsed ? (
                <SvgIcon as={MenuIcon} />
              ) : (
                <SvgIcon as={MenuOpenIcon} />
              )}
            </SvgContainer>
          </SvgWrapper>
        }
      />
      <Collapse>
        {tasks.map((task) => (
          <Task key={task._id} {...task} />
        ))}
      </Collapse>
    </AntdContent>
  );
};

export default Content;
