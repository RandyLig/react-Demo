import React, { Component } from 'react';
import { render } from "react-dom";
import { Menu, Icon, Button,Avatar, Badge } from 'antd';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const SubMenu = Menu.SubMenu;
export default class MenuLeft extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: true,
        }
        this.toggleCollapsed = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }
    }
     handleRoute(event) {
        event.preventDefault()
        const path = `/myTrack`
        history.push(path)
    }
     handleTravel(event) {
        event.preventDefault()
        const path = `/myTravel`
        history.push(path)
    }
    handleHelp(event) {
        event.preventDefault()
        const path = `/myHelp`
        history.push(path)
    }
    handleAbout(event) {
        event.preventDefault()
        const path = `/About`
        history.push(path)
    }
    render() {
        return <div className="menu">
             <Badge dot className="avatar" ><Avatar onClick={this.toggleCollapsed} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
                style={{ "borderRadius": "5px","marginTop":"80px"}}
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span onClick={this.handleRoute}>我的足迹</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span onClick={this.handleTravel}>我的行程</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>我的收藏</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>设置</span></span>}>
                    <Menu.Item key="4">功能介绍</Menu.Item>
                    <Menu.Item key="5"><span onClick={this.handleHelp}>帮助与反馈</span></Menu.Item>
                    <Menu.Item key="6"><span onClick={this.handleAbout}>关于</span></Menu.Item>
                </SubMenu>
            </Menu>
        </div>;
    }
}