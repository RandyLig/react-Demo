import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon } from 'antd'
export default class Loading extends React.Component {
    render() {
        return <div className="loading">
            <Icon type="loading" className="loading-icon"></Icon>
        </div>;
    }
}