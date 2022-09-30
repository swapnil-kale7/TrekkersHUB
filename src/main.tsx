import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import {HashRouter as BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
