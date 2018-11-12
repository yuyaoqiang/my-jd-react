import React from "react";
import "./notice.scss";
const notice = props => {
  return (
    <div className="notice-wrap">
      <a href="" className="notice-icon" />
      <div className="notice-main">
        <ul>
          <li>
            <span>热门</span>
            曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
            如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
          </li>
        </ul>
      </div>
      <a href="" className="notice-more">
        更多
      </a>
    </div>
  );
};
export default notice;
