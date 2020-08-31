import React, { useState } from "react";
import { Layout } from "antd";

import SideMenu from "./components/Menu";
import Content from "./components/Content";

const { Sider } = Layout;

const layoutStyles = { height: "100vh" };
const triggerStyles = { top: "60%" };

function App() {
  const [collapse, setCollapse] = useState(true);

  return (
    <Layout style={layoutStyles}>
      <Sider
        onClick={() => setCollapse(!collapse)}
        collapsible
        collapsed={collapse}
        collapsedWidth="0"
        width="100"
        zeroWidthTriggerStyle={triggerStyles}
      >
        <SideMenu />
      </Sider>
      <Content />
    </Layout>
  );
}

export default App;
