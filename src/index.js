import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { WingBlank, NavBar, Icon, Flex } from "antd-mobile";
import "lib-flexible";

import reportWebVitals from "./reportWebVitals";

import configureAppStore from "./store";

import routes from "./router";

import "./index.less";

/**
 * StrictMode 是一个用来检查项目中潜在问题的工具, 不会渲染任何可见的 UI。
 * 它为其后代元素触发额外的检查和警告。
 * 严格模式检查仅在开发模式下运行；它们不会影响生产构建。
 * */

const store = configureAppStore();
const FlexItem = Flex.Item;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Flex className="main" direction="column" justify="between">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log("onLeftClick")}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
            className="nav"
          ></NavBar>
          <FlexItem>
            <WingBlank>
              <div className="main_page_box">
                <Switch>
                  {routes.map(({ path, component, ...routes }) => {
                    return (
                      <Route
                        key={path}
                        path={path}
                        component={component}
                        {...routes}
                      />
                    );
                  })}
                </Switch>
              </div>
            </WingBlank>
          </FlexItem>
          <NavBar
            mode="dark"
            leftContent="Back"
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
            className="nav"
          >
            NavBar
          </NavBar>
        </Flex>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
