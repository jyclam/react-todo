import React, { useState, useEffect, useReducer } from "react";
import { Layout, Divider, PageHeader } from "antd";

import MenuTaskList from "../components/MenuTaskList";
import Content from "../components/Content";
import NewListForm from "../components/NewListForm";
import {
  LIST_ACTIONS,
  listReducer,
  initialState as listInitialState,
} from "../reducers/ListReducer";
import {
  TASK_ACTIONS,
  taskReducer,
  initialState as taskInitialState,
} from "../reducers/TaskReducer";

import { useThunkReducer } from "../reducers/useThunkReducer";

import axios from "../utils/axios";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function ToDo() {
  const [listState, listDispatch] = useThunkReducer(
    listReducer,
    listInitialState,
  );
  const [taskState, taskDispatch] = useReducer(taskReducer, taskInitialState);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedListId, setSelectedListId] = useState("");

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    listDispatch(LIST_ACTIONS.FETCH_LIST);
  }, []);

  const listSelectionHandler = (key) => {
    setSelectedListId(key);
    fetchTasks(key);
  };

  const fetchTasks = (listId) => {
    taskDispatch({ type: TASK_ACTIONS.FETCHING });
    axios
      .get(`/api/task/?listId=${listId}`)
      .then(({ data }) => {
        taskDispatch({
          type: TASK_ACTIONS.RESPONSE_COMPLETE,
          payload: { tasks: data.data },
        });
      })
      .catch((error) => {
        console.error(error);
        taskDispatch({ type: TASK_ACTIONS.ERROR, payload: { error } });
      });
  };

  const listDeleteHandler = (id) => {
    axios
      .delete(`/api/list/${id}`)
      .then(() => {
        listDispatch({ type: LIST_ACTIONS.DELETE_LIST, payload: { id } });
      })
      .catch((error) =>
        listDispatch({ type: LIST_ACTIONS.ERROR, payload: { error } }),
      );
  };

  const togglePinHandler = (id, pinned) => {
    axios
      .put(`/api/list/${id}`, { pinned: !pinned })
      .then(({ data }) => {
        console.log(data);
        listDispatch({
          type: LIST_ACTIONS.EDIT_LIST,
          payload: { list: data.data },
        });
      })
      .catch((error) => {
        listDispatch({ type: LIST_ACTIONS.ERROR, payload: { error } });
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
        <NewListForm listDispatch={listDispatch} />
        <Divider />
        <MenuTaskList
          lists={listState.lists.filter((list) => list.pinned)}
          handleSelect={listSelectionHandler}
          togglePin={togglePinHandler}
          handleDelete={listDeleteHandler}
        />
        <Divider />
        <MenuTaskList
          lists={listState.lists.filter((list) => !list.pinned)}
          handleSelect={listSelectionHandler}
          togglePin={togglePinHandler}
          handleDelete={listDeleteHandler}
        />
      </Sider>
      <Content
        tasks={taskState.tasks}
        collapsed={collapsed}
        handleClick={collapseHandler}
        selectedListId={selectedListId}
        taskDispatch={taskDispatch}
        taskState={taskState}
      />
    </Layout>
  );
}

export default ToDo;
