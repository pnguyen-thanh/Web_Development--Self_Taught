import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </div>
    )
}

export default App