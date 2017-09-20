import React, { Component } from 'react';
import { render } from "react-dom";
import GuideHeader from './guide-header'
import SchoolAround from './school-around'
import MenuLeft from '../menu/menu'
export default class Guide extends React.Component {
    render() {
        return <div>
            <GuideHeader></GuideHeader>
            <SchoolAround></SchoolAround>
            <MenuLeft></MenuLeft>
        </div>;
    }
}