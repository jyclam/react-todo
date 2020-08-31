import React from "react";
import { Menu } from "antd";
import styled from "styled-components";

import { SvgWrapper, SvgContainer, SvgIcon } from "./StyledSvg";

import { ReactComponent as PushPinIcon } from "../assets/icons/push_pin.svg";

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
    title: "task list 4 really long name ",
    pinned: false,
    archived: false,
    lastUpdated: "date",
  },
];

const StyledSvgIcon = styled(SvgIcon)`
  fill: ${(prop) => (prop.pinned ? "black" : "none")};
  stroke: black;
  stroke-linejoin: "round";
  stroke-width: 0.2rem;
`;

const Title = styled.span`
  width: 140px;
  vertical-align: middle;
  display: inline-block;
  overflow: scroll;
`;

const MenuTaskList = ({ handleClick }) => {
  return (
    <Menu selectable={false} theme="light" defaultSelectedKeys={["4"]}>
      {TASK_LISTS.map((list) => (
        <Menu.Item key={list._id}>
          <SvgWrapper>
            <Title>{list.title}</Title>
            <SvgContainer height={"2rem"} width={"2rem"}>
              <StyledSvgIcon
                as={PushPinIcon}
                pinned={list.pinned}
                data-id={list._id}
                onClick={handleClick}
              />
            </SvgContainer>
          </SvgWrapper>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuTaskList;
