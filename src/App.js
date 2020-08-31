import React from "react";
import { Layout } from "antd";

import MenuTaskList from "./components/MenuTaskList";
import Content from "./components/Content";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function App() {
  return (
    <Layout style={layoutStyles}>
      <Sider
        collapsible
        collapsedWidth="0"
        zeroWidthTriggerStyle={triggerStyles}
      >
        <MenuTaskList />
      </Sider>
      <Content />
    </Layout>
  );
}

export default App;
