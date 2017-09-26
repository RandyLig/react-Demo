import React, { Component } from 'react';
import { render } from "react-dom";
import Header from '../myTrack/header'
import AdviceBtn from './advice-btn'
import { Rate, Tabs, Icon } from 'antd'
import { Input, Button } from 'antd';
const { TextArea } = Input;

export default class Advice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "留下邮箱/手机号/QQ号"
        }
    }
    handleSubmit(e) {
        console.log(this.refs.nameInput);
        var input = React.findDOM(this.refs.nameInput);
        var inputValue = input.value;
        console.log(inputValue);
    }
    render() {
        return <div>
            <Header headerText="产品建议"></Header>
            <div className="advice__content">
                <p>请输入描述<span>*</span></p>
                <TextArea autosize={{ minRows: 3, maxRows: 5 }} placeholder="请输入内容 4-200字" ref='nameInput'></TextArea>
                <Input placeholder={this.state.value}  className="advice__content-contact" />
                <Button type="primary" className="advice__content-submit" onClick={this.handleSubmit}>提交</Button>
            </div>
        </div>;
    }
}