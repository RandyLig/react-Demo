import React, { Component } from 'react';
import { render } from "react-dom";
import Header from '../myTrack/header'
import Advice from './advice'
import { Rate, Tabs, Icon } from 'antd'
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
export default class Help extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 5,
            count: null,
        }
        this.handleChange = (value) => {
            this.setState({ value });
        }
        this.handleLike = (e) => {
            e.target.style = {
                "color": "#108ee9",
                "fontSize": "30px"
            }
        }
    }

    render() {
        const { value } = this.state;
        return <div>
            <Header headerText="帮助与反馈"></Header>
            <div className="rate">
                <p>对我们产品的评价：</p><Rate onChange={this.handleChange} value={value} />
                {value && <span className="ant-rate-text">{value} stars</span>}
                <div className="rate-like">你还可以为我们点赞: <Icon type="like-o" className="rate-like-icon" onClick={this.handleLike}></Icon></div>
                <Tabs defaultActiveKey="1" onChange={callback} className="tabs">
                    <TabPane tab="交通路况" key="1">这里放绿黄红交通状况</TabPane>
                    <TabPane tab="图标图例" key="2">这里放地图上图标代表的意义</TabPane>
                </Tabs>
            </div>
            <Advice></Advice>
        </div>;
    }
}