import React, { useState } from "react";
import { Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

import axios from "../utils/axios";
import { TASK_ACTIONS } from "../reducers/TaskReducer";

const { Item } = AntdForm;

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    margin-bottom: 0;

    &:last-child {
      margin-bottom: 2rem;
    }
  }
`;

const initialState = {
  title: "",
  details: "",
  listId: "",
};

const Form = ({ selectedListId, taskDispatch }) => {
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  return (
    <StyledForm
      onFinish={(values) => {
        axios
          .post("/api/task", { ...values, listId: selectedListId })
          .then(({ data }) => {
            taskDispatch({
              type: TASK_ACTIONS.ADD_TASK,
              payload: { task: data.data },
            });
          })
          .catch((error) => {
            console.error(error);
            taskDispatch({
              type: TASK_ACTIONS.ERROR,
              payload: { error },
            });
          });
        clearForm();
      }}
    >
      <Item name="title">
        <Input placeholder="Task title" value={formState.title} />
      </Item>
      <Item name="details">
        <Input placeholder="Task details" value={formState.details} />
      </Item>
      <Item>
        <Button htmlType="submit">Submit</Button>
      </Item>
    </StyledForm>
  );
};

export default Form;
