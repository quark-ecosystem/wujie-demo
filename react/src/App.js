import React, { useEffect } from "react";
import { NavLink, Route, Switch, Redirect, useLocation } from "react-router-dom";
import Dialog from "./Dialog";
import Location from "./Location";
import Communication from "./Communication";
import React17 from "./nest";
import Font from "./Font";
import logo from "./logo.svg";
import Tag from "antd/es/tag";
import Button from "antd/es/button";
import "antd/es/tag/style/css";
import "antd/es/button/style/css";
import "antd/es/modal/style/css";
import "antd/es/select/style/css";
import "antd/es/popover/style/css";

const Home = () => (
  <div>
    <h2 className="css-before-flag">react 示例</h2>
  </div>
);

export default function App() {
  // 在 react16-sub 路由下主动告知主应用路由跳转，主应用也跳到相应路由高亮菜单栏
  const location = useLocation()
  useEffect(() => {
    window.$wujie?.bus.$emit('sub-route-change', "react16", location.pathname)
  }, [location])

  return (
    <div>
      

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="css-before-flag">react 示例</h2>
      </div>

      {/* <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">ls
          <Redirect to="/home" />
        </Route>
      </Switch> */}
    </div>
  );
}
