import React, { Component } from 'react';
import { render } from "react-dom";
import GuideHeader from './guide-header'
import SchoolAround from './school-around'
export default class Guide extends React.Component {
    render() {
        return <div>
            <GuideHeader></GuideHeader>
            <SchoolAround></SchoolAround>
        </div>;
    }
}