import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { Icon } from 'antd'
import { Link } from 'react-router'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
export default class Header2 extends React.Component {
    handleBack(event) {
        event.preventDefault()
        console.log("test")
        history.go(-1)
    }
    render() {
        return <div className="header">
            <Icon type="left" style={{ "fontSize": "18px", "color": "#393E46" }} className="header-left-circle" onClick={this.handleBack}></Icon>
            <Icon type={this.props.icon} style={{ "fontSize": "18px", "color": "#fff" }} className="topbar-icon"></Icon>
            <span>{this.props.headerText}</span>
        </div>;
    }
}
