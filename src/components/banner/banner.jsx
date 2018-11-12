import React from "react";
import Swiper from "swiper/dist/js/swiper";
import "swiper/dist/css/swiper.min.css";
import "./banner.scss";

import img1 from "../../assets/images/banner-1.jpg";
import img2 from "../../assets/images/banner-2.jpg";
import img3 from "../../assets/images/banner-3.jpg";
export default class Banner extends React.Component {
  componentDidMount() {
    new Swiper(this.swiperID, {
      loop: true, // 循环模式选项
      pagination: {
        el: this.paginateID
      }
    });
  }
  render() {
    return (
      <section
        className="swiper-container"
        ref={self => (this.swiperID = self)}
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={img1} />
          </div>
          <div className="swiper-slide">
            <img src={img2} />
          </div>
          <div className="swiper-slide">
            <img src={img3} />
          </div>
        </div>
        <div
          className="swiper-pagination banner-pagination"
          ref={self => (this.paginateID = self)}
        />
      </section>
    );
  }
}
