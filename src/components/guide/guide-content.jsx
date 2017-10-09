import React, { Component } from 'react';
import { render } from "react-dom";  // <div style={{"width":"700px","height":"550px","border":"#ccc solid 1px","fontSize":"12px"}} id="map"></div>
export default class GuideContent extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var map
    function initMap() {
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
      addC(); //添加定位
    }
    function createMap() {
      map = new BMap.Map("map");
      map.centerAndZoom(new BMap.Point(120.03481, 30.225899), 18);
    }
    function setMapEvent() {
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target, window) {
      target.addEventListener("click", function () {
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay() {
      //   var markers = [
      //     { content: "我的备注", title: "我的标记", imageOffset: { width: 0, height: 3 }, position: { lat: 30.22515, lng: 120.034352 } }
      //   ];
      //   for (var index = 0; index < markers.length; index++) {
      //     var point = new BMap.Point(markers[index].position.lng, markers[index].position.lat);
      //     // var marker = new BMap.Marker(point, {
      //     //   icon: new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png", new BMap.Size(20, 25), {
      //     //     imageOffset: new BMap.Size(markers[index].imageOffset.width, markers[index].imageOffset.height)
      //     //   })
      //     // });
      //     var label = new BMap.Label(markers[index].title, { offset: new BMap.Size(25, 5) });
      //     var opts = {
      //       width: 200,
      //       title: markers[index].title,
      //       enableMessage: false
      //     };
      //     // var infoWindow = new BMap.InfoWindow(markers[index].content, opts);
      //     // // marker.setLabel(label);
      //     // addClickHandler(marker, infoWindow);
      //     // map.addOverlay(marker);
      //   };
    }
    //向地图添加控件
    function addMapControl() {
      var scaleControl = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_BOTTOM_LEFT }); //标尺的位置
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE }); // 放大缩小按钮位置
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({ anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: true });  // 小窗口位置
      map.addControl(overviewControl);
    }
    function addC() {
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl({
        anchor: BMAP_ANCHOR_TOP_RIGHT,
      });
      geolocationControl.addEventListener("locationSuccess", function (e) {
        // 定位成功事件
        var address = '';
        address += e.addressComponent.province;
        address += e.addressComponent.city;
        address += e.addressComponent.district;
        address += e.addressComponent.street;
        address += e.addressComponent.streetNumber;
        alert("当前定位地址为：" + address);
      });
      // 定位失败事件
      geolocationControl.addEventListener("locationError", function (e) {           
        alert(e.message);
      });
       map.addControl(geolocationControl);
                                                                                      // var local = new BMap.LocalSearch(map, {
                                                                                      //   renderOptions: { map: map }
                                                                                      // });
                                                                                      // local.search("景点");    //搜索景点
                                                                                    
    }

    initMap();
    // map.setMapStyle({ style: 'pink' });  // 添加地图样式
  }
  render() {
    return <div className="guide-content" id="map">
    </div>;
  }
}