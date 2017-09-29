import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop, Calendar, Alert } from 'antd'
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import moment from 'moment';
function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Calendars extends React.Component {
    constructor(props) {
        super(props);
     this.state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }
  this.onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }
  this.onPanelChange = (value) => {
    this.setState({ value });
  }    
    }
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}
