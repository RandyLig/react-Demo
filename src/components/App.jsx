import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import ReactDOM from 'react-dom'
import MyTrack from './myTrack/myTrack'
export default class App extends Component {

    render() {
        return (
            <MyTrack topbarText="我的行程"></MyTrack>
        )
        // return (
        //     // <Router>
        //     //     {/* <Route Component={news} path='news'></Route> */}
        //     // </Router>
        // )
    }
}

// render(<Router/>, document.getElementById('root'));