import React, { useState, useEffect } from "react";
import { Layout, Divider, PageHeader } from "antd";

import MenuTaskList from "../components/MenuTaskList";
import Content from "../components/Content";
import NewListForm from "../components/NewListForm";
import {
  LIST_ACTIONS,
  listReducer,
  initialState,
} from "../reducers/ListReducer";

import { useThunkReducer } from "../reducers/useThunkReducer";

import axios from "../utils/axios";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function ToDo() {
  const [state, dispatch] = useThunkReducer(listReducer, initialState);
  const [collapsed, setCollapsed] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedListId, setSelectedListId] = useState("");

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(LIST_ACTIONS.FETCH_LIST);
  }, []);

  const listSelectionHandler = (key) => {
    setSelectedListId(key);
    fetchTasks(key);
  };

  const fetchTasks = (listId) => {
    // FETCHING
    axios
      .get(`/api/task/?listId=${listId}`)
      .then(({ data }) => {
        setTasks(data.data);
        // RESPONSE_COMPLETE
      })
      .catch((error) => {
        console.error(error);
        // ERROR
      });
  };

  const listDeleteHandler = (id) => {
    axios.delete(`/api/list/${id}`);
    dispatch({ type: "DELETE_LIST", payload: { id } });
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
        <NewListForm listDispatch={dispatch} />
        <Divider />
        <MenuTaskList
          lists={state.lists}
          handleSelect={listSelectionHandler}
          handlePin={(id) => {
            console.log("pinning: ", id);
          }}
          handleDelete={listDeleteHandler}
        />
        <Divider />
        {/* <MenuTaskList lists={state.lists} handleClick={listSelectionHandler} /> */}
      </Sider>
      <Content
        tasks={tasks}
        collapsed={collapsed}
        handleClick={collapseHandler}
        selectedListId={selectedListId}
      />
    </Layout>
  );
}

export default ToDo;
