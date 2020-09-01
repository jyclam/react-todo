import React, { useState, useEffect } from "react";
import { Layout, Divider, PageHeader } from "antd";

import MenuTaskList from "../components/MenuTaskList";
import Content from "../components/Content";
import Form from "../components/NewListForm";
import {
  fetchLists,
  LIST_ACTIONS,
  useThunkReducer,
  listReducer,
  initialState,
} from "../Context/ListContext";

import axios from "../utils/axios";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function ToDo() {
  const [state, dispatch] = useThunkReducer(listReducer, initialState);
  const [collapsed, setCollapsed] = useState(false);
  const [tasks, setTasks] = useState([]);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(fetchLists);
  }, []);

  const listSelectionHandler = (e) => {
    console.log(e.target.dataset.id);

    // fetch GET /api/task/?listId=${e.target.dataset.id}
    fetchTasks(e.target.dataset.id);
  };

  const fetchTasks = (listId) => {
    // FETCHING
    axios
      .get(`/api/task/?listId=${listId}`)
      .then(({ data }) => {
        console.log(data.data);
        setTasks(data.data);
        // RESPONSE_COMPLETE
      })
      .catch((error) => {
        console.error(error);
        // ERROR
      });
  };

  return (
    <Layout style={layoutStyles}>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        zeroWidthTriggerStyle={triggerStyles}
      >
        <PageHeader title="To Do" />
        <Form />
        <Divider />
        <MenuTaskList lists={state.lists} handleClick={listSelectionHandler} />
        <Divider />
        <MenuTaskList lists={state.lists} handleClick={listSelectionHandler} />
      </Sider>
      <Content
        tasks={tasks}
        collapsed={collapsed}
        handleClick={collapseHandler}
      />
    </Layout>
  );
}

export default ToDo;
