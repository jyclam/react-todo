import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import styled from "styled-components";

// import {
//   fetchLists,
//   LIST_ACTIONS,
//   useThunkReducer,
//   listReducer,
//   initialState,
// } from "../Context/ListContext";

import { SvgWrapper, SvgContainer, SvgIcon } from "./StyledSvg";
import { ReactComponent as PushPinIcon } from "../assets/icons/push_pin.svg";
import { ReactComponent as DeleteBinIcon } from "../assets/icons/delete_bin.svg";

const StyledSvgIcon = styled(SvgIcon)`
  fill: ${(prop) => (prop.pinned ? "black" : "none")};
  stroke: black;
  stroke-linejoin: "round";
  stroke-width: 0.1rem;
`;

const Title = styled.span`
  width: 140px;
  vertical-align: middle;
  display: inline-block;
  overflow: scroll;
`;

const MenuTaskList = ({ lists = [], handlePin, handleDelete }) => {
  return (
    <>
      <Menu selectable={false} theme="light" defaultSelectedKeys={["4"]}>
        {lists.map((list) => (
          <Menu.Item key={list._id}>
            <SvgWrapper>
              <Title>{list.name}</Title>
              <SvgContainer height={"2rem"} width={"2rem"}>
                <StyledSvgIcon
                  as={PushPinIcon}
                  pinned={list.pinned}
                  data-id={list._id}
                  onClick={handlePin}
                />
                <StyledSvgIcon
                  as={DeleteBinIcon}
                  data-id={list._id}
                  onClick={handleDelete}
                />
              </SvgContainer>
            </SvgWrapper>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};

export default MenuTaskList;
