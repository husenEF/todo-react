import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { UserContextMaster, ArticleContentMaster } from "./context";
import { Home, User, User2, Articles } from "./pages";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/" className="navbar-brand">
            Todo Apps
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/"
                  className="nav-link"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/users"
                  className="nav-link"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/users2"
                  className="nav-link"
                >
                  Users 2
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/articles"
                  className="nav-link"
                >
                  Articles
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/users2">
            <UserContextMaster.UserProvider>
              <User2 />
            </UserContextMaster.UserProvider>
          </Route>
          <Route path="/users">
            <User />
          </Route>
          <Route path="/articles">
            <ArticleContentMaster.ArticleProvider>
              <Articles />
            </ArticleContentMaster.ArticleProvider>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
