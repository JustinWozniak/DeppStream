import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from '../TwitterFeed/App/App'
import Home from '../../pages/Home'
import Videos from '../Videos/index'
import './Navbar.css'

const Navbar = props => {
  return (
    <Router>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/twitterFeed">Live Twitter Feed</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/twitterFeed">
          <App />
        </Route>
        <Route path="/videos">
          <Videos />
        </Route>
      </Switch>
    </div>
  </Router>
    );
}

export default Navbar