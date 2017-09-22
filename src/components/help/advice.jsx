import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon, Button, Tabs  } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
export default class Advice extends React.Component {
    render() {
        return <div className="advice">
            <Button size="large" style={{ "marginTop": "10px" }}><Icon type="message" style={{ "fontSize": "18px" }}></Icon>产品建议</Button>
        </div>;
    }
}