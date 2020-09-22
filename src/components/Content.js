import React from "react";
import { Layout, Collapse, PageHeader } from "antd";
import styled from "styled-components";

import Task from "./Task";
import { SvgWrapper, SvgContainer, SvgIcon } from "./StyledSvg";
import NewTaskForm from "./NewTaskForm";

import { ReactComponent as MenuOpenIcon } from "../assets/icons/menu_open.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

const { Content: AntdContent } = Layout;

const Header = styled(PageHeader)`
  padding: 1.3rem;
`;

const Content = ({
  tasks,
  handleClick,
  collapsed,
  selectedListId,
  taskDispatch,
  taskState,
}) => {
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
      {taskState.error && <div>{taskState.error.message}</div>}
      <NewTaskForm
        taskDispatch={taskDispatch}
        selectedListId={selectedListId}
        taskState={taskState}
      />
      {taskState.loading ? (
        "loading"
      ) : (
        <Collapse>
          {tasks.map((task) => (
            <Task key={task._id} {...task} />
          ))}
        </Collapse>
      )}
    </AntdContent>
  );
};

export default Content;
