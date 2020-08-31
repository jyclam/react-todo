import React, { useState } from "react";
import { Form as AntdForm, Input, Button } from "antd";
import styled from "styled-components";

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
};

const Form = () => {
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  return (
    <StyledForm
      onFinish={() => {
        // axios POST /api/task
        clearForm();
      }}
    >
      <Item name="title">
        <Input placeholder="title" value={formState.title} />
      </Item>
      <Item name="details">
        <Input placeholder="details" value={formState.details} />
      </Item>
      <Item>
        <Button htmlType="submit">Submit</Button>
      </Item>
    </StyledForm>
  );
};

export default Form;
