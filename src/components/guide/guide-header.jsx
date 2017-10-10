import React, { Component } from 'react';
import { render } from "react-dom";
import { Avatar, Badge } from 'antd';
import { Input } from 'antd'
const Search = Input.Search;

export default class GuideHeader extends React.Component {
    constructor(props) {
        super(props)

    }
    handleSearch(event,value) {
        // event.preventDefault()
        console.log(value)
        // const path = `/around-school`
        // history.push(path)
        location.assign(`/navigation`)
        // console.log(location.pathname)
    }
    componentDidMount() {
        function G(id) {
            return document.getElementById(id);
        }

        var map = new BMap.Map("map");
        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {
                "input": "suggestId"
                , "location": map
            });

        ac.addEventListener("onhighlight", function (e) {  //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });

        var myValue;
        ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

            setPlace();
        });

        function setPlace() {
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun() {
                var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                map.centerAndZoom(pp, 18);
                map.addOverlay(new BMap.Marker(pp));    //添加标注
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search(myValue);
        }
    }
    render() {
        return <div className="guide-header">
            <Search
                type="text"
                placeholder="input you destination"
                style={{ 'width': '200px' }}
                onSearch={this.handleSearch}
                className="search"
                id="suggestId"
                autocomplete
                />
            <div id="searchResultPanel" style={{ 'border': '1px solid #C0C0C0', 'width': '150px', 'height': 'auto', 'display': 'none', 'zIndex': '1000' }} class="searchResult"></div>
        </div>;
    }
}