import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends React.Component {
    render () {
        return (
            <ReactCSSTransitionGroup
            component="div"
            className="react-container"
            transitionName="slide-in"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
                <div key={this.props.location.pathname} className={this.props.location.pathname}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        )
    }
}

export default Layout