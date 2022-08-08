import React from "react"
import { createRoot } from "react-dom/client"
import Router from "./components/Router"
import './styles/main.scss'

const App = () => {
    return (
        <Router/>
    )
}

createRoot(document.getElementById('root')).render(<App/>)