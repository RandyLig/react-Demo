import React, { Component } from 'react'
import { Router, Route, Link, Switch } from 'react-router'
import ReactDOM from 'react-dom'
import MyTrack from './myTrack/myTrack'
import MyTravel from './myTravel/myTravel'
import Guide from './guide/guide'
import AroundSchool from './around-school/around-school'
import LogoGather from './logo'
import Help from './help/help'
import About from './about/about'
import { Input } from 'antd'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
const Search = Input.Search;
export default class App extends Component {

    render() {
        return (
            // <Guide>

            // </Guide>
            <Router history= { customHistory }>
                <Switch>
                    <Route exact path="/" component={Guide}/>
                    <Route path="/around-school" component={AroundSchool}/>
                    <Route path="/myTrack" component={MyTrack}/>
                    <Route path="/myTravel" component={MyTravel}/>
                    <Route path="/myHelp" component={Help}/>
                    <Route path="/About" component={About}/>
                    <Route path="/logo" component={LogoGather} />
                </Switch>
            </Router>
        )
        // return (
        //     // <Router>
        //     //     {/* <Route Component={news} path='news'></Route> */}
        //     // </Router>
        // )
    }
}

// render(<Router/>, document.getElementById('root'));