// @flow
import React, { Component } from "react"
import { connect } from "react-redux"
import GamesList from "./GamesList"
import classnames from "classnames"
import { fetchGames } from "../actions/actions"

type Props = {
  games: Array<string>,
  fetchGames: Function
}

class GameForm extends Component<Props> {
  state = {
    title: "",
    cover: "",
    errors: {}
  }

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors)
      delete errors[e.target.name]
      this.setState({ [e.target.name]: e.target.value, errors })
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    // validation
    let errors = {}
    if (this.state.title === "") errors.title = "Can't be empty"
    if (this.state.cover === "") errors.cover = "Can't be empty"
    this.setState({ errors })
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h1>Add New Game</h1>

        <div
          className={classnames("field", { error: !!this.state.errors.title })}
        >
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
          <span>{this.state.errors.title}</span>
        </div>
        <div
          className={classnames("field", { error: !!this.state.errors.cover })}
        >
          <label htmlFor="cover">Cover URL</label>
          <input
            name="cover"
            value={this.state.cover}
            onChange={this.handleChange}
            id="cover"
          />
          <span>{this.state.errors.cover}</span>
        </div>
        <div className="field">
          {this.state.cover !== "" && (
            <img
              src={this.state.cover}
              alt="Cover"
              className="ui small bordered image"
            />
          )}
        </div>
        <div className="field">
          <button className="ui primary button">Save</button>
        </div>
      </form>
    )
  }
}

export default GameForm
