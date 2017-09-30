import { Card } from 'antd'; // loading 可以优化体验 {...this.state.loaded? '': 'loading'}
import React, {Component} from 'react';
import {render} from "react-dom";
export default class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        var self = this;
        setTimeout(() => {
            this.setState({ loading: false });
        }, 2000);
        // setTimeout(function () {
        //     self.setState = {
        //         loading: false
        //     }
        // }, 2000);
    }
    render() {
        const {loading} = this.state;
        return <Card title={this.props.myTrackTitle} className="TrackCard " loading={loading}>
            <div><span style={{ 'color': '#f50' }}> ● </span> {this.props.myTrackContent}</div>
            <div>{this.props.myTrackContents}</div>
        </Card>;
    }
}