import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
//import App from './App'
const App = lazy(() => import('./App'))
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Suspense fallback={<div style={{ display: 'block' }}>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister()
