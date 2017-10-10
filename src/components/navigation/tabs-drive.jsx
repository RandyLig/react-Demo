import React, {Component} from 'react';
import {render} from "react-dom";
import { Tabs } from 'antd';
import Header2 from '../header-2'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
export default class TabsDrive extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        function Router() {
            var map = new BMap.Map("drive-map");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
            var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, panel: "drive-result", autoViewport: true } });
            driving.search("浙江科技学院", "浙江外国语学院");
        }
        Router();
    }
    render() {
        return <div>
            <div id="drive-map"></div><div id="drive-result"></div>
        </div>;
    }
}