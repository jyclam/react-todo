import React, { useState } from "react";
import { Collapse } from "antd";
import styled from "styled-components";

import { ReactComponent as UncheckedIcon } from "../assets/icons/check_box_empty.svg";
import { ReactComponent as CheckedIcon } from "../assets/icons/check_box_checked.svg";

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  font-size: 1.5rem;
`;

const StyledSpan = styled.span`
  vertical-align: middle;
  display: inline-block;
`;

const SvgContainer = styled(StyledSpan)`
  width: 3rem;
  height: 3rem;
`;

const StyledDiv = styled.div`
  width: 100%;
`;

const { Panel } = Collapse;

const Task = ({ title, completed, details, dueDate, ...props }) => {
  const [done, setDone] = useState(completed);

  const handleClick = (e) => {
    e.stopPropagation();
    setDone(!done);
  };

  return (
    <Panel
      {...props} // must spread props due to antd design https://github.com/ant-design/ant-design/issues/4853
      showArrow={false}
      key="1"
      header={
        <Header>
          <SvgContainer
            style={{
              width: "3rem",
              height: "3rem",
            }}
          >
            {done ? (
              <Svg as={CheckedIcon} onClick={handleClick} />
            ) : (
              <Svg as={UncheckedIcon} onClick={handleClick} />
            )}
          </SvgContainer>
          <StyledSpan className={done ? "strikethrough" : ""}>
            {title}
          </StyledSpan>
        </Header>
      }
    >
      <StyledDiv>{details}</StyledDiv>
      <StyledDiv>Due date: {`${dueDate}`}</StyledDiv>
    </Panel>
  );
};

export default Task;
