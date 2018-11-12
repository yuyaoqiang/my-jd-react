import React from 'react';
import "./indexHeader.scss"
export default class IndexHeader extends React.Component{
    render(){
        return (
        <header>
            <div className="header-wrap">
                <div className="header-left-wrap iconfont icon-list">
                </div>
                <div className="header-content-wrap">
                    <i className="header-cotent-jd-icon iconfont icon-jingdong" ></i>
                    <i className="header-cotent-sreach-icon iconfont icon-search"></i>
                    <a className="header-input-wrap">京品百货 每满199减100</a>
                </div>
                <div className="header-rigth-wrap">
                    登录
                </div>
            </div>
        </header>
        )
    }
}