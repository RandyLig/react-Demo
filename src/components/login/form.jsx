import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React, { Component } from 'react';
import { render } from "react-dom";
import { browserHistory, hashHistory, Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });

            location.assign(`/guide`)
        }
        // console.log(browserHistory.getCurrentLocation()); //获取当前URL信息
        console.log(location.pathname)
    }

    // handleLogin(event) {
    //     event.preventDefault()
    //     const path = `/`
    //     hashHistory.pushState(path)
    // }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                        ) }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                        ) }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                        ) }
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </FormItem>
            </Form>
        );
    }

}
const MyNormalLoginForm = Form.create()(NormalLoginForm);
// LoginForm = Form.create()(LoginForm);
export default MyNormalLoginForm;