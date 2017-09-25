import React, { Component } from 'react';
import { render } from "react-dom";
import LogoGather from './logo';
import { Input, Icon } from 'antd';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <LogoGather>
            </LogoGather>
        </div>;
    }
}