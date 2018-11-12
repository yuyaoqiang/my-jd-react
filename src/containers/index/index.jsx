import React from "react";
import IndexHeader from "../header/indexHeader";
import NavBar from "../navBar/navBar";
import Banner from "../../components/banner/banner";
import Main from "../main/main";
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <IndexHeader />
        <Banner />
        <Main />
        <NavBar />
      </div>
    );
  }
}
