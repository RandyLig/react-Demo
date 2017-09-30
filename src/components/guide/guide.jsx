import React, { Component } from 'react';
import { render } from "react-dom";
import GuideHeader from './guide-header'
import SchoolAround from './school-around'
import MenuLeft from '../menu/menu'
import GuideContent from "./guide-content"
import Loading from '../loading'
import { Spin } from 'antd'  // <Spin tip="Loading" className="loading"></Spin>
export default class Guide extends React.Component {
    constructor(props) {
        super(props)
        console.log(location.pathname);
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        console.log(111111111);
    }
    componentWillMount() {
        { this.state.loaded ? <Loading></Loading> : null }
    }

    render() {
        return <div className="guide">
            <Loading></Loading>
            <GuideHeader></GuideHeader>
            <SchoolAround></SchoolAround>
            <MenuLeft></MenuLeft>
            <GuideContent>
            </GuideContent>
        </div>;
    }
}