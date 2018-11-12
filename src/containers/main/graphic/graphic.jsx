import React from "react";
import "./graphic.scss";
import delivery from "../../../assets/images/other/delivery.jpg";
import lottery from "../../../assets/images/other/lottery.jpg";
import voucher from "../../../assets/images/other/voucher.jpg";
const graphic = props => {
  return (
    <div className="graphic-wrap">
      <div className="item1">
        <img src={lottery} alt="p1" />
      </div>
      <div className="item2">
        <img src={delivery} alt="p1" />
      </div>
      <div className="item3">
        <img src={voucher} alt="p1" />
      </div>
    </div>
  );
};
export default graphic;
