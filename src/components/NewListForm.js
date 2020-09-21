import React, { useState } from "react";
import { Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

import axios from "../utils/axios";
import { LIST_ACTIONS } from "../reducers/ListReducer";

const { Item } = AntdForm;

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    margin-bottom: 0;
  }
`;

const initialState = {
  name: "",
};

const Form = ({ listDispatch }) => {
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  const handleSubmit = (values) => {
    axios
      .post("/api/list", values)
      .then(({ data }) => {
        listDispatch({
          type: LIST_ACTIONS.ADD_LIST,
          payload: { list: data.data },
        });
      })
      .catch((error) => {
        listDispatch({ type: LIST_ACTIONS.ERROR, payload: { error } });
      });
  };

  return (
    <StyledForm
      onFinish={(values) => {
        handleSubmit(values);
        clearForm();
      }}
    >
      <Item name="name">
        <Input placeholder="Create a new task list" value={formState.title} />
      </Item>
      <Item>
        <Button htmlType="submit">Submit</Button>
      </Item>
    </StyledForm>
  );
};

export default Form;
