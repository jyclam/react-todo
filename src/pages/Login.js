import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Form, Input, Button, Menu } from "antd";
import styled from "styled-components";
import axios from "axios";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled(Card)`
  width: 30rem;
  margin: auto;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: table;
  margin: 0 auto;
`;

const initialState = {
  email: "",
  password: "",
};

const BASE_URL = "http://localhost:5000/";

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState(initialState);

  const clearForm = () => {
    setFormState(initialState);
  };

  const handleFormSubmit = async (payload) => {
    try {
      const res = await axios.post(
        `${BASE_URL}${isLogin ? "signin" : "signup"}`,
        payload,
      );
      // need to refactor to HttpOnly cookie to avoid xss attacks
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error("Error with login / signup ", err);
    }
    clearForm();
    history.push("/");
  };

  return (
    <FlexContainer>
      <StyledCard>
        <StyledDiv>
          <Menu
            defaultSelectedKeys={["login"]}
            onSelect={({ key }) => setIsLogin(key === "login")}
            mode="horizontal"
            selectable
          >
            <Menu.Item key="login">Login</Menu.Item>
            <Menu.Item key="register">Register</Menu.Item>
          </Menu>
        </StyledDiv>
        <Form onFinish={handleFormSubmit}>
          <Form.Item name="email">
            <Input value={formState.email} placeholder="email" />
          </Form.Item>
          <Form.Item name="password">
            <Input
              value={formState.password}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form>
      </StyledCard>
    </FlexContainer>
  );
};

export default Login;
