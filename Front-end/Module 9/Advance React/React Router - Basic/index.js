import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"

/**
 * Challenge:
 * 
 * 1. ✅Set up React Router
 * 2. Add Home, About, and Contact pages to this app
 * 3. Add a nav bar to easily navigate to those pages
 */

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
