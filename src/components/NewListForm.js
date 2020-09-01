import React, { useState } from "react";
import { Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

import axios from "../utils/axios";

const { Item } = AntdForm;

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    margin-bottom: 0;
  }
`;

const initialState = {
  name: "",
};

const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  const handleSubmit = (values) => {
    // axios POST /api/list
    // FETCHING
    console.log(values);

    axios
      .post("/api/list", values)
      .then(({ data }) => {
        // RESPONSE_COMPLETE
        console.log(data.data);
      })
      .catch((error) => {
        console.error(error);
        // ERROR
      });
  };

  return (
    <StyledForm
      onFinish={(values) => {
        // POST /api/list
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
