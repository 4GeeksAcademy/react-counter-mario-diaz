import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter'
const root = ReactDOM.createRoot(document.getElementById('root'))
let addSeconds = 0

setInterval(() => {
  addSeconds++
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={addSeconds}/>
    </React.StrictMode>,
  )
  console.log(addSeconds)
}, 1000)


