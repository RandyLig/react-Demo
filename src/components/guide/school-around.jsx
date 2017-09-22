import React, { Component } from 'react';
import { render } from "react-dom";
import { Icon } from 'antd'
import { browserHistory } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
const history = createHistory()
export default class SchoolAround extends React.Component {
    constructor(props) {
        super(props);
        this.animation = [
            {
                repeatDelay: 500,
                y: -20,
                repeat: -1,
                yoyo: true,
                ease: ease0,
                duration: 1000
            },
            {
                repeatDelay: 500,
                appearTo: 0,
                scaleX: 0,
                scaleY: 2,
                repeat: -1,
                yoyo: true,
                ease: ease1,
                duration: 1000,
            }
        ];
    }
    handleRoute(event) {
        event.preventDefault()
        const path = `/around-school`
        history.push(path)
    }
    render() {
        return <div className="school-around" onClick={this.handleRoute}>
            <TweenOne
                animation={this.animation}
                paused={this.props.paused}
                ><Icon type="environment" className="environment"></Icon>
            </TweenOne>
            <p>周边高校</p>
        </div>;
    }
}

SchoolAround.PropTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};