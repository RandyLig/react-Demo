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
    render() {
        return <div className="menu">
             <Badge dot className="avatar" ><Avatar onClick={this.toggleCollapsed} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
            >
                <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span onClick={this.handleRoute}>我的足迹</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>我的行程</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                </Menu.Item>
                <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="4">Option 9</Menu.Item>
                    <Menu.Item key="5">Option 10</Menu.Item>
                    <SubMenu key="sub2" title="Submenu">
                        <Menu.Item key="6">Option 11</Menu.Item>
                        <Menu.Item key="7">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </div>;
    }
}