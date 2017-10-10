import React, {Component} from 'react';
import {render} from "react-dom";
import { Icon, Input } from 'antd'
import Tab from './tabs'
const Search = Input.Search;

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount() {
    }
    render() {
        return <div >
           <Tab></Tab>
        </div>;
    }
}