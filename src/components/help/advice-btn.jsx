import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon, Button, Tabs  } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
export default class AdviceBtn extends React.Component {
    handleAdvice(event) {
        event.preventDefault()
        const path = `/myAdvice`
        location.assign(`/myAdvice`)
        console.log(location.pathname)
    }
    render() {
        return <div className="advice">
            <Button size="large" style={{ "marginTop": "10px" }} onClick={this.handleAdvice}><Icon type="message" style={{ "fontSize": "18px" }}></Icon>产品建议</Button>
            <a style={{ "marginTop": "16px","color": "#393E46" ,"position":"absolute","right":"16px"}}>我的反馈</a>
        </div>;
    }
}