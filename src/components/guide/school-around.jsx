import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon } from 'antd'
import { browserHistory } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
export default class SchoolAround extends React.Component {
    handleRoute(event) {
        event.preventDefault()
        const path = `/around-school`
        history.push(path)
    }
    render() {
        return <div className="school-around">
            <div onClick={this.handleRoute}>
                <Icon type="environment" className="environment"></Icon>
                <p>周边高校</p>
            </div>
        </div>;
    }
}