import React, {Component} from 'react';
import {render} from "react-dom";
import { Tabs } from 'antd';
import Header2 from '../header-2'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
export default class TabsBus extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        function Router() {
            var map = new BMap.Map("bus-map");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);   // 地图中心
            var transit = new BMap.TransitRoute(map, {
                renderOptions: { map: map, panel: "bus-result" }
            });
            transit.search("浙江科技学院", "浙江外国语学院");
        }
        Router();
    }
    render() {
        return <div>
            <div id="bus-map"></div><div id="bus-result"></div>
        </div>;
    }
}