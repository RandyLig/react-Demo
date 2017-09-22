import React, { Component } from 'react';
import { render } from "react-dom";
import Header from '../myTrack/header'
export default class About extends React.Component {
    render() {
        return <div className="about">
            <Header headerText="关于"></Header>
            <section className="about-logo"><p> School Guide_V-0.1 </p></section>
            <footer className="about-footer"><p>develop by 李钢 & 杨玲利 & 宋玺龙</p>
            <p>You can find out our repository on github: <a>https://github.com/RandyLig/react-Demo</a></p>
            <p> © 2017 SchoolGuide</p>
            </footer>
        </div>;
    }
}