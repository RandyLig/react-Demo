import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop } from 'antd'
import Header from './header'
import TrackCard from './trackCard'
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
export default class MyTrack extends React.Component {
    render() {
        return <div>
        <Header headerText="我的足迹" icon="car"></Header>
        <TrackCard myTrackTitle="杭州" myTrackContent="浙江科技学院"></TrackCard> 
        <TrackCard myTrackTitle="杭州" myTrackContent="浙江工业大学"></TrackCard>
        <TrackCard myTrackTitle="绍兴" myTrackContent="浙江文理学院"></TrackCard>
        <BackTop /> 
        </div>;
    }
}
