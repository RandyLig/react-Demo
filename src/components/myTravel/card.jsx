import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop, Modal, Button, DatePicker, Input, Card } from 'antd'

export default class Cards extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <Card style={{ 'width': '100%' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-title">
                    <h1>{this.props.title}</h1><span>{this.props.time}</span>
                </div>
                <div className="custom-card">
                    <p>{this.props.content}</p>
                </div>
            </Card>
        </div>;
    }
}