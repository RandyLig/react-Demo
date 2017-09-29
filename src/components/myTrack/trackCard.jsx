import { Card } from 'antd'; // loading 可以优化体验 {...this.state.loaded? '': 'loading'}
import React, {Component} from 'react';
import {render} from "react-dom";
export default class TrackCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    componentDidMount() {
        this.setState = {
            loaded: !this.state.loaded
        }
    }
    render() {
        return <Card title={this.props.myTrackTitle} className="TrackCard ">
            {this.props.myTrackContent}
        </Card>;
    }
}