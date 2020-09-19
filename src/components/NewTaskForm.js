import React, { useState } from "react";
import { Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

import axios from "../utils/axios";

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

const Form = ({ selectedListId }) => {
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  return (
    <StyledForm
      onFinish={(values) => {
        // axios POST /api/task
        // FETCHING
        axios
          .post("/api/task", { ...values, listId: selectedListId })
          .then((response) => {
            // RESPONSE_COMPLETE
            console.log(response);
            // dispatch
          })
          .catch((error) => {
            console.error(error);
            // ERROR
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
