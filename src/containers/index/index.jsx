import React from "react";
import IndexHeader from "../header/indexHeader";
import NavBar from "../navBar/navBar";
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <div>我是首页</div>
        <NavBar/>
      </div>
    );
  }
}
