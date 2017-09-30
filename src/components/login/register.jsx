import React, { Component } from 'react';
import { render } from "react-dom";
import LogoGather from './logo';
import { Form, Icon, Input, Button, Checkbox, Tooltip, Cascader, Select, Row, Col, AutoComplete } from 'antd';
import Header2 from '../header-2'
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class Register extends React.Component {
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
            this.state = {
                confirmDirty: false,
                autoCompleteResult: [],
            };
            this.handleConfirmBlur = (e) => {
                const value = e.target.value;
                this.setState({ confirmDirty: this.state.confirmDirty || !!value });
            }
            this.checkPassword = (rule, value, callback) => {
                const form = this.props.form;
                if (value && value !== form.getFieldValue('password')) {
                callback('Two passwords that you enter is inconsistent!');
                } else {
                callback();
                }
            }
            this.checkConfirm = (rule, value, callback) => {
                const form = this.props.form;
                if (value && this.state.confirmDirty) {
                form.validateFields(['confirm'], { force: true });
                }
                callback();
            }

            this.handleWebsiteChange = (value) => {
                let autoCompleteResult;
                if (!value) {
                autoCompleteResult = [];
                } else {
                autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
                }
                this.setState({ autoCompleteResult });
            }
        }

        render() {
            const { getFieldDecorator } = this.props.form;
            const { autoCompleteResult } = this.state;
            const formItemLayout = {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 6 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 14 },
                },
                };
                const tailFormItemLayout = {
                wrapperCol: {
                    xs: {
                    span: 24,
                    offset: 0,
                    },
                    sm: {
                    span: 14,
                    offset: 6,
                    },
                },
        };
        const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
        })(
        <Select style={{ width: 60 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
            return <div>
                <Header2></Header2>
                <Form onSubmit={this.handleSubmit} className="register">
            <FormItem
            {...formItemLayout}
            label="Phone Number"
            >
            {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="Website"
            >
            {getFieldDecorator('website', {
                rules: [{ required: true, message: 'Please input website!' }],
            })(
                <AutoComplete
                dataSource={websiteOptions}
                onChange={this.handleWebsiteChange}
                placeholder="website"
                >
                <Input />
                </AutoComplete>
            )}
            </FormItem>
            <FormItem
            {...formItemLayout}
            label="Captcha"
            extra="We must make sure that your are a human."
            >
            <Row gutter={8}>
                <Col span={12}>
                {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                    <Input size="large" />
                )}
                </Col>
                <Col span={12}>
                <Button size="large">Get captcha</Button>
                </Col>
            </Row>
            </FormItem>
            <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
                <Checkbox>I have read the <a href="">agreement</a></Checkbox>
            )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">Register and Go</Button>
            </FormItem>
        </Form>
            </div>;
    }
}

const RegisterForm = Form.create()(Register);
// LoginForm = Form.create()(LoginForm);
export default RegisterForm;
