import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop, Carousel, Tag ,Input, Tooltip, Button } from 'antd'  // <h4 style={{ margin: '16px 20px' }}>你的标签:</h4>
            // <div className="Tag">
            //     <Tag color="#f50" closable className="Tag-item">#f50</Tag>
            //     <Tag color="#2db7f5" closable className="Tag-item">#2db7f5</Tag>
            //     <Tag color="#87d068" closable className="Tag-item">#87d068</Tag>
            //     <Tag color="#108ee9" closable className="Tag-item">#108ee9</Tag>
            //     <Tag color="#393E46" closable className="Tag-item">浙江科技学院</Tag>
            // </div>
import Header from '../myTrack/header'
import Tags from './tag'
// import 'antd/lib/button/style'; // 或者 antd/lib/button/style/css 加载 css 文件
export default class MyCollect extends React.Component {
    render() {
        return <div>
            <Header headerText="我的收藏" icon="star"></Header>
            <Carousel autoplay>
                <div><h3>可以在这里</h3></div>
                <div><h3>放你去过的</h3></div>
                <div><h3>地方的风景</h3></div>
                <div><h3>或者自拍或足迹</h3></div>
            </Carousel>
            <Tags></Tags>
            <BackTop />
        </div>;
    }
}
