import React from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'
// import './my-style.css'
import 'virtual:windi-devtools'
import './index.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
