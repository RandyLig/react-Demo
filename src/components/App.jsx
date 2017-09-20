import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import ReactDOM from 'react-dom'
import MyTrack from './myTrack/myTrack'
import Guide from './guide/guide'
import AroundSchool from './around-school/around-school'
import { Input } from 'antd'
const Search = Input.Search;
export default class App extends Component {

    render() {
        return (
            <Guide>
               
            </Guide>
        )
        // return (
        //     // <Router>
        //     //     {/* <Route Component={news} path='news'></Route> */}
        //     // </Router>
        // )
    }
}

// render(<Router/>, document.getElementById('root'));