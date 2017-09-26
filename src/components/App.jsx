import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { cache } from 'react-keeper'
import ReactDOM from 'react-dom'
import MyTrack from './myTrack/myTrack'
import MyTravel from './myTravel/myTravel'
import Guide from './guide/guide'
import AroundSchool from './around-school/around-school'
import LogoGather from './login/logo'
import Login from './login/login'
import Help from './help/help'
import About from './about/about'
import Layout from './animation'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
// const getConfirmation = (message, callback) => {
//   const allowTransition = window.confirm(message)               // 用户进入页面前进行的操作
//   callback(allowTransition)
// }

export default class App extends Component {

    render() {
        return (
            // <Guide>

            // </Guide>
            <Router>
                <Switch>
                <Layout>
                    <Route exact path="/" component={Login} cache />
                    <Route path="/guide" component={Guide} cache/>
                    <Route path="/around-school" component={AroundSchool} cache/>
                    <Route path="/myTrack" component={MyTrack} cache/>
                    <Route path="/myTravel" component={MyTravel} cache/>
                    <Route path="/myHelp" component={Help} cache/>
                    <Route path="/About" component={About} cache/>
                    <Route path="/logo" component={LogoGather}  cache/>
                    <Route path="/login" component={Login} cache/>
                </Layout>
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