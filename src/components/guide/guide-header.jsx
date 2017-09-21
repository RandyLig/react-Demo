import React, { Component } from 'react';
import { render } from "react-dom";
import { Avatar, Badge } from 'antd';
import { Input } from 'antd'
const Search = Input.Search;

export default class GuideHeader extends React.Component {
    render() {
        return <div className="guide-header">
            <Search
                placeholder="input you destination"
                style={{ width: 200 }}
                onSearch={value => console.log(value)}
                className="search"
            />
        </div>;
    }
}