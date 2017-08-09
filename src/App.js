import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css'

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to="/about">about</NavLink>
    <NavLink activeClassName="active" to="/contact">contact</NavLink>
  </nav>
)
const App = () => (
<Router>
  <div>
    <Links />
    <Route exact path="/" render = {() => <h1>Home</h1>}></Route>
    <Route  path="/about" render = {() => <h1>About</h1>}></Route>
    <Route  path="/contact" render = {() => <h1>Contact</h1>}></Route>
  </div>
</Router>
)
 export default App
