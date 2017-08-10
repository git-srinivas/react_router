import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'
const isActiveFun = (match, location) => {
  console.log(match,location);
  return match;
}
const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to="/about">about</NavLink>
    <NavLink
      isActive = {isActiveFun}
      activeClassName="active"
      to="/contact/me.html">contact</NavLink>
      <NavLink to={{pathname: '/srini', search: 'id=456'}}>Object</NavLink>
      <NavLink to="/contact/xxx/xxx/xxxx/x">404</NavLink>
      <NavLink activeClassName="active" to="/menu">menu</NavLink>
      <NavLink to="/redir/123">redir</NavLink>
  </nav>
)

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <NavLink to="/menu/food">Food</NavLink>
    <NavLink to="/menu/drink">Drinks</NavLink>
    <NavLink to="/menu/sides">Sides</NavLink>
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>
)

const App = () => (
<Router>
  <div>
    <Links />
  <Switch>
    <Route exact path="/" render = {() => <h1>Home</h1>}></Route>
    <Route  path="/about/:page?/:subpage?" render = {({match}) => (
      <h1>
        PAGE:about<br/>
        Subpage:{match.params.page || 'nothing passed'}<br/>
        subSub:{match.params.subpage || 'pass value'}
      </h1>
    )}></Route>
    <Route  path="/contact/:a:b(\.[a-z]+)" render = {() => <h1>Contact</h1>}></Route>
    <Route path="/srini" render={({match, location}) => (
       <div>
         <p>root</p>
         <p>{JSON.stringify(match)}</p>
         <p>{JSON.stringify(location)}</p>
         <p>{new URLSearchParams(location.search).get('id')}</p>
       </div>
     )} />
      <Route path="/menu" component={Menu} />
      <Route path="/redir/:str" render={({match}) => (
          <Redirect to={`/new/${match.params.str}`} />
        )} />
        <Route
          path="/new/:str"
          render={({match}) => (<h1>New: {match.params.str}</h1>)}/>
     <Route render={() => <h1>Page not found</h1>} />
  </Switch>
  </div>
</Router>
)
 export default App
