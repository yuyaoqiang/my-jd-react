import React from "react";
import "./logoin.scss";
import qq from "../../assets/images/other/qq.png";
import wx from "../../assets/images/other/wx.png";
export default class Logoin extends React.Component {
  render() {
    return (
      <div className="logoin-wrap">
        <div className="logoin-header clearfix">
          <span className="header-left iconfont icon-back" />
          <span className="header-content ">京东登录</span>
          <span className="header-rigth " />
        </div>
        <div className="logoin-continar">
          <div className="continar-user">
            <input type="text" placeholder="用户名/邮箱/已验证手机" />
          </div>
          <div className="continar-pwd">
            <input type="text" placeholder="请输入密码" />
          </div>
          <div className="continar-button">
            <a className="logoin-button">登录</a>
            <a className="logoin-frist-button">一键登录</a>
          </div>
        </div>
        <div className="register-link clearfix">
          <span className="msg-logo">短信验证登录</span>
          <span className="register-ipone">手机快速注册</span>
        </div>
        <div className="other-logoin-wrap">
          <div className="logoin-type">
            <h4>其他登录方式</h4>
            <a href="">
              <img className="icon" src={qq} />
              <span>QQ</span>
            </a>
            <a href="">
              <img className="icon" src={wx} />
              <span>微信</span>
            </a>
          </div>
        </div>
        <div className="agreement-tips">
          <p>
            登录即代表您已同意<a>京东隐私政策</a>
          </p>
        </div>
      </div>
    );
  }
}
