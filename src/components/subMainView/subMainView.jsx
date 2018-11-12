import React from "react";
import "./subMainView.scss";
import mainGif from "../../assets/images/sub-main-lint.gif";
const subMainView = props => {
  return (
    <div className="sub-main-wrap">
      <img src={mainGif} alt="双11主会场" />
    </div>
  );
};
export default subMainView;
