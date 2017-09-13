import './styles/style.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const rootElement = document.querySelector('#root')

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement
  )
}

render(App)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', (App) => render(App))
}
