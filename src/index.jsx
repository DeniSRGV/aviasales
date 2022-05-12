import React from 'react'
import ReactDOMClient, { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './redux/store/store'
import './index.css'
import App from './components/App/App'
import './scss/index.scss'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
