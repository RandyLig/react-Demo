import React, { Component } from 'react';
import { render } from "react-dom";
import { Popover, Button } from 'antd'
export default class School extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,

        }
        this.hide = () => {
            this.setState({
                visible: false
            })
        }

        this.handleVisibleChange = (visible) => {
            this.setState({ visible })
        }
    }

    render() {
        return <Popover
            content={<a onClick={this.hide}>Close</a>}
            title={this.props.ind}
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}>
            <div className="school">
                <div>
                    <img alt="" src={this.props.schoolUrl} />
                </div>
                <div>
                    <p>该校是：{this.props.schoolName}</p>
                    <p>距离您<span>{this.props.schoolDist}</span>公里</p>
                </div>
            </div>
        </Popover>
    }
}