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
import Bio from '../../pages/Bio'
import Movies from '../../pages/Movies/index'
import './Navbar.css'

const Navbar = props => {
  return (
    <Router>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/bio">Bio</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/twitterFeed">Live Twitter Feed</Link>
        </li>
        <li>
          <Link to="/videos">Videos</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/movies">
          <Movies />
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