import './styles/style.less'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const rootElement = document.createElement('<div id="root"></div>')
document.body.appendChild(rootElement)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

render(App)

if(module.hot) {
  module.hot.accept('./components/App', ()=> render(App))
}