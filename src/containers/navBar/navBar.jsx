import React from "react";
import "./narBar.scss";
import welfare from "../../assets/images/other/welfare.png";
export default class NavBer extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-item">
          <p className="narbar-icon iconfont icon-homefill" />
          <p className="narber-title">首页</p>
        </div>
        <div className="nav-item">
          <p className="narbar-icon iconfont icon-search" />
          <p className="narber-title">分类</p>
        </div>
        <div className="nav-item item-welfare">
          {/* <p className="narbar-icon iconfont icon-homefill" /> */}
          {/* <p className="narber-title">福利</p> */}
          <img src={welfare} />
        </div>
        <div className="nav-item">
          <p className="narbar-icon iconfont icon-goods" />
          <p className="narber-title">购物车</p>
        </div>
        <div className="nav-item">
          <p className="narbar-icon iconfont icon-friend" />
          <p className="narber-title">未登录</p>
        </div>
      </div>
    );
  }
}
