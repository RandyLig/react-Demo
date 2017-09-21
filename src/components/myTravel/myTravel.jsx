import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop } from 'antd'
import Header from '../myTrack/header'
import TrackCard from '../myTrack/trackCard'
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
export default class MyTravel extends React.Component {
    render() {
        return <div>
        <Header headerText="我的行程" icon="car"></Header>
        <TrackCard></TrackCard> 
        <TrackCard></TrackCard>
        <BackTop /> 
        </div>;
    }
}
