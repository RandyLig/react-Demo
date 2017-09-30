import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop,Modal,Button,DatePicker } from 'antd'
import Header from '../myTrack/header'
import TrackCard from '../myTrack/trackCard'
import Calendars from './calendar' // 日历控件，暂时不用
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
const { MonthPicker, RangePicker } = DatePicker;
function onChange(date, dateString) {
  console.log(date, dateString);
}
export default class MyTravel extends React.Component {
    constructor(props) {
        super(props)
          this.state = { visible: false }
            this.showModal = () => {
                this.setState({
                visible: true,
                });
            }
            this.handleOk = (e) => {
                console.log(e);
                this.setState({
                visible: false,
                });
            }
            this.handleCancel = (e) => {
                console.log(e);
                this.setState({
                visible: false,
                });
            }
    }
    render() {
        return <div>
        <Header headerText="我的行程" icon="car"></Header>
        <div className="creatTravel">
        <Button onClick={this.showModal}>Create</Button>
        <Modal
          title="创建行程"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <DatePicker onChange={onChange} />
            <br />
            <MonthPicker onChange={onChange} placeholder="Select month" />
            <br />
            <RangePicker onChange={onChange} />
        </div>
        </Modal>
        </div>
        <BackTop /> 
        </div>;
    }
}
