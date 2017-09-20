import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon } from 'antd'
export default class SchoolAround extends React.Component {
    render() {
        return <div className="school-around">
            <div>
                <Icon type="environment" className="environment"></Icon>
                <p>周边高校</p>
            </div>
        </div>;
    }
}