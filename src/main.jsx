import React, {useContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { Context } from './component/context'
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
      <Context>
        <App />
      </Context>
      </BrowserRouter>
    </React.StrictMode>
)

