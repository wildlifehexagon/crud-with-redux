import React, { Component } from "react"
import logo from "./logo.svg"
import { NavLink, Route } from "react-router-dom"
import GamesPage from "./components/GamesPage"
import GameForm from "./components/GameForm"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <NavLink className="item" activeClassName="active" exact to="/games">
            Games
          </NavLink>
          <NavLink
            className="item"
            activeClassName="active"
            exact
            to="/games/new"
          >
            Add New Game
          </NavLink>
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GameForm} />
      </div>
    )
  }
}

export default App
