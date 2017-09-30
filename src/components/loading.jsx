import React, { Component } from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom'
import { Icon } from 'antd'
export default class Loading extends React.Component {
    componentDidMount() {
        var self = this;
        console.log(self.refs.loading);
        setTimeout(function () {
            self.refs.loading.style.display = "none"
        }, 2000);
    }
    render() {
        return <div className="loading" ref="loading">
            <Icon type="loading" className="loading-icon"></Icon>
        </div>;
    }
}