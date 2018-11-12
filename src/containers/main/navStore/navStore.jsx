import React from "react";
import "./navStore.scss";

import link1 from "../../../assets/images/navStores/link-1.png.webp";
import link2 from "../../../assets/images/navStores/link-2.png.webp";
import link3 from "../../../assets/images/navStores/link-3.png.webp";
import link4 from "../../../assets/images/navStores/link-4.png.webp";
import link5 from "../../../assets/images/navStores/link-5.png.webp";
import link6 from "../../../assets/images/navStores/link-6.png.webp";
import link7 from "../../../assets/images/navStores/link-7.png.webp";
import link8 from "../../../assets/images/navStores/link-8.png.webp";
import link9 from "../../../assets/images/navStores/link-9.png.webp";
import link10 from "../../../assets/images/navStores/link-10.png.webp";
export default class NavStore extends React.Component {
  render() {
    return (
      <div className="nav-store">
        <div className="nav-store-wrap">
          <div className="store-item">
            <img className="item-icon" src={link1} />
            <span className="item-title">京东超市</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link2} />
            <span className="item-title">全球购</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link3} />
            <span className="item-title">京东时尚</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link4} />
            <span className="item-title">京东生鲜</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link5} />
            <span className="item-title">排行榜</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link6} />
            <span className="item-title">充值缴费</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link7} />
            <span className="item-title">9.9元拼</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link8} />
            <span className="item-title">领券</span>
          </div>
          <div className="store-item">
            <img className="item-icon" src={link9} />
            <span className="item-title">赚钱</span>
          </div>
          <div className="store-item">
            <img className="item-icon " src={link10} />
            <span className="item-title">全部</span>
          </div>
        </div>
      </div>
    );
  }
}
