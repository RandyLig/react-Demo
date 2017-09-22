import React, { Component } from 'react';
import { render } from "react-dom";
import LogoGather from './logo';
import { Input, Icon } from 'antd';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
        this.emitEmpty = () => {
            this.userNameInput.focus();
            this.setState({ userName: '' });
        }
        this.onChangeUserName = (e) => {
            this.setState({ userName: e.target.value });
        }
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return <div>
            <LogoGather>

            </LogoGather>
            <Input
                className="login-input"
                placeholder="Enter your userName"
                prefix={<Icon type="user" />}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                />
        </div>;
    }
}