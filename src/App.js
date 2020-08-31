import React, { useState } from "react";
import { Layout, Divider, PageHeader } from "antd";

import MenuTaskList from "./components/MenuTaskList";
import Content from "./components/Content";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  const listSelectionHandler = (e) => {
    console.log(e.target.dataset.id);
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
        <Divider />
        <MenuTaskList handleClick={listSelectionHandler} />
        <Divider />
        <MenuTaskList handleClick={listSelectionHandler} />
      </Sider>
      <Content collapsed={collapsed} handleClick={collapseHandler} />
    </Layout>
  );
}

export default App;
