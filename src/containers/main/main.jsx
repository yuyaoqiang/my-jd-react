import React from "react";
import SubMainView from "../../components/subMainView/subMainView";
import NavStore from "./navStore/navStore";
import Notice from "./notice/notice";
import Graphic from "./graphic/graphic";
import NavBar from "../navBar/navBar";
import "./main.scss";
export default class Content extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <SubMainView />
        <NavStore />
        <Notice />
        <Graphic />
        <NavBar />
      </div>
    );
  }
}
