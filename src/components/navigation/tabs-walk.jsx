import React, {Component} from 'react';
import {render} from "react-dom";
import { Tabs } from 'antd';
import Header2 from '../header-2'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}
export default class TabsWalk extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        function Router() {
            var map = new BMap.Map("map");
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
            var walking = new BMap.WalkingRoute(map, { renderOptions: { map: map, panel: "result", autoViewport: true } });
            walking.search("浙江科技学院", "浙江外国语学院");
        }
        Router();
    }
    render() {
        return <div>
            <div id="map"></div><div id="result"></div>
        </div>;
    }
}