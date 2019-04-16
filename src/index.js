import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import { Provider } from 'react-redux'
import store from '@/redux'
import axios from '@/lib/axios'

// 样式重置
import '@/style/reset.less'
import '@/style/index.less'

// 绑定 全局方法 axios
React.Component.prototype.axios = axios

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

// ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
