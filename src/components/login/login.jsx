import React, { Component } from 'react';
import { render } from "react-dom";
import LogoGather from './logo';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import MyNormalLoginForm from './form'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <LogoGather>
            </LogoGather>
            <MyNormalLoginForm>
            </MyNormalLoginForm>
        </div>;
    }
}



