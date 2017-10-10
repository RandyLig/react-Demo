import React, {Component} from 'react';
import {render} from "react-dom";
import { Tabs } from 'antd';
import TabsWalk from './tabs-walk'
import TabsDrive from './tabs-drive'
import TabsBus from './tabs-bus'
import Header2 from '../header-2'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
export default class Tab extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
       
    }
    render() {
        return <div className="tabs">
            <Header2></Header2>
            <Tabs onChange={callback} type="line">
                <TabPane tab="驾车" key="1"><TabsDrive></TabsDrive></TabPane>
                <TabPane tab="公交" key="2"><TabsBus></TabsBus></TabPane>
                <TabPane tab="步行" key="3"><TabsWalk></TabsWalk></TabPane>
            </Tabs>
        </div>;
    }
}