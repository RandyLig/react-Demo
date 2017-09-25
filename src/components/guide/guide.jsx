import React, { Component } from 'react';
import { render } from "react-dom";
import GuideHeader from './guide-header'
import SchoolAround from './school-around'
import MenuLeft from '../menu/menu'
import GuideContent from "./guide-content"
export default class Guide extends React.Component {
    constructor(props) {
        super(props)
        console.log(location.pathname)
    }
    render() {
        return <div>
            <GuideHeader></GuideHeader>
            <SchoolAround></SchoolAround>
            <MenuLeft></MenuLeft>
            <GuideContent>
            </GuideContent>
        </div>;
    }
}